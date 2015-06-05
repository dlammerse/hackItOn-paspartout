var express = require('express');
var router = express.Router();

// Root
/*
router.get('/', function(req, res, next)
{
    res.send('root');
	// res.render('root page');
});
*/

// api
var api = require('./api');
router.use('/api', api);

module.exports = router;