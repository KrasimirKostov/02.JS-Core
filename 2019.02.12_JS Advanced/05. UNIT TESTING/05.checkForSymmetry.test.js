const isSymmetric = require('./05.checkForSymmetry');
const expect = require('chai').expect;

describe('isSymmetric functionality', function () {
    it('should return true when symmetric wih even elements count', function () {
        let input = [1, 2, 3, 3, 2, 1];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });
    it('should return true when symmetric wih odd elements count', function () {
        let input = [1, 2, 3, 2, 1];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });
    it('should return true when there are negative elements', function () {
        let input = [-1, -2, 3, -2, -1];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });
    it('should return true only one element', function () {
        let input = [10];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });
    it('should return true when two negative elements', function () {
        let input = [-20, -20];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });
    it('should return true when zero is given', function () {
        let input = [0];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });
    it('should return true when elements are strings', function () {
        let input = ['Stamat', 'Pesho', 'Stamat'];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });
    it('should return true when elements are different types', function () {
        let date = new Date();
        let array = [1, 2, 3];
        let object = { name: 'Pesho' };
        let input = [1, date, '0', array, object, true, {}, [], () => true, [], {},true, object, array, '0', date, 1];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });

    it('should return false if argument is not array', function () {
        // let input=;

        // let result = isSymmetric(input);

        expect(isSymmetric()).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric(false)).to.be.false;
        expect(isSymmetric(0)).to.be.false;
        expect(isSymmetric(10)).to.be.false;
        expect(isSymmetric('Pesho'), 'pass string as argument').to.be.false;
        expect(isSymmetric({ name: 'Pesho' })).to.be.false;
        expect(isSymmetric(NaN)).to.be.false;
    });

    it('should return false if symmetric arguments are passed', function () {
        expect(isSymmetric(1, 2, 3, 2, 1)).to.be.false;
    });

    it('should return false if non symmetric array is passed', function () {
        let input = [1, 2, 3, 3, 2, 2];
        let result = isSymmetric(input);
        expect(result).to.be.false;

    });
});