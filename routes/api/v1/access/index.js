var express = require('express');
var router = express.Router();

// DB
var db = require(app_root + '/db');

router.get('/', function(req, res){
	
	var company_id = req.body.company_id;
	var user_id = req.body.user_id;
	
	var rows = db.Query('SELECT * FROM subscriptions WHERE comp_id = ' + company_id + ' and user_id = ' + user_id +'');
	if(rows.length = 1)
	{
		res.json({ access: '1' });
	}
	else
	{
		res.json({ access: '0' });
	}
});

router.post('/', function(req, res)
{
    
});

router.put('/:id', function(req, res)
{
    
});

router.delete('/:id', function(req, res)
{
    
});

module.exports = router;