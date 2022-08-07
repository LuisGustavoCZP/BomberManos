const express = require("express");
const app = express();
require('dotenv').config();
const {PORT:port, POSTGRES_CONNECTION_STRING:pgstring} = process.env;

const users = await fetch("https://fakerapi.it/api/v1/persons?_quantity=1000").then(resp => resp.json());
console.log(users.data);

app.listen(port, () => {console.log(`Server started at http://localhost:${port}`)});