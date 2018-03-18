class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.age = age;
        this.name = name;
    }
    getGretting() {
        return `Hello ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

const p1 = new Person('Andrew Mead', 25);
console.log(p1);
console.log(p1.getGretting());
console.log(p1.getDescription());

const p2 = new Person();
console.log(p2);
console.log(p2.getGretting());
console.log(p2.getDescription());

class Student extends Person {
    constructor(name, age, major = 'not decided') {
        super(name, age); // Run parent's constructor
        this.major = major;
    }
    getData() {
        return `${this.name} is ${this.age} year(s) old and his/her major is ${this.major}`;
    }
    getDescription() {
        const description = super.getDescription();
        return `${description} and his/her major is ${this.major}`;
    }
}

const s1 = new Student('Jack', 24, 'Computer Science');
console.log(s1);
console.log(s1.getData());
console.log(s1.getDescription());

const s2 = new Student('Shane', 26);
console.log(s2);
console.log(s2.getDescription());