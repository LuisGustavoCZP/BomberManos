const { pgstring } = require('../../configs');
const { Pool } = require('pg');
const postgres = new Pool({connectionString:pgstring});

module.exports = postgres;