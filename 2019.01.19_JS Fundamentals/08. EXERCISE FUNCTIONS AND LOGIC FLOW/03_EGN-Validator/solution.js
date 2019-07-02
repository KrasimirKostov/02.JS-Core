function validate() {

    let EGN = '';

    let validateBtn = document.querySelector('#exercise > div > button')
        .addEventListener('click', validate);

    let year = document.getElementById('year');
    let month = document.getElementById('month');
    let date1 = document.getElementById('date');
    let regionalCode = document.getElementById('region');
    let genderMale = document.getElementById('male');
    let genderFemale = document.getElementById('female');


    let months = {
        January: '01',
        February: '02',
        March: '03',
        April: '04',
        May: '05',
        June: '06',
        July: '07',
        August: '08',
        September: '09',
        October: '10',
        November: '11',
        December: '12'
    }



    let date = document.getElementById('date');

    function validate() {

        let firstSecond = year.value.toString().substr(2, 2);
        year.value = '';
        // console.log(firstSecond);

        let input = month.value;
        let thirdFourth = months[input];
        month.value = '';
        // console.log(thirdFourth);

        let fifthSixth = date1.value;
        if (fifthSixth < 10) {
            fifthSixth = '0' + fifthSixth;
        }
        date1.value = '';
        // console.log(fifthSixth);

        let seventhEight = regionalCode.value.toString().substr(0, 2);
        regionalCode.value = '';
        // console.log(seventhEight);

        
        if (genderMale.checked) {
            ninth = 2;
        } else if (genderFemale.checked) {
            ninth = 1;
        }
        genderMale.checked = false;
        genderFemale.checked = false;
        // console.log(ninth);

        EGN = `${firstSecond}${thirdFourth}${fifthSixth}${seventhEight}${ninth}`;

        let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let weightSum = 0;
        for (let i = 0; i < 9; i++) {
            weightSum += Number(EGN[i]) * Number(weightPosition[i]);
        }
        let checkNum = weightSum % 11;
        if (checkNum === 10) {
            checkNum = 0;
        }
        EGN += checkNum.toString();

        document.getElementById('egn').textContent = `Your EGN is: ${EGN}`;
    }

}
