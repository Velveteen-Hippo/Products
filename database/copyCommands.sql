\i ~/Documents/hack-reactor/sdc/sdc-products-api/schema/products.sql
\i ~/Documents/hack-reactor/sdc/sdc-products-api/schema/dropAll.sql

\COPY products
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/product.csv
DELIMITER ','
CSV HEADER;

\COPY features
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/features.csv
DELIMITER ','
CSV HEADER;

\COPY styles
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/styles.csv
DELIMITER ','
CSV HEADER;

\COPY related_products
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/related.csv
DELIMITER ','
CSV HEADER;

\COPY photos
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/photos.csv
DELIMITER ','
CSV HEADER;

\COPY skus
FROM ~/Documents/hack-reactor/sdc/sdc-products-api/data-raw/skus.csv
DELIMITER ','
CSV HEADER;
