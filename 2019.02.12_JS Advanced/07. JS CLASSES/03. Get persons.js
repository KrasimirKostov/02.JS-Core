

function solve() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    return [            //vryshtame masiv ot instancii, tam kydeto lipstvat parametri, te ne se setvat kato property-ta, a stava undefined
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com')

    ]
}
console.log(solve());

// let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
// console.log(person.toString());
