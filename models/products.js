// import connection to psql db
const postgres = require('../database');

const getAllProducts = (requestParams, callback) => {
	const rangeTop = requestParams.page * requestParams.count;
	const rangeBottom = rangeTop - requestParams.count;

	const qString =
	  `SELECT * FROM products
		WHERE id between $1 and $2`;

	postgres.query(qString, [rangeBottom, rangeTop], (err, results) => {
		callback(err, results.rows)
	});
};

const getOneProduct = (product_id, callback) => {
	const qString =
	  `SELECT
	    products.id,
	    name,
	    slogan,
	    description,
	    category,
	    default_price,
	  jsonb_agg(json_build_object(
	    'feature', features.feature,
	    'value', features.value)) as features
    FROM products JOIN features ON features.product_id = products.id
	  WHERE products.id = $1 GROUP BY products.id`;

	postgres.query(qString, [product_id], (err, results) => {
		callback(err, results.rows[0]);
	});
};

const getStyles = (product_id, callback) => {
	const qString =
	`SELECT
	  styles.id,
		name,
		sale_price,
		original_price,
		default_style,
	jsonb_agg(distinct jsonb_build_object(
		'thumbnail_url', photos.thumbnail_url,
		'url', photos.url)) as photos,
  jsonb_object_agg(
		'sku_id', json_build_object(
			'quantity', skus.quantity,
			'size', skus.size)) as skus
  FROM styles
	JOIN photos on photos.style_id = styles.id
	JOIN skus ON skus.style_id = styles.id
	WHERE styles.product_id = $1
	GROUP BY styles.id`;

	postgres.query(qString, [product_id], (err, results) => {
		callback(err, results.rows[0]);
	});
};

const getRelated = (product_id, callback) => {
	const qString =
	`SELECT related_product_id
	FROM related_products
	WHERE current_product_id = $1`;

	postgres.query(qString, [product_id], (err, results) => {
		callback(err, results.rows);
	});
};

module.exports = {
	getAllProducts,
	getOneProduct,
	getStyles,
	getRelated
};
