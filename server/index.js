const express = require('express');
const products = require('../models/products')

const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// Get all products default parameters: page=1, count=5
app.get('/products', (req, res) => {
  req.params.page = Number(req.query.page) || 1;
  req.params.count = Number(req.query.count) || 5;
  console.log('somebody hit me');
  products.getAllProducts(req.params, (err, results) => {
    err ? res.status(400).send('Error in getAllProducts', err)
      : res.status(200).send(results);
  });
});

// Get one product by it's ID.  Include features.
app.get('/products/:product_id', (req, res) => {
  const id = Number(req.params.product_id);

  products.getOneProduct(id, (err, results) => {
    err ? res.status(400).send(`Error getting product id of: ${id}`, err)
      : res.status(200).send(results);
  });
});

// Get all styles of one product by it's ID
app.get('/products/:product_id/styles', (req, res) => {
  const id = Number(req.params.product_id);

  products.getStyles(id, (err, results) => {
    err ? res.status(400).send(`Error getting styles for product id of: ${id}`, err)
      : res.status(200).send(results);
  });
});

// Get products related to a product ID
app.get('/products/:product_id/related', (req, res) => {
  const id = Number(req.params.product_id);

  products.getRelated(id, (err, results) => {
    let relatedIdsOnly = [];
    for (var i = 0; i < results.length; i++) {
      relatedIdsOnly.push(results[i].related_product_id)
    }
    err ? res.status(400).send(`Error getting related products for product id of: ${id}`, err)
      : res.status(200).send(relatedIdsOnly);
  })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
