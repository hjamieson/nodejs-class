const http = require('http');

function rqListener(req, res) {
  console.log(req);
}

// const server = http.createServer(rqListener);

// const server = http.createServer(function(req, res){
//   console.log(req.method);
// });

const server = http.createServer((req, res) => {
  console.log(`url: ${req.url}, method: ${req.method}, host: ${req.headers.host}`);
  //process.exit();
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<h1>hello from nodejs!</h1>')
  res.write('</html>');
  res.end();
});

server.listen(3000);
