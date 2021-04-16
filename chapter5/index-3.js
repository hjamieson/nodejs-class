const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/book', (req, res, next) => {
    res.send(
        {
            title: 'The liver I lost',
            author: 'James Joyce',
            pages: 23
        }
    );
});

app.use('/add-product',(req, res, next)=>{
    console.log('adding product');
    res.send('<form action="/product" method="post" ><input type="text" name="title"><button type="submit">add product</button></form>');
});
app.use('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use((req, res, next) => {
    res.send('<h1>Hello from express</h1>');
});
app.listen(3000);