function solve() {
   let sequenceOfFactors = '';
   let num = document.getElementById('num').value;

   function factors(n) {
      sequenceOfFactors = '1';
      for (let i = 2; i <= n; i++) {

         if (n % i === 0) {
            sequenceOfFactors += ' ' + i.toString();
         }
      }
      return sequenceOfFactors;
   }


   document.getElementById('result').textContent = factors(num);

}