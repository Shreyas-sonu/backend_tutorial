const http = require("http");
const url = require("url");
// server is created and stored in server
const server = http.createServer((req, res) => {
  let pathName = req.url;
  if (pathName === "/" || pathName === "/home") {
    res.end("This Message to show on server 'welcome'");
  } else if (pathName === "/products") {
    res.end("<h1>Your are seeing products</h1>");
  } else if (pathName === "/user") {
    res.end("<h1>Your are seeing users</h1>");
  } else {
    res.end("<h5>Page not found!!</h5>");
  }
});
//specifying where to start (listen)

server.listen("5000", "127.0.0.1", () => {
  console.log("Server started in 5000");
});
