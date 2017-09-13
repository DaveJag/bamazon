DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

DROP TABLE IF EXISTS products;
CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_id INTEGER(11),
  product_name VARCHAR(100),
  department_name VARCHAR(50),
  price DECIMAL(10,2),
  stock_quantity INTEGER(11),
  PRIMARY KEY (id)
  );
  
  
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(123456, 'LG Electronics BH5140S 500W Blu-Ray Home Theater System', 'Home Theater', 127.99, 300);
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(234567, 'Motorola TalkAbout T289 AA 2-Mile 14-Channel FRT Two-Way Radio (Black Chrome)', 'Electronics', 109.95, 150);
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(345678, 'Fender American Standard Statocaster, Maple Fretboard - 3-Tone Sunburst', 'Musical Instruments', 2037.00, 1);
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(456789, 'Epiphone Les Paul Standard Electric Guitar, Ebony', 'Musical Instruments', 419.00, 5);
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(567891, 'Journey: Greatest Hits, Audio CD', 'CDs & Vinyl', 6.98, 200);
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(678910, 'Poser Pro 11, Design & Animation Software', 'Software', 249.00, 250);
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(789101, 'Hardcover book: Great Jobs for Everyone 50+', 'Books', 10.99, 2500);
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(891011, 'Destiny 2 - Xbox One, Standard Edition', 'Video Games', 59.96, 3000);
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(910111, 'Xbox One S 500GB Console', 'Video Games', '249.00', '10000');
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(101112, 'Call of Duty: WWII - Xbox One Standard Edition', 'Video Games', 59.96, 5000);
  INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
  VALUES(111213, 'Kegerator 5 Gallon Ball Lock Keg NSF Rubber Handle', 'Appliances', 189.99, 150);
  
  
  /*SELECT * FROM products; */
  