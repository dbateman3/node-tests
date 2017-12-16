const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;

//describe groups tests together
describe('Server', function() {
	describe('Get /', function() {
		it('should return hello world response', function(done) {
		request(app)
			.get('/')
			.expect(404)
			.expect(function(res) {
				expect(res.body).toInclude({
					error: 'Page not found' 
				});
			})
			.end(done);
		});

	})
	describe('Get /users', function() {
		it('should return 200 and users', function(done) {
		request(app)
			.get('/users')
			.expect(200)
			.expect(function(res) {
				expect(res.body).toInclude({
					name: 'Dan',
					age: 25
				});
			})
			.end(done);
		});
	});

	

});
