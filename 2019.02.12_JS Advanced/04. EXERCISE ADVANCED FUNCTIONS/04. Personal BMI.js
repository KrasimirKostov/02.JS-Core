function composeChart(name, age, weightKg, heightCm) {
    const calcBMI = (weight, heightM) => {
        return Math.round(weight / heightM ** 2)
    }
    const generatesStatus = (bmi) => {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }
    const bmi = calcBMI(weightKg, heightCm / 100);
    const chart = {
        name,
        personalInfo: {
            age: age,
            weight: weightKg,
            height: heightCm
        },
        BMI: bmi,
        status: generatesStatus(bmi)
    }

    if (chart.status === 'obese') {
        chart.recommendation = 'admission required';
    }
    return chart;
}

