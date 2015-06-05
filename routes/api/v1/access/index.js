var express = require('express');
var router = express.Router();

var db = require(app_root + '/db');

function RespondAutorisation(res, rows)
{
	if(rows.length == 1)
	{
		res.json({ access: '1' });
	}
	else
	{
		res.json({ access: '0' });
	}
}

router.get('/', function(req, res){
	
	var company_id = req.query.company_id;
	var user_id = req.query.user_id;
	
	var stmt = 'SELECT * FROM subscriptions WHERE comp_id = ' + company_id + ' and user_id = ' + user_id;
	
	db.Query(stmt, RespondAutorisation, res);
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