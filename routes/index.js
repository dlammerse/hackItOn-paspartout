var express = require('express');
var router = express.Router();

// Root
router.get('/', function(req, res, next)
{
    res.send('root');
	// res.render('root page');
});

// Lib
router.use('/lib', express.static(app_root + '/lib'));

// Applications
router.use('/roomreservations', express.static(app_root + '/apps/roomreservations'));

// Room reservation
var api = require('./api');
router.use('/api', api);

module.exports = router;