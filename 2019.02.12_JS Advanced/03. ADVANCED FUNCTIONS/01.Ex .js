function myFunc(word) {
    console.log('hi there,' + word);

    return function () {
        console.log('boop');
    }
}

const nestedFunc = myFunc();//myFunc()();
nestedFunc();