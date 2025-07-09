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