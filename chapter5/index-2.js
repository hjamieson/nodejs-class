const express = require('express');

const app = express();
app.use('/book', (req, res, next) => {
    res.send(
        {
            title: 'The liver I lost',
            author: 'James Joyce',
            pages: 23
        }
    );});
    app.use((req, res, next) => {
        res.send('<h1>Hello from express</h1>');
    });
    app.listen(3000);