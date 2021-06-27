const { Pool, Client } = require('pg')
const dbConfig = require('./config')

const pool = new Pool(dbConfig);


pool.connect((err) => {
  if (err) {
    console.log(err,'error connecting to database')
  } else {
    console.log('connected to postgres')
  }
})

module.exports = pool;