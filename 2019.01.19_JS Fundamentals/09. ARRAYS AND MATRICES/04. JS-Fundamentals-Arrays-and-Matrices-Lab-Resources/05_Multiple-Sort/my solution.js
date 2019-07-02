function solve() {

    let textArr = document.getElementById('arr').value;
    let inputArr = JSON.parse(textArr);
    let sorted1 = [];
    let sorted2 = [];
  
    inputArr.sort((a, b) => (a - b));
    for (let element of inputArr) {
      sorted1.push(element);
    }
    inputArr.sort((a, b) => a.localeCompare(b));
    for (let element of inputArr) {
      sorted2.push(element);
    }
  
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
  
    div1.textContent = sorted1.join(', ');
    div2.textContent = sorted2.join(', ');
  
    let div = document.getElementById('result');
    div.appendChild(div1);
    div.appendChild(div2);
  
  }