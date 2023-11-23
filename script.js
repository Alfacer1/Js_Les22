
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    assignOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log("Власник повинен бути старше 18 років.");
        }
    }

    printInfo() {
        console.log(`Автомобіль: ${this.brand} ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Інформація про власника:");
            this.owner.printInfo();
        } else {
            console.log("Власник не визначений.");
        }
    }
}

const person1 = new Person("Іван", 25);
const person2 = new Person("Марія", 17);
const person3 = new Person("Петро", 30);

const car1 = new Car("Toyota", "Camry", 2022, "AB1234CD");
const car2 = new Car("Honda", "Civic", 2020, "EF5678GH");

car1.assignOwner(person1);
car2.assignOwner(person2);

car1.printInfo();
car2.printInfo();
