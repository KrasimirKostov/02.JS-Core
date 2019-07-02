function solve() {

    let chopBtn = document.querySelectorAll('main div div button')[0]
        .addEventListener('click', chopFun);

    let diceBtn = document.querySelectorAll('main div div button')[1]
        .addEventListener('click', diceFun);

    let spiceBtn = document.querySelectorAll('main div div button')[2]
        .addEventListener('click', spiceFun);

    let bakeBtn = document.querySelectorAll('main div div button')[3]
        .addEventListener('click', bakeFun);

    let filletBtn = document.querySelectorAll('main div div button')[4]
        .addEventListener('click', filletFun);

    function chopFun() {

        let input = Number(document.querySelector('main div p').textContent)||document.querySelector('#exercise input').value;
        let result = input / 2;
        document.querySelector('main div p').textContent = result;

    }

    function diceFun() {

        let input = Number(document.querySelector('main div p').textContent)||document.querySelector('#exercise input').value;
        
        let result = Math.sqrt(input);
        document.querySelector('main div p').textContent = result;
    }

    function spiceFun() {

        let input = Number(document.querySelector('main div p').textContent)||document.querySelector('#exercise input').value;
        

        let result = input + 1;
        document.querySelector('main div p').textContent = result;
    }

    function bakeFun() {

        let input = Number(document.querySelector('main div p').textContent)||document.querySelector('#exercise input').value;
        

        let result = input * 3;
        document.querySelector('main div p').textContent = result;
    }

    function filletFun() {

        let input = Number(document.querySelector('main div p').textContent)||document.querySelector('#exercise input').value;
        

        let result = input * 0.8;
        document.querySelector('main div p').textContent = result;
    }
}
