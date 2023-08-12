const http = require("http");

// server is created and stored in server
const server = http.createServer((req, res) => {
    console.log(req)
    res.end("This Message to show on server 'welcome'")
})
//specifying where to start (listen)

server.listen('5000', '127.0.0.1', () => {
    console.log("Server started in 5000")
})