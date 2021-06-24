DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS styles CASCADE;
DROP TABLE IF EXISTS related_products;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS skus;


CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
  slogan VARCHAR NOT NULL,
	description VARCHAR,
	category VARCHAR,
	default_price MONEY
);

CREATE TABLE features (
	id SERIAL PRIMARY KEY,
	product_id INT NOT NULL,
	feature VARCHAR,
	value VARCHAR,
	FOREIGN KEY(product_id)
	REFERENCES products(id)
);

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

CREATE TABLE related_products (
	id SERIAL PRIMARY KEY,
	current_product_id INT,
	related_product_id INT,
	FOREIGN KEY(current_product_id)
	REFERENCES products(id)
);

CREATE TABLE photos (
	id SERIAL PRIMARY KEY,
	style_id INT,
	url VARCHAR,
	thumbnail_url VARCHAR,
	FOREIGN KEY(style_id)
	REFERENCES styles(id)
);

CREATE TABLE skus (
	id SERIAL PRIMARY KEY,
	style_id INT,
	size VARCHAR,
	quantity SMALLINT,
	FOREIGN KEY(style_id)
	REFERENCES styles(id)
);
