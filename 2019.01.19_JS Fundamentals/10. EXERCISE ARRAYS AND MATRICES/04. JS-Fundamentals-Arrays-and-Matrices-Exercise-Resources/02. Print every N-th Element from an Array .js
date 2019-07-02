
// My solution
// function solve(arr) {
//     let step = Number(arr.pop());
//     for (let i = 0; i < arr.length; i += step) {
//         console.log(arr[i]);
//     }
// }
// solve(['5',
//     '20',
//     '31',
//     '4',
//     '20',
//     '2']
// );

function solve(arr) {
    let step = Number(arr.pop());
    let resultArr = arr.reduce((acc, el, index) => {
        if (index % step === 0) {
            acc.push(el);
        }
        return acc;
    }, []);

    console.log(resultArr.join('\n'));
}
solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);