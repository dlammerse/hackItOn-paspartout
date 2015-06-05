var express = require('express');
var router = express.Router();

// v1
router.get('/', function(req, res, next)
{
    res.send('v1');
});

// access
var access = require('./access');
router.use('/access', access);

module.exports = router;