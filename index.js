const express = require("express");
const { Pool } = require('pg')
const app = express();
require('dotenv').config();
const {PORT:port, POSTGRES_CONNECTION_STRING:pgstring} = process.env;

/* const resp = require("./dadosusers");
const dados = JSON.parse(resp);

function insertQuery (user)
{
    if(!user.firstname) return;
    return `
    <p>
        INSERT INTO public.users ("firstname", "lastname", "email", "phone", "birthday", "gender") VALUES ($$${user.firstname}$$, $$${user.lastname}$$, $$${user.email}$$, '${user.phone}', '${user.birthday}', '${user.gender}');
    </p>
    `;
} */

const db = new Pool({connectionString:pgstring});

app.get ("/", async (req, res) =>
{
    const resp = await db.query('SELECT * FROM users');
    
    const r = `${resp.rows.map(user => `<p>${JSON.stringify(user)}</p>`)}`;
    res.send(r);
});

app.listen(port, () => {console.log(`Server started at http://localhost:${port}`)});