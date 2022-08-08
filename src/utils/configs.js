require('dotenv').config();
const {PORT:port, POSTGRES_CONNECTION_STRING:pgstring} = process.env;

module.exports = {port, pgstring};