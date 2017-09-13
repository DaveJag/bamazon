//bamazonCustomer.js

var mysql = require("mysql");
var inquirer = require("inquirer");
var totalCost = 0;
var orderTotal = 0;

//Create a database connection with Node
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //username
    user: "root",
    password: "",
    database: 'bamazon'
});

//Verify db connection.
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to MySQL" + connection.threadId);
    queryAll();
});

//Display all items for sale
function queryAll() {
    console.log("\r\n----------------------------------------------------------------------");

    var query = connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price + " | ");
        }
        console.log("----------------------------------------------------------------------\r\n");


        inquirer.prompt([{
                type: "input",
                name: "productId",
                message: "Please enter the 6-digit item number for the product you want to buy. \r\n"
            },
            {
                type: "input",
                name: "quantity",
                message: "Please enter how many of those you want to buy.\r\n"
            }
        ]).then(function(order) {
            var productId = order.productId;
            var quantity = order.quantity;
            //checkInventory(productId, quantity);

            connection.query("SELECT * FROM products WHERE item_id = " + productId, function(err, item) {

                console.log("You selected " + quantity + " of item " + productId + " - " + item[0].product_name);

                var available = item[0].stock_quantity;
                var orderTotal = quantity * item[0].price;
                //console.log("available is " + available);

                if (quantity <= available) {
                    console.log("\n Good news!  We currently have " + item[0].stock_quantity + " of those in stock. \r\n");
                    processOrder(productId, quantity, available, orderTotal);
                } else if (quantity > available) {
                    var balance = quantity - available;
                    console.log("Insufficient Quantity. \r\n We will ship " +
                        available + " now and the remaining " + balance + " when they are in stock. \r\n");
                } //end else if
            });
        }); //end connection
    });
} //end function

//Update the database with new stock quantities and present current cost of the order. 
function processOrder(productId, quantity, available, orderTotal) {
    var updateInv = available - quantity;
    connection.query(
        "UPDATE products SET ? WHERE ?", [{
                stock_quantity: updateInv
            },
            {
                item_id: productId
            }
        ],
        function(error) {
            if (error) throw err;
            var available = updateInv;
            totalCost = totalCost + orderTotal;
            console.log("\r\n Your current subtotal is $" + totalCost);
            shopMore();
        });
}

//Ask user if they wish to continue shopping, finish their order, or exit.
function shopMore() {
	inquirer.prompt([
	{
	    type: "list",
	    name: "shopOption",
	    message: "What would you like to do?",
	    choices: ["Shop for another item.", "Finish My Order.", "Exit Application. \r\n"]
  	}
  	]).then(function(user) {
	
		if (user.shopOption === "Shop for another item.") {
			queryAll();
		}
		else if (user.shopOption === "Finish My Order.") {
			finishOrder(totalCost.toFixed(2));
	  	}
	  	else {
			console.log("\r\n Thank you for visiting Bamazon. Please come back again! ");
			return;
		}
    })
};

//Give user the total cost of their order.
function finishOrder(totalCost) {
    console.log("\r\n Your total order is $" + totalCost);
    console.log("\r\n Thank you for shopping with Bamazon!");
}