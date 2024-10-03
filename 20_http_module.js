const http = require('http');
// http also extends EventEmitter

const server = http.createServer((req, res) => {    // here (req, res) => is event listener call back function 
    res.writeHead(200);
    res.end("Hello World!");
})

server.listen(3000, () => {
    console.log("Server running at PORT 3000");
})