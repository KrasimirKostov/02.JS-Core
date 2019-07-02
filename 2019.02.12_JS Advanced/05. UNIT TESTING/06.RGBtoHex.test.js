const rgbToHexColor = require('./06.RGBtoHex');
const assert = require('chai').assert;

describe('rgbToHexColor functionality', function () {
    it('should return hex color code with valid input', function () {
        let red = 139;
        let green = 10;
        let blue = 200;
        let expectedResult = '#8B0AC8';
        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, expectedResult);
    });
    it('should return hex color code for white', function () {
        let red = 255;
        let green = 255;
        let blue = 255;
        let expectedResult = '#FFFFFF';
        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, expectedResult);
    });

    it('should return hex color code for black', function () {
        let red = 0;
        let green = 0;
        let blue = 0;
        let expectedResult = '#000000';
        let result = rgbToHexColor(red, green, blue);

        assert.equal(result, expectedResult);
    });

    it('should return undefined when negative color', function () {
        let red = 100;
        let green = 50;
        let blue = -1;

        let result = rgbToHexColor(red, green, blue);

        assert.isUndefined(result);
    });

    it('should return undefined when all colors are negative', function () {
        let red = -100;
        let green = -50;
        let blue = -1;

        let result = rgbToHexColor(red, green, blue);

        assert.isUndefined(result);
    });


    it('should return undefined when color is more than max', function () {
        let red = 256;
        let green = 50;
        let blue = 125;

        let result = rgbToHexColor(red, green, blue);

        assert.isUndefined(result);
    });

    it('should return undefined when all color is more than max', function () {
        let red = 256;
        let green = 300;
        let blue = 500;

        let result = rgbToHexColor(red, green, blue);

        assert.isUndefined(result);
    });

    it('should return undefined when no color is provided', function () {
        assert.isUndefined(rgbToHexColor());
    });

    it('should return undefined when one color is provided', function () {
        let red = 128;

        let result = rgbToHexColor(red);

        assert.isUndefined(result);
    });

    it('should return undefined when two colors are provided', function () {
        let red = 128;
        let green = 300;

        let result = rgbToHexColor(red, green);

        assert.isUndefined(result);
    });

    it('should return undefined when float number color is provided', function () {
        let red = 1;
        let green = 1;
        let blue = 3.14;


        let result = rgbToHexColor(red, green, blue);

        assert.isUndefined(result);
    });
    it('should return undefined when invalid types are provided', function () {
        assert.isUndefined(rgbToHexColor([], {}, []));
        assert.isUndefined(rgbToHexColor(true, true, true));
        assert.isUndefined(rgbToHexColor(null, undefined, false));
        assert.isUndefined(rgbToHexColor([1], [2], [3]));
        assert.isUndefined(rgbToHexColor('1', '1', '1'));
        assert.isUndefined(rgbToHexColor(() => 1, () => 1, () => 1));
        assert.isUndefined(rgbToHexColor({ 1: 1 }, { 1: 1 }, { 1: 1 }));
        assert.isUndefined(rgbToHexColor(1.2, 1.2, 1.2));
    });
});


