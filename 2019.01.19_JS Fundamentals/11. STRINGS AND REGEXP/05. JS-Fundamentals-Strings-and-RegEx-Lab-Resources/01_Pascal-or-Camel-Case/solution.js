function solve() {
  let firstString = document.getElementById('str1').value;
  let secondString = document.getElementById('str2').value;
  let resutlElement = document.getElementById('result');


  let resultText = firstString
    .toLowerCase()
    .split(' ')
    .filter(x => x !== '')
    .map(e => e.charAt(0).toUpperCase() + e.slice(1))
    .join('');


  if (secondString !== 'Camel Case' && secondString !== 'Pascal Case') {
    resultText = 'Error!';
  } else if (secondString === 'Camel Case') {
    resultText = resultText.charAt(0).toLowerCase() + resultText.slice(1);

  }
  resutlElement.textContent = resultText;

}