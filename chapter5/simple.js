const http = require('http');

const server = http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.write(`[${new Date().toISOString()}]The audience is listening...`);
    res.end();
});
server.listen(3000);