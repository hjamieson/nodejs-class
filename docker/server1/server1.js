const http = require('http');

const jsListen = (req, res) => {
  const d = new Date().toLocaleString();
  res.setHeader('Content-Type','text/plain; charset=UTF-8');
  res.write(`Good morning, Mr. Spaulding!\n`);
  res.write(`[${d}]`);
  res.end();
}

const server = http.createServer(jsListen);
server.listen(3000);