const express = require('express');
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

module.exports = router;