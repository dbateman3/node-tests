const utils = require('./utils');
//test case runs code checks for passed/failed behavior driven development
//it is a function from mocha, no imports
//2 arguments, string description
it('should add two numbers', function() {
	let res = utils.add(33, 11);
	if (res != 44) {
		throw new Error('Incorrect answer');
	}
});

it('should square a number', function() {
	let res = utils.square(2);
	if (res != 4) {
		throw new Error(`Incorrect answer, expected 2, got ${res}`);
	}
});