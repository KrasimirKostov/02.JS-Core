function solve(num1, num2) {
    let delimo = Math.max(num1, num2);
    let delitel = Math.min(num1, num2);
    
    while (delimo % delitel !== 0) {
        let newDelitel = delimo % delitel;
        delimo = delitel;
        delitel = newDelitel;

    }
    console.log(delitel);


}
solve(2154, 458);