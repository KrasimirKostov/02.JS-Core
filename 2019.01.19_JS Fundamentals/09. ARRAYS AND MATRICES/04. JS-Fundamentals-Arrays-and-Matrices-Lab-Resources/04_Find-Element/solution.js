function solve() {
  let needle = parseInt(document.getElementById('num').value);
  let inputArrayText = document.getElementById('arr').value;
  let haystack = JSON.parse(inputArrayText);
  let resultArray = [];

  for (const element of haystack) {
    let hasValue = element.includes(needle);
    let index = element.indexOf(needle);
    resultArray.push(`${hasValue} -> ${index}`);

  }
  let resultElement = document.getElementById('result');
  resultElement.textContent = resultArray.join(',');
}
