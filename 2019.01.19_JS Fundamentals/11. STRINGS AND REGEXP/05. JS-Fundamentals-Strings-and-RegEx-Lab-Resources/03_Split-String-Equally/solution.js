function solve() {

  let inputString = document.getElementById('str').value;
  let num = parseInt(document.getElementById('num').value);
  let resultElement = document.getElementById('result');

  let result = '';
  let i = 0;
  let counter = 0;

  while (true) {
    if (counter >= inputString.length && counter % num == 0) {
      break;
    }

    if (i >= inputString.length) {
      i = 0;
    }


    if (counter % num === 0 && counter != 0) {
      result += ' ';
    }
    result += inputString[i];

    i++;
    counter++;

  }

  resultElement.textContent = result;
}