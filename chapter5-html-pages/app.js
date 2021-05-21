'use strict'

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();
const mainRoutes = require('./routes/mainRoutes');
const bookRoutes = require('./routes/bookRoutes');
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use((req, res, next) => {
  console.log(`req: ${req.url}`);
  next();
});

app.use(mainRoutes);
app.use('/book', bookRoutes);

app.get('/',(req, res, next)=>{
  res.send('<p>chapter5-routes</p>');
});

app.use((req, res, next)=>{
  // var root = path.dirname(process.mainModule.filename);
  var root = path.dirname(require.main.filename);
  console.log('root=>'+ root);
  res.status(404).sendFile(path.join(__dirname, 'views','404.html'));
});

app.listen(PORT);