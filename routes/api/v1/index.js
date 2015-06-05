var express = require('express');
var router = express.Router();

// v1
router.get('/', function(req, res, next)
{
    res.send('v1');
});

// access
var room = require('./access');
router.use('/access', room);

module.exports = router;