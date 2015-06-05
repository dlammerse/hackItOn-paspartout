var express = require('express');
var router = express.Router();

// DB
var db = require(app_root + '/db');

router.get('/', function(req, res){
	
	//merchant
	//customer
	
	var rows = db.Query('SELECT count(*) FROM ');
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