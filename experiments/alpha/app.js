const os = require('os');
const http = require('http');
const crypto = require('crypto');
const express = require('express');
const app = express();

app.use('/demo',(req, res, next)=> {
    obj = {
        time: Date(),
        hash: rb(),
        memo: 'from the backend',
        hostname: os.hostname(),
        platform: os.platform()
    }
    res.send(obj);
});

app.use((req, res, next)=>{
    console.log('in the middleware');
    console.log(rb());
    next();
});    

app.use((req, res, next)=>{
    res.send(`<h1>Hello from express! (${rb()})</h1><h2>${os.platform()}</h2>`);
})

app.listen(3000, '0.0.0.0');

const rb = () => {return crypto.randomBytes(4).toString('hex')}

