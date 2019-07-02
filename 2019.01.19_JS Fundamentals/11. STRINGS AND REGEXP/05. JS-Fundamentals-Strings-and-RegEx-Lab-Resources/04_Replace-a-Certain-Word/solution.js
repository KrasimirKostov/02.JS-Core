function solve() {
  let inputArr = JSON.parse(document.getElementById('arr').value);
  let inputValue = document.getElementById('str').value;
  let resultElement = document.getElementById('result');
  let paragraphElement = document.createElement('p');

  let needle = inputArr[0].split(' ')[2];

  inputArr.forEach(line => {
    let pattern = new RegExp(needle, 'ig');
    let resultLine = line.replace(pattern, inputValue);

    let lineElement = paragraphElement.cloneNode();//klonirame gotoviq paragraph
    lineElement.textContent = resultLine;

    resultElement.appendChild(lineElement);
  })

}