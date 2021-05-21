const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/demo',(req, res, next)=>{
    res.send([
        {
            title: 'Good Will Hunting'
        },
        {
            title: 'The Martian'
        },
        {
            title: '2001 Space Odyssey'
        }
    ]);
});

router.get('/',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'../','views','/book.html'));
});

module.exports = router;