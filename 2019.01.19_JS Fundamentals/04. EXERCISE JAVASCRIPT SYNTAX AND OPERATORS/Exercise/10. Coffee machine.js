function solve(arr) {
    let quantityOfSugar = 0;
    let coins = 0;
    let priceOfMilk = 0;
    let priceOfDrink = 0;
    let priceOfSugar = 0;
    let totalPrice = 0;
    let drink = '';
    let totalIncome = 0;
    for (let order of arr) {
        let newArr = order.split(', ');
        let coins = Number(newArr[0]);
        drink = newArr[1];
        if (drink === 'tea') {
            priceOfDrink = 0.8;

            if (newArr.includes('milk')) {
                quantityOfSugar = newArr[3];
                priceOfMilk = Math.round((0.1 * priceOfDrink) * 10) / 10;

                if (quantityOfSugar === '0') {
                    priceOfSugar = 0;
                } else {
                    priceOfSugar = 0.1;
                }


            } else {
                priceOfMilk = 0;
                quantityOfSugar = newArr[2];
                if (quantityOfSugar === '0') {
                    priceOfSugar = 0;
                } else {
                    priceOfSugar = 0.1;
                }
            }
        } else if (drink === 'coffee') {
            if (newArr[2] === 'caffeine') {
                priceOfDrink = 0.8;

                if (newArr.includes('milk')) {
                    priceOfMilk = Math.round((0.1 * priceOfDrink) * 10) / 10;
                    quantityOfSugar = newArr[4];
                    if (quantityOfSugar === '0') {
                        priceOfSugar = 0;
                    } else {
                        priceOfSugar = 0.1;
                    }

                } else {
                    priceOfMilk = 0;
                    quantityOfSugar = newArr[3];
                    if (quantityOfSugar === '0') {
                        priceOfSugar = 0;
                    } else {
                        priceOfSugar = 0.1;
                    }
                }
            } else if (newArr[2] === 'decaf') {
                priceOfDrink = 0.9;

                if (newArr.includes('milk')) {

                    quantityOfSugar = newArr[4];
                    if (quantityOfSugar === '0') {
                        priceOfSugar = 0;
                    } else {
                        priceOfSugar = 0.1;
                    }
                    priceOfMilk = Math.round((0.1 * priceOfDrink) * 10) / 10;

                } else {
                    priceOfMilk = 0;
                    quantityOfSugar = newArr[3];
                    if (quantityOfSugar === '0') {
                        priceOfSugar = 0;
                    } else {
                        priceOfSugar = 0.1;
                    }
                }
            }
        }
        totalPrice = priceOfDrink + priceOfMilk + priceOfSugar;
        if (totalPrice <= coins) {
            let change = coins - totalPrice;
            totalIncome += totalPrice;
            console.log(`You ordered ${drink}. Price: ${totalPrice.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
        } else {
            let moneyNeeded = totalPrice - coins;
            console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);
        }

    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);


}

solve(['8.00, coffee, decaf, 4',
    '1.00, tea, 2']

);


