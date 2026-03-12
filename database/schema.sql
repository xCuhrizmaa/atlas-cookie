
CREATE TABLE orders(
 id SERIAL PRIMARY KEY,
 customer_name TEXT,
 product TEXT,
 created_at TIMESTAMP DEFAULT NOW()
);
