const fs = require('fs');

const requestHandler = (req, res) => {
const url = req.url;
const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><meta charset="utf8"/></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === "POST") {
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
}

module.exports = requestHandler;

/* additional exports syntax:

module.exports.handler = requestHandler;
module.exports.someText = 'free free set them free';

module.exports = {
  handler: requestHandler,
  someText: 'if you love somebody'
}

exports.handler = requestHandler;
exports.sometext = 'dream of the blue turtle';
*/
