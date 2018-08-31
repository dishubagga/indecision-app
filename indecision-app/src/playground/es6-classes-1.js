class Person {
    constructor(name,age){
        this.name = name;
        this.age = age || 0;
    }
    getGreeting(){
        return `Hi! i am ${this.name}. `;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` their Major is ${this.major}. `; 
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const i = new Traveler('Dishu',21,'USA');
console.log(i.getGreeting());

const o = new Traveler('Dishu',21);
console.log(o.getGreeting());

const me = new Student('Dishu',21,'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());