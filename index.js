const express = require("express");

const app = express();
require('dotenv').config();
const {PORT:port, POSTGRES_CONNECTION_STRING:pgstring} = process.env;

const resp = require("./dadosusers");
const dados = JSON.parse(resp);

function insertQuery (user)
{
    if(!user.firstname) return;
    return `
    <p>
        INSERT INTO users(firstname, lastname, email, phone, birthday, gender) VALUES("${user.firstname}", "${user.lastname}", "${user.email}", "${user.phone}", "${user.birthday}", "${user.gender}");
    </p>
    `;
}

app.get ("/", (req, res) =>
{
    const r = `${dados.data.map(user => insertQuery(user))}`;
    res.send(r);
});

app.listen(port, () => {console.log(`Server started at http://localhost:${port}`)});