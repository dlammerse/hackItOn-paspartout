var express = require('express');
var router = express.Router();
var db = require(app_root + '/db');

// get all users
router.get('/', function(req, res, next)
{
	var stmt = 'SELECT * FROM users';
	db.Query(stmt, CallbackQueryResults, res);
});

// get user
router.get('/:user_id', function(req, res, next)
{
	var user_id = req.params.user_id;
	var stmt = 'SELECT * FROM users where user_id = ' + user_id;
	
	db.Query(stmt, CallbackQueryResults, res);
});

// get all companies of user
router.get('/:user_id/company', function(req, res, next)
{
	var user_id = req.params.user_id;
	var stmt = 'SELECT * FROM companies where comp_id in ( SELECT comp_id FROM subscriptions where user_id = ' + user_id + ' )';
	
	db.Query(stmt, CallbackQueryResults, res);
});

//Generic return results of database query
function CallbackQueryResults(res, rows)
{
	var result = [];
	for (var i in rows)
	{
		result.push(rows[i]);
    }
	
	res.json(result);
}

module.exports = router;