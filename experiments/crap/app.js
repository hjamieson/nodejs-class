const crypto = require('crypto');
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    if (req.url !== '/favicon.ico') {
        console.log('in middleware');
        console.log(`url=>${req.url}`);
        console.log(`method=>${req.method}`);
    }
    next();
});

app.get('/addproduct', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">push me!</button>'
        + `<input type="hidden" name="hash" value="${getHash()}"></input></form>`);
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send(`<p><a href="/addproduct">addproduct</a></p>`);
});

// start the loop
app.listen(PORT);
console.log(`listening on ${PORT}`);

function getHash() {
    return crypto.randomBytes(4).toString('hex');
}