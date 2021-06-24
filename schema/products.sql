



CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(64) NOT NULL,
  slogan VARCHAR(64) NOT NULL,
	description VARCHAR(255),
	category VARCHAR(32),
	default_price MONEY,
);

CREATE TABLE features (
	id SERIAL PRIMARY KEY,
	product_id INT NOT NULL,
	feature VARCHAR(32),
	value VARCHAR(32),
);

CREATE TABLE styles (
	id SERIAL PRIMARY KEY,
	product_id INT,
	name VARCHAR(32),
	sale_price MONEY,
	original_price MONEY,
	default_style BOOLEAN
);

CREATE TABLE related (
	id SERIAL PRIMARY KEY,
	current_product_id INT,
	related_product_id INT,
);

CREATE TABLE photos (
	id SERIAL PRIMARY KEY,
	style_id INT,
	url VARCHAR(255),
	thumbnail_url VARCHAR(255)
);

CREATE TABLE skus(
	id SERIAL PRIMARY KEY,
	style_id INT,
	size VARCHAR(8)
	quantity SMALLINT,
)