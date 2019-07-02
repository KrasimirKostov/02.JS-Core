function getNext() {

    let sequence = '';
    let num = document.getElementById('num').value;

    function hailstoneSequence(n) {
        sequence = n.toString()+' ';
        while (n !== 1) {
            if (n % 2 === 0) {
                n = n / 2;
                sequence += n.toString()+' ';
            } else if (n % 2 !== 0) {
                n = 3 * n + 1;
                sequence += n.toString()+' ';
            }
        }
        return sequence;
    }

   
    document.getElementById('result').textContent = hailstoneSequence(num);
}