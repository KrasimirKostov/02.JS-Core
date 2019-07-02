const createCalculator = require('./07.addSubtract');
const assert = require('chai').assert;

describe.only('createCalculator', function () {

    let calc;
    beforeEach(function () {    //predi vseki test 
        calc = createCalculator();//calc neka mi e = nov calculator, novo kopie na tozi obekt sys zanuleni stojnosti
    });

    it('should return object', function () {
        
        assert.isObject(createCalculator());
    });


    it('should return zero when get', function () {

        assert.equal(calc.get(), 0);
    });


    it('should return positive number when add', function () {
        let input = 1;
        calc.add(input);
        assert.equal(calc.get(), 1);
    });


    it('should return negative number when subtract', function () {
        calc = createCalculator();
        let input = 1;
        calc.subtract(input);
        assert.equal(calc.get(), -1);
    });

    it('should return zero when add and subtract same number', function () {
        let input = 1;
        calc.add(input);
        calc.subtract(input);
        assert.equal(calc.get(), 0);
    });

    it('should return positive number when float number is given', function () {
        let input = 3.14;
       
        calc.add(input);
       
        assert.equal(calc.get(), 3.14);
    });

    

    it('should return result when string number is given', function () {
        let input = '10';
        calc.add(input);
        assert.equal(calc.get(), 10);
    });

    
    it('should return NaN when string is given', function () {
        let input = 'text';
        calc.add(input);
        assert.isNaN(calc.get());
    });
     
    it('should return NaN when object is given', function () {
        let input = {};
        calc.add(input);
        assert.isNaN(calc.get());
    });

    it('should return 0 when an empty array is given', function () {
        let input = [];
        calc.add(input);
        assert.equal(calc.get(),0);
    });

    it('should return 1 when boolean true is given', function () {
        let input = true;
        calc.add(input);
        assert.equal(calc.get(),1);
    });

    it('should return 0 when boolean false is given', function () {
        let input = false;
        calc.add(input);
        assert.equal(calc.get(),0);
    });

    it('should return NaN when function is given', function () {
        let input = ()=>0;
        calc.add(input);
        assert.isNaN(calc.get());
    });

    it('should return zero when no input is given for add', function () {
       
        calc.add();
        assert.isNaN(calc.get());
    });

    it('should return zero when no input is given for subtract', function () {
       
        calc.subtract();
        assert.isNaN(calc.get());
    });

    // it('should return NaN when empty array is given', function () {
    //     let input =[];
    //     calc.add(input);
    //     assert.isNaN(calc.get());
    // });
});