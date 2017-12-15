module.exports.add = function(a, b) {
	return a + b;
};

//testing asyncronous code
//tests cannot be longer than 2 sec or will auto fail
module.exports.asyncAdd = function(a, b, callback) {
	setTimeout(function() {
		callback(a + b);
	}, 1000);
};

//module.exports.add = (a, b) => a + b;
module.exports.square = function(x) {
	return x * x ;
};

module.exports.asyncSquare = function(x, callback) {
	setTimeout(function() {
		callback(x * x);
	}, 1000);
};

module.exports.setName = function(user, fullName) {
	let name = fullName.split(' ');
	user.firstName = name[0];
	user.lastName = name[1];
	return user;
};