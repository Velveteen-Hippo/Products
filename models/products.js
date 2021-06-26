// import connection to psql db
const pg = require('../database');

const getAllProducts = function(requestParams, callback) {
	const selectProducts = `SELECT * FROM products WHERE id < ${requestParams.count}`;

	pg.query(selectProducts, function(err, results) {
		callback(err, results.rows)
	});
};

const getOneProduct = function(product_id, callback) {
	const selectProduct = `SELECT * FROM products WHERE id = ${product_id}`;

	pg.query(selectProduct, function(err, results) {
		callback(err, results.rows);
	});
};

const getStyles = function(product_id, callback) {
	const selectStyles = `SELECT * FROM styles WHERE product_id = ${product_id}`;

	pg.query(selectStyles, function(err, results) {
		callback(err, results.rows);
	});
};

const getRelated = function(product_id,  callback) {
	const selectRelated = `SELECT * FROM related_products WHERE current_product_id = ${product_id}`;

	pg.query(selectRelated, function(err, results) {
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

// explain command while optimizing
// 'create index in postgres'
// \timing command -


// aggregate tables ?