function solve(argument) {
    let circleArea = 0;
    if (typeof (argument) === 'number') {
        circleArea = Math.PI * argument * argument;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (argument)}.`)
    }


}


solve('name');