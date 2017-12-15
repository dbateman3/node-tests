const expect = require('expect');
const utils = require('./utils');
//test case runs code checks for passed/failed behavior driven development
//it is a function from mocha, no imports
//2 arguments, string description
it('should add two numbers', function() {
	let res = utils.add(33, 11);
	//assertion
	expect(res).toBeA('number').toBe(44);
	// if (res != 44) {
	//	throw new Error('Incorrect answer')	
	//}
});

it('should square a number', function() {
	let res = utils.square(2);
	
	expect(res).toBeA('number').toBe(4);

	//if (res != 4) {
	//	throw new Error(`Incorrect answer, expected 2, got ${res}`);
	//}
});

it('should expect some values', function() {
	//expect(12).toNotBe(11);
	//tobe does not work on objects and arrays
	//expect({name: 'Dan'}).toEqual({name: 'Dan'});
	/*check if a value is in an array and object
	expect({
		name: 'Dan',
		age: 25
	}).toInclude({
		age: 25
	});
	expect([2, 3, 4]).toInclude(2);
	*/
});

it('should set first and last name properties', function() {
	let user = {
		age: 25,
	};
	let res = utils.setName(user, 'Dan Bateman');
	expect(res).toInclude({
		firstName: 'Dan',
		lastName: 'Bateman'
	});
});