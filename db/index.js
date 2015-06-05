//DB

var mysql = require('mysql');

module.exports.Query = function Query(querystring, callback, res)
{
	// make connection
	console.log('connecting to db...');
	
	var connection = mysql.createConnection({
		host     : 'us-cdbr-iron-east-02.cleardb.net',
		user     : 'bfe2448fe6c30a',
		password : 'c075082e',
		database : 'ad_83227125cd806d4'
	});

	connection.connect(function(err)
	{
		if(!err) {
			console.log("Database is connected \n\n");  
			return connection;
		} else {
			console.log("Error connecting database ... \n\n");  
		}
	});
	
	// execute query
	connection.query(querystring, function(err, rows, fields)
	{
		if (!err)
		{
			callback(res, rows);
		}
		else
		{
			console.log('Error while performing Query: ' + querystring);
			var empty = [];
			callback(res, empty);
		}
	});
	
	// close connection
	connection.end();
}