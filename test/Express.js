var chai  = require('chai');
var expect = chai.expect; 
var request = require('request');
var baseURL = 'http://localhost:3001/';

it('Get All User', function(done) {
    request(baseURL+"getAllUser" , function(error, response, body) {
        console.log(body);
        let bodyObject = JSON.parse(body);
        expect(bodyObject.data).to.be.an('array');
        done();
    });
});
