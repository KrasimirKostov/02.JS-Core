function solve() {

    let number = document.querySelector('#exercise input[type="number"]');
    let output = document.getElementById('output');

    let num;

    function getCurrentNumber(){
        num= Number(output.textContent)||number.value;
        return num;
    }
  

    function attachEvents() {
        let chopBtn = document.querySelector('#operations button:nth-child(1)')
            .addEventListener('click', chopFun);

        let diceBtn = document.querySelector('#operations button:nth-child(2)')
            .addEventListener('click', diceFun);

        let spiceBtn = document.querySelector('#operations button:nth-child(3)')
            .addEventListener('click', spiceFun);

        let bakeBtn = document.querySelector('#operations button:nth-child(4)')
            .addEventListener('click', bakeFun);

        let filletBtn = document.querySelector('#operations button:nth-child(5)')
            .addEventListener('click', filletFun);

    }

    attachEvents();

    function chopFun() {
        getCurrentNumber();
        
        num/=2;
        output.textContent = num;

    }

    function diceFun() {
        getCurrentNumber();
        
        num = Math.sqrt(num);
        output.textContent = num;
    }

    function spiceFun() {
        getCurrentNumber();
        
        num=++num;
        output.textContent = num;
    }

    function bakeFun() {
        getCurrentNumber();

        
        num *=3;
        output.textContent = num;
    }

    function filletFun() {
        getCurrentNumber();

       
        num*=0.8;
        output.textContent = num;
    }
}

