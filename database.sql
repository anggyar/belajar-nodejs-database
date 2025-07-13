CREATE Table sample (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;


CREATE TABLE customers (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    constraint customer_email_unique UNIQUE (email),
    constraint customer_phone_unique UNIQUE (phone)
) ENGINE = InnoDB;

SELECT * FROM customers;


CREATE TABLE products (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
) engine innodb;

SELECT * FROM products;

INSERT INTO products(id, name,  price, stock, category)
VALUES('P0001', 'A', 1000, 100, 'K1'),
('P0002', 'B', 2000, 200, 'K1'),
('P0003', 'C', 3000, 300, 'K1'),
('P0004', 'D', 4000, 400, 'K1'),
('P0005', 'E', 5000, 500, 'K1');

INSERT INTO products(id, name,  price, stock, category)
VALUES('P0006', 'A', 1000, 100, 'K2'),
('P0007', 'B', 2000, 200, 'K2'),
('P0008', 'C', 3000, 300, 'K2'),
('P0009', 'D', 4000, 400, 'K2'),
('P0010', 'E', 5000, 500, 'K2');