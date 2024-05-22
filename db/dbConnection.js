require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
})


module.exports = pool