CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
product_name VARCHAR	(100) NOT NULL,
department_name VARCHAR (100) NOT NULL,
price INTEGER(10),
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(1, 'Socks', 'Clothing', 10, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(2, 'TV', 'Electronics', 1000, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(3, 'Computer Monitor', 'Electronics', 200, 20);

INSERT INTO products (item_id	, product_name, department_name, price, stock_quantity)
VALUES(4, 'Tent', 'Outdoors', 300, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(5,'Chocolate Bar', 'Food', 5, 100);

INSERT INTO  products (item_id, product_name, department_name, price, stock_quantity)
VALUES(6,'Bread', 'Food', 3, 75);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(7,'1Q84', 'Books', 10, 18);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(8, 'Counter-Strike', 'Video-Games', 15, 100);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(9, 'Eagles Jersey', 'Clothing', 175, 200);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES(10, 'GPU', 'Electronics', 500, 50);

SELECT * FROM products