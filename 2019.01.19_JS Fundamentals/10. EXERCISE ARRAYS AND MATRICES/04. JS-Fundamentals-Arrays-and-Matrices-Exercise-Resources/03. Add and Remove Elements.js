

// My solution

// function solve(inputArr) {
//     let initialNum = 1;
//     let arr = [];

//     for (let i = 0; i < inputArr.length; i++) {
//         if (inputArr[i] === 'add') {
//             arr.push(initialNum);
//             initialNum++;

//         } else if (inputArr[i] === 'remove') {
//             arr.pop();
//             initialNum++;

//         }
//     }

//     if (arr.length === 0) {
//         console.log('Empty');
//     } else {

//     }
//     arr.forEach(x => console.log(x));
// }
// solve(['add',
//     'add',
//     'remove',
//     'add',
//     'add']
// );

function solve(arr) {
    let resultArr = arr.reduce((acc, el, idx) => {
        if (el === 'add') {
            acc.push(idx + 1);
        } else if (el === 'remove') {
            acc.pop();
        }
        return acc;
    }, []);

    if (resultArr.length > 0) {
        console.log(resultArr.join('\n'));

    } else {
        console.log('Empty');
    }

}
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);