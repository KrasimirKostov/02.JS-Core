function solve(num) {
    let isSame = true;
    let sum = 0;
    let numString = num.toString();
    for (let i = 0; i < numString.length - 1; i++) {
        if (numString[i] === numString[i + 1]) {
            isSame = true;
        } else {
            isSame = false;
            break;
        }
    }
    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    console.log(isSame);
    console.log(sum);

}
solve(1234);