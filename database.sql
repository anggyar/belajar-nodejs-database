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

CREATE Table categories (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
) engine innodb;

SELECT * FROM categories;

CREATE Table wallet (
    id VARCHAR(100) NOT NULL,
    balance INT NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT walllet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
) engine innodb;

SELECT * FROM wallet;
DESC wallet;

CREATE Table comments (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(100) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    PRIMARY KEY (id),
    CONSTRAINT comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) engine innodb;

SELECT * FROM comments;

INSERT INTO comments (customer_id, title, description) 
VALUES("anggy", "Comment 1", "Sample comment 1"),
("anggy", "Comment 2", "Sample comment 2"),
("asyraf", "Comment 1", "Sample comment 1"),
("asyraf", "Comment 2", "Sample comment 2");

CREATE Table likes (
    customer_id VARCHAR(100) NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (customer_id, product_id),
    CONSTRAINT likes_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT likes_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
) engine innodb;

SELECT * FROM likes;

CREATE Table _loves (
    A VARCHAR(100) NOT NULL,
    B VARCHAR(100) NOT NULL,
    PRIMARY KEY(A, B),
    constraint customer_loves_fk FOREIGN KEY (A) REFERENCES customers (id),
    constraint likes_product_fk FOREIGN KEY(B) REFERENCES products(id)
) engine innodb;

SELECT * FROM _loves;

-- ! BELAJAR DATABASE PRISMA
CREATE DATABASE belajar_nodejs_prisma;

USE belajar_nodejs_prisma;

SHOW TABLES;