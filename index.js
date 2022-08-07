const express = require("express");
const app = express();
require('dotenv').config();
const {PORT:port, POSTGRES_CONNECTION_STRING:pgstring} = process.env;

app.listen(port, () => {console.log(`Server started at http://localhost:${port}`)});