const express = require('express');

const router = express.Router();

router.get('/demo',(req, res, next)=>{
    res.send('<h1>DEMO</h1>');
});

module.exports = router;