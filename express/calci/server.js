const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.post("/", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result=num1+num2
  res.send("the result is " + result + " Bitch !!!");
});
app.listen(5000, () => console.log("listening on 5000"));
