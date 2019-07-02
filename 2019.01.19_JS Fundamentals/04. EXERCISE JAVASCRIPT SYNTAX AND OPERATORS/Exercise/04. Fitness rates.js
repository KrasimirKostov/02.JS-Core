function solve(day, service, time) {


    switch (service) {
        case 'Fitness':
            if (day === 'Saturday' || day === 'Sunday') {
                price = 8;
            } else {
                if (time >= 8 && time <= 15) {
                    price = 5;
                } else {
                    price = 7.5;
                }
            }
            break;
        case 'Sauna':
            if (day === 'Saturday' || day === 'Sunday') {
                price = 7;
            } else {
                if (time >= 8 && time <= 15) {
                    price = 4;
                } else {
                    price = 6.5;
                }
            }
            break;
        case 'Instructor':
            if (day === 'Saturday' || day === 'Sunday') {
                price = 15;
            } else {
                if (time >= 8 && time <= 15) {
                    price = 10;
                } else {
                    price = 12.5;
                }
            }
            break;
    }
    console.log(price);
}

solve('Monday', 'Sauna', 15.30);