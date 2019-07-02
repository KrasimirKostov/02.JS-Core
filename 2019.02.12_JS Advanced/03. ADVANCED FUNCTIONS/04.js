function sayHello(){
    return function(){
        console.log('Hello!');
    }
}

const myFunc=sayHello();
myFunc();
