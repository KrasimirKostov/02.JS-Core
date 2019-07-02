
class Rectangle {
    constructor(width, height, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}

let firstRectangle = new Rectangle(12,18,'red');

console.log(firstRectangle.calcArea());