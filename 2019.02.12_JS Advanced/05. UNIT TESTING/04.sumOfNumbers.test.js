const sum = require('./04.sumOfNumbers');
const should = require('chai').should();
describe('sum', function () {
    it('should returns the sum of the values of all elements inside the array', function () {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        let result = sum(numbers);

        result.should.be.equal(45);
    });
    it('should not accept falsy value', function () {
        let callSum = () => sum(null);
        let callSumWithFalse = () => sum(false);

        sum.should.Throw();
        callSum.should.Throw();
        callSumWithFalse.should.Throw();
    });
    it('should not accept number input', function () {
        let input = 10;
        let callWithNumber = () => sum(10);

        callWithNumber.should.throw();
    });
});