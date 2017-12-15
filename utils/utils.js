module.exports.add = function(a, b) {
	return a + b;
};

//module.exports.add = (a, b) => a + b;
module.exports.square = function(x) {
	return x * x ;
};

module.exports.setName = function(user, fullName) {
	let name = fullName.split(' ');
	user.firstName = name[0];
	user.lastName = name[1];
	return user;
};