const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');



describe('App', function() {
	let db = {
		saveUser: expect.createSpy()
	};

	app.__set__('db', db);

	it('should call the spy correctly', function() {
		let spy = expect.createSpy();
		spy('Dan', 25);
		expect(spy).toHaveBeenCalledWith('Dan', 25);
	});

	it('Should call saveUser with user object', function() {
		let email - 'dan@example.com';
		let password = '1234';

		app.handleSignup(email, passwor);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});
});