const express = require('express');

let app = express();

app.get('/', function(req, res) {
	res.status(404).send({
		error: 'Page not found',
		name: 'Todo App v1.0'
	});
});

app.get('/users', function(req, res) {
	res.status(200).send([{
		name: 'Dan',
		age: 25
	}, {
		name: 'Willow',
		age: 4
	}, {
		name: 'William',
		age: 2
	}]);
});

app.listen(3000);

module.exports.app = app;