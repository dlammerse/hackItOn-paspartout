var express = require('express');
var router = express.Router();

// API
router.get('/', function(req, res, next)
{
    res.send('api');
});

// v1
var v1 = require('./v1');
router.use('/v1', v1);

module.exports = router;