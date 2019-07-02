function validate() {

    let btn = document.querySelector('#exercise > fieldset > div > button')
        .addEventListener('click', checkValidity);

    let text = document.querySelector('#response');

    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;

    function checkValidity() {
        let inputOfDigits = document.querySelector('#exercise > fieldset > div > input').value;
        


        let lastDigit = Number(inputOfDigits[inputOfDigits.length - 1]);
        
        for (let i = 0; i < inputOfDigits.length - 1; i++) {
            sum += inputOfDigits[i] * weights[i];
        }
        
        let remainder = sum % 11;
        
        if (remainder === 10) {
            remainder = 0;
        }

        if (lastDigit === remainder) {
            text.textContent = 'This number is Valid!';
        } else {
            text.textContent = 'This number is NOT Valid!';
        }

    }

}