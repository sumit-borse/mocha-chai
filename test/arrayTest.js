var expect = require('chai').expect;
var students = ['Sumit','Mahesh','Mayur','Kuldeep','Sunny'];


describe('Chai Expect', function(){

    it('Number Of Students Must be 5', function(){
            expect(students).to.have.lengthOf(5);
    });



    it('should return the type as string of 3rd value ', function(){
        expect(students[2]).to.be.a('string');
    })
    it('1st value must be Sumit ', function(){
       expect(students[0]).to.equal('Sumit');
    })

});