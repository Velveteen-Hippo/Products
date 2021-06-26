const { Pool, Client } = require('pg')
const db = require('./config')

const pool = new Pool(db);


pool.connect((err) => {
  if (err) {
    console.log(err,'error connecting to database')
  } else {
    console.log('connected to postgres')
  }
})

module.exports = pool;