// import connection to psql db
const postgres = require('../database');

const getAllProducts = (requestParams, callback) => {
	const qString = `SELECT * FROM products WHERE id < ${requestParams.count}`;

	postgres.query(qString, (err, results) => {
		callback(err, results.rows)
	});
};

const getOneProduct = (product_id, callback) => {
	const qString = `SELECT products.id, name, slogan, description, category, default_price, jsonb_agg(json_build_object('feature', features.feature, 'value', features.value)) as features FROM products JOIN features ON features.product_id = products.id WHERE products.id = $1 GROUP BY products.id`;

	postgres.query(qString, [product_id], (err, results) => {
		callback(err, results.rows[0]);
	});
};

const getStyles = (product_id, callback) => {
	const qString = `SELECT * FROM styles WHERE product_id = ${product_id}`;

	postgres.query(qString, (err, results) => {
		callback(err, results.rows);
	});
};

const getRelated = (product_id, callback) => {
	const qString = `SELECT * FROM related_products WHERE current_product_id = ${product_id}`;

	postgres.query(qString, (err, results) => {
		callback(err, results.rows);
	});
};

module.exports = {
	getAllProducts,
	getOneProduct,
	getStyles,
	getRelated
};

// left joins in queries
// aggregate functions?
  //  'jsonB' add array/objs sent to client

// use the explain command while optimizing
// 'create index in postgres'
// \timing command -


// aggregate tables ?