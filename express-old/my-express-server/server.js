const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("hello world"));
app.get("/about", (req, res) => res.send("hello world"));
app.get("/contact", (req, res) => res.send("<h1>9742514007</h1>"));
app.get("/map", (req, res) => res.send("im here"));
app.listen(5000, () => console.log("listening on 5000"));
