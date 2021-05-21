const express = require('express');
// const bodyParser = require('body-parser');

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
  res.status(404).send('<h2>404: you lose.');
});
app.listen(PORT);