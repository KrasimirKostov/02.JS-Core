
// //My solution
// function solve(inputArr) {

//     inputArr.sort((a, b) => (a.length - b.length) || a.localeCompare(b));
//     inputArr.forEach(x => console.log(x));
// }
// solve(['Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George']
// );

function solve(arr) {
    let sorted = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(sorted.join('\n'));
}
solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);