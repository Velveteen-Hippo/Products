const express = require('express');
// const db = require('../database-pg');

const app = express();
const PORT = 3000;


// ROUTES

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/../client/dist'))

app.get('/products', function (req, res) {
  res.send('Retrieves the list of products.')
})

app.get('/products/:product_id', function (req, res) {
  res.send('Returns all product level information for a specified product id.')
})

app.get('/products/:product_id/styles', function (req, res) {
  res.send('Returns the all styles available for the given product.')
})

app.get('/products/:product_id/related', function (req, res) {
  res.send('Returns the id\'s of products related to the product specified')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


