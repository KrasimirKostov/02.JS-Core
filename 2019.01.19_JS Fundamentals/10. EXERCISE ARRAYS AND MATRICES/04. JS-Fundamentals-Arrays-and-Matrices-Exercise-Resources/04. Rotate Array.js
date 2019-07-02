function solve(inputArr) {

    let amountOfRotation = inputArr.pop();
    let length = inputArr.length;
    let steps = amountOfRotation % length;
    for (let i = 0; i < steps; i++) {
        let el = inputArr.pop();
        inputArr.unshift(el);
    }
    console.log(inputArr.join(' '));

}
solve(['1',
    '2',
    '3',
    '4',
    '2']


);