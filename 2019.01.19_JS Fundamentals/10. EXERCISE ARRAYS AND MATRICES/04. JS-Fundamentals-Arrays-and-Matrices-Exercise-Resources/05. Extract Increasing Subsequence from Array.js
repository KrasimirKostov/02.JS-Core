
// My solution
// function solve(inputArr) {
//     let currentBiggest = Number.NEGATIVE_INFINITY;
//     for (let el of inputArr) {
//         if (el >= currentBiggest) {
//             currentBiggest = el;
//             console.log(currentBiggest);
//         }
//     }
// }
// solve([20,
//     3,
//     2,
//     15,
//     6,
//     1]
// );

function solve(arr) {
    let min = 0;
    let resultArr = arr.reduce((acc, el) => {
        if (el >= min) {
            acc.push(el);
            min = el;
        }
        return acc;
    }, []);

    console.log(resultArr.join('\n'));
}

solve([20,
    3,
    2,
    15,
    6,
    1]
);
