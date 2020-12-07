const Assert = require('chai').assert;
const sayHello = require('../retutnName').sayHello;

describe('Check weather the function returns value  sumit or not', function(){
    it('Function should return Sumit', function(){
        Assert.equal(sayHello(),'Sumit');
    })
})