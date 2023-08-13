const fs = require("fs");
const url = require("fs");
const http = require("http");

const server=http.createServer((req, res) => {
    res.end("Server Started")
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening on 8000')
})
