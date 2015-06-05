//DB

var mysql = require('mysql');

var connection;

module.exports.Connect = function Connect()
{
	console.log('connecting to db...');
	
	connection = mysql.createConnection({
		host     : 'us-cdbr-iron-east-02.cleardb.net',
		user     : 'bfe2448fe6c30a',
		password : 'c075082e',
		database : 'ad_83227125cd806d4'
	});

	connection.connect(function(err)
	{
		if(!err) {
			console.log("Database is connected ... \n\n");  
		} else {
			console.log("Error connecting database ... \n\n");  
		}
	});
}

module.exports.Query = function Query(querystring)
{
	connection.query(querystring, function(err, rows, fields)
	{
		if (!err)
		{
			console.log('The solution is: ', rows);
			return rows;
		}
		else
		{
			console.log('Error while performing Query.');
		}
	});
}

/*

*/