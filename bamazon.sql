
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(13,2),
  stock_quantity INT(10),

  PRIMARY KEY (item_id)
);

drop table products;


insert into products(product_name, department_name, price, stock_quantity)
values("Frosted Flakes","Breakfast",2.50,20);

insert into products(product_name, department_name, price, stock_quantity)
values("Quaker Oats","Breakfast",3.99,15);

insert into products(product_name, department_name, price, stock_quantity)
values("Colgate","Toiletries", 1.99, 50);

insert into products(product_name, department_name, price, stock_quantity)
values("Old Spice","Toiletries",3.50, 10);

insert into products(product_name, department_name, price, stock_quantity)
values("2lbs Chicken Breast","Meat", 5.99, 5);

insert into products(product_name, department_name, price, stock_quantity)
values("3lbs Carne Asada","Meat",6.99,12);

insert into products(product_name, department_name, price, stock_quantity)
values("Doritos","Chips",2.99,3);

insert into products(product_name, department_name, price, stock_quantity)
values("Hot Cheetos","Chips",2.69,5);

insert into products(product_name, department_name, price, stock_quantity)
values("Soylent","Drinks",3.59,25);

insert into products(product_name, department_name, price, stock_quantity)
values("Green Machine","Drinks",4.50,2);

SELECT * FROM products;


