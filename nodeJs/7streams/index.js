const server = require("http").createServer();
const fs = require('fs');
//! Trial 1 sending all data together
// server.on('request', (req, res) => {
//     let data = fs.readFileSync('../5eventLoopThredPool/test-file.txt');
//     res.end(data)
// })

//! Trial 2 sending chunks using readable stream
// server.on('request', (req, res) => {
//     let data = fs.createReadStream('../5eventLoopThredPool/test-file.txt');
//     data.on('data', (chunk) => {
//         res.write(chunk)
//     })
//     data.on('end', () => {
//         res.end();
//     })
//     data.on('error', (err) => {
//         console.log(err);
//         res.statusCode = 500;
//         res.end('file not found');
//     })
// })
//? trial 2 worked fine but there is problem here backpressure-delay between read data and tranferring to client

//! Trial 3 sending chunks using readable stream
server.on('request', (req, res) => {
    let data = fs.createReadStream('../5eventLoopThredPool/test-file.txt');
    data.pipe(res)
    //syntax readableStream.pipe(writable destiny)
})
server.listen(8000, '127.0.0.1', () => {
    console.log('server is listening...')
})
//? these handles backpressure because it handles the transferring internally