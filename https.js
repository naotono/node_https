const https = require("https");
const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
    res.send("Hello World from https");
})


const server = https.createServer({
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert")
}, app)
server.listen(1000, () => console.log("Server running"))