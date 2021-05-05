const express = require('express');
// const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.use((req, res, next) => {
  console.log("using express...");
  next();
});

app.get('/',(req, res, next)=>{
  res.send('<p>chapter5-routes</p>');
});

app.listen(PORT);