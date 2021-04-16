const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    console.log('adding product');
    res.send('<form action="/product" method="post" ><input type="text" name="title"><button type="submit">add product</button></form>');
});

router.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;