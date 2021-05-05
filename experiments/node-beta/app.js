const os = require('os');
const express = require('express');
const dateFormat = require('dateformat');

const app = express();
const PORT = process.env.PORT || 8080;
console.log(`will listen on PORT=${PORT}`)

app.use('/demo',(req, res, next)=>{
  console.log(req.url + ' was called');
  let timeStr = dateFormat(new Date(), "isoDateTime");
  res.send({
    name: 'node-beta',
    time: timeStr,
    platform: os.platform(),
    version: os.version()
  });
});

app.use('/',(req, res, next) => {
  console.log('in the middleware...');
  res.send('<p>Reach out and touch someone!</p>');
});

app.listen(PORT);