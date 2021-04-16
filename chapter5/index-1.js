const http = require('http');

const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log('In the first middleware...');
    if (req.url.endsWith('book')) {
        console.log('handling book...');
        res.send({
            title: 'The Giant Burrito',
            pages: 505,
            published: 2021,
            author: 'Larry Liesure'
        });
    } else {
        next();
    }
});
app.use((req, res, next) => {
    console.log('In the second middleware...');
    res.send('<h1>Hello from express');
});
app.listen(3000);