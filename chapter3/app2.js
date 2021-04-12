const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><meta charset="utf8"/></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && req.method === "POST") {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      fs.writeFile('message.txt', parseBody, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
});
server.listen(3000);