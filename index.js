const express = require("express");
const session = require('express-session');
const { port } = require("./src/utils/configs");
const loginController = require("./src/controllers/login");
const app = express();

app.post("/login", loginController);

app.get ("/", async (req, res) =>
{
    const sess = req.session;
    if(sess.username && sess.password)
    {
        res.write(`<h1>Welcome ${sess.username} </h1><br>`)
        res.write(
            `<h3>This is the Home page</h3>`
        );
        res.end('<a href=' + '/logout' + '>Click here to log out</a >')
    }
    else res.sendFile(__dirname+"/public/login.html");   
});

app.get ("/static/index.js", async (req, res) =>
{
    res.sendFile(__dirname+"/public/index.js");
});

app.get ("/static/style.css", async (req, res) =>
{
    res.sendFile(__dirname+"/public/style.css");
});

app.listen(port, () => 
{
    console.log(`Server started at http://localhost:${port}`)
});