const db = require('./db.js');

module.exports.handleSignup = function(email, password) {
	//check if user already exists
	db.saveUser({
		email: email,
		password: password
	});
	//Send the welcome email
};