
//My solution

function solve() {


  let arr = [];
  let textElement = document.getElementById('input');
  let textValue = textElement.textContent;
  arr = textValue.split('.');


  if (arr.length <= 3) {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = textValue;

    let divElement = document.getElementById('output');
    divElement.appendChild(newParagraph);

  } else {

    let divElement = document.getElementById('output');
    let newText = '';
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        newText += arr[i];
      } else {
        newText += arr[i] + '.';

      }
      if (i === arr.length - 1 || (i + 1) % 3 === 0 && i !== 0) {

        let newParagraph = document.createElement('p');
        newParagraph.textContent = newText;

        divElement.appendChild(newParagraph);

        newText = '';

      }

    }
  }
  textElement.textContent = '';

}