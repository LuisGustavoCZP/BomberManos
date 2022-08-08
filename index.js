const express = require("express");
const { port } = require("./src/utils/configs");
const loginController = require("./src/controllers/login");
const app = express();

app.post("/login", loginController);

app.get ("/", async (req, res) =>
{
    res.sendFile(__dirname+"/public/index.html");   
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