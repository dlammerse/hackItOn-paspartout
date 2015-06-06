var express = require('express');
var router = express.Router();
var db = require(app_root + '/db');

// get all users
router.get('/', function(req, res, next)
{
	var stmt = 'SELECT * FROM users';
	db.SelectQuery(stmt, CallbackQueryResults, res);
});

// get user
router.get('/:user_id', function(req, res, next)
{
	var user_id = req.params.user_id;
	var stmt = 'SELECT * FROM users where user_id = ' + user_id;
	
	db.SelectQuery(stmt, CallbackQueryResults, res);
});

// get all companies of user
router.get('/:user_id/company', function(req, res, next)
{
	var user_id = req.params.user_id;
	var stmt = 'SELECT * FROM companies where comp_id in ( SELECT comp_id FROM subscriptions where user_id = ' + user_id + ' )';
	
	db.SelectQuery(stmt, CallbackQueryResults, res);
});

// get all companies of user
router.get('/:user_id/getallcompanies', function(req, res, next)
{
	var user_id = req.params.user_id;
	//var stmt = 'SELECT DISTINCT c.comp_id, name, photo, "Actief" as "status" , "' + user_id + '" as "user_id" FROM companies where c.comp_id in ( SELECT comp_id FROM subscriptions where user_id = ' + user_id + ' ) UNION SELECT DISTINCT c.comp_id, name, photo, "Toevoegen" as "status" , "' + user_id + '" as "user_id" FROM companies where c.comp_id NOT in ( SELECT comp_id FROM subscriptions where user_id = ' + user_id + ' )';
	//var stmt = 'SELECT DISTINCT c.comp_id, name, photo, "Actief" as "status" , "' + user_id + '" as "user_id" FROM companies c where c.comp_id in ( SELECT comp_id FROM subscriptions where user_id = ' + user_id + ' )';
		var stmt = 'SELECT DISTINCT c.comp_id, name, photo, "Actief" as "status" , "' + user_id + '" as "user_id" FROM companies c where c.comp_id in ( SELECT comp_id FROM subscriptions where user_id = ' + user_id + ' ) UNION SELECT DISTINCT c.comp_id, name, photo, "Toevoegen" as "status" , "' + user_id + '" as "user_id" FROM companies c where c.comp_id not in ( SELECT comp_id FROM subscriptions where user_id = ' + user_id + ' )';
	
		//var stmt = 'SELECT * FROM companies where comp_id in ( SELECT comp_id FROM subscriptions where user_id = ' + user_id + ' )';

	db.SelectQuery(stmt, CallbackQueryResults, res);
});

// Add subscription to user
router.put('/:user_id/:company_id', function(req, res, next)
{
	var user_id = req.params.user_id;
	var company_id = req.params.company_id;
	
	var stmt = 'INSERT INTO subscriptions (user_id, comp_id) VALUES(' + user_id + ',' + company_id + ')';
	
	db.InsertQuery(stmt, CallbackInsertSucceeded, res);
});

//Callback return results of database query
function CallbackQueryResults(res, rows)
{
	var result = [];
	for (var i in rows)
	{
		result.push(rows[i]);
    }
	
	res.json(result);
}

//callback insert data in db
function CallbackInsertSucceeded(res, hasSucceeded)
{	
	res.json({succeeded: hasSucceeded});
}

module.exports = router;