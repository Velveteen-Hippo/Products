DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS features CASCADE;
DROP TABLE IF EXISTS styles CASCADE;
DROP TABLE IF EXISTS related_products CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS skus CASCADE;


CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
  slogan VARCHAR NOT NULL,
	description VARCHAR,
	category VARCHAR,
	default_price MONEY
);

\COPY products
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/product.csv
DELIMITER ','
CSV HEADER

CREATE TABLE features (
	id SERIAL PRIMARY KEY,
	product_id INT NOT NULL,
	feature VARCHAR,
	value VARCHAR,
	FOREIGN KEY(product_id)
	REFERENCES products(id)
);

\COPY features
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/features.csv
DELIMITER ','
CSV HEADER

CREATE TABLE styles (
	id SERIAL PRIMARY KEY,
	product_id INT,
	name VARCHAR,
	sale_price VARCHAR,
	original_price MONEY,
	default_style BOOLEAN,
	FOREIGN KEY(product_id)
	REFERENCES products(id)
);

\COPY styles
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/styles.csv
DELIMITER ','
CSV HEADER

CREATE TABLE related_products (
	id SERIAL PRIMARY KEY,
	current_product_id INT,
	related_product_id INT,
	FOREIGN KEY(current_product_id)
	REFERENCES products(id)
);

\COPY related_products
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/related.csv
DELIMITER ','
CSV HEADER

CREATE TABLE photos (
	id SERIAL PRIMARY KEY,
	style_id INT,
	url VARCHAR,
	thumbnail_url VARCHAR,
	FOREIGN KEY(style_id)
	REFERENCES styles(id)
);

\COPY photos
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/photos.csv
DELIMITER ','
CSV HEADER;

CREATE TABLE skus (
	id SERIAL PRIMARY KEY,
	style_id INT,
	size VARCHAR,
	quantity SMALLINT,
	FOREIGN KEY(style_id)
	REFERENCES styles(id)
);

\COPY skus
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/skus.csv
DELIMITER ','
CSV HEADER
