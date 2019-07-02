const assert = require('chai').assert;
const subSum=require('./01.SubSum');

describe('subSum', function () {
    it('should work properly', function () {
        //Arrange
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        //Act
        let result = subSum(arr, 3, 5);
        //Assert
        assert.equal(result, 15);
    });
    // it.skip('first argument must be array', function () {
    //     //Arrange
    //     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //     //Act
    //     let result = subSum(arr, 3, 5);
    //     //Assert
    //     assert.equal(result, 16);
    // });
});