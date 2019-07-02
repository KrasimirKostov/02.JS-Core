function greatestCD() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let gcd = function(a, b) {
        if ( ! b) {
        return a;
        }
        
        return gcd(b, a % b);
        };


    document.getElementById('result').textContent = gcd(num1,num2);

}


