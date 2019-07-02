function solve(matrix) {
    let rowSum = 0;
    //row sum
    for (let row = 0; row < matrix.length; row++) {
        let currRowSum = 0
        for (let col = 0; col < matrix[row].length; col++) {
            currRowSum += matrix[row][col];
        }
        if (row === 0) {
            rowSum = currRowSum;
        } else if (rowSum !== currRowSum) {
            return false;
        }
    }
    //col sum
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== rowSum) {
            return false;
        }
    }

    return true;

}
console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));




// My solution - 80/100
// function solve(inputArr) {
//     let totalSum = 0;
//     let isMagical = true;
//     for (let row = 0; row < inputArr.length - 1; row++) {
// let rowSum=inputArr[row].reduce((a, b) => a + b, 0);
//         if (inputArr[row].reduce((a, b) => a + b, 0) !== inputArr[row + 1].reduce((a, b) => a + b, 0)) {
//             isMagical=false;
//             break;
//         }
//         let sum1 = 0;

//         for (let col = 0; col < inputArr[row].length; col++) {
//             sum1 += inputArr[col][row];

//         }
//         if (sum1 !== rowSum) {
//             isMagical=false;            
//             break;
//         }
//     }

//     console.log(isMagical);
// }
// solve(
//     [[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]

// );

