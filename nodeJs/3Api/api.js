const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`./comments.json`,"utf8")
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === "/" || pathName === "home") {
        res.end(data)
    } else {
        res.writeHead(404);
        res.end("Page not found !")
    }
})
server.listen(5000, "127.0.0.1", () => {
    console.log('listening on port 5000');
})