const http = require('http');

//! 2nd method to create server using event loop( event-based-architecture)

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('New request received from', req.url)
    res.end('Magalchi..!!')
})
server.on("request", (req, res) => {
  console.log("boss there is new request from", req.url);
});
server.on('close', () => {
    console.log('server closed')
})
server.listen(8000, '127.0.0.1', () => {
    console.log('this is optional')
})