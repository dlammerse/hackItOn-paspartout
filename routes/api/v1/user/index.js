var express = require('express');
var router = express.Router();

// get all users
router.get('/', function(req, res, next)
{
    res.send('return all users');
});

// get user
router.get('/:id', function(req, res, next)
{
    res.send('return user of id');
});

// get all companies of user
router.get('/:id/company', function(req, res, next)
{
    res.send('return all companies of user');
});

module.exports = router;