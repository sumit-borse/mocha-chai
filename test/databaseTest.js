const Assert = require('chai').assert;
const myConnection = require('../databaseConnection');

describe('Connection with database', function(){
    it('Should Connected to Database',function(){
        Assert.equal(myConnection,"connected");
    })
})