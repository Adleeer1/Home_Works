/********************Task 1**************************************************************************/

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};


function propsCount(currentObject) {
    let res = Object.keys(currentObject);
    console.log(res.length);
}

console.log('Task_1:');
propsCount(mentor);


/*********************Task 2*************************************************************************/

let user = {
    name: 'Ivan',
    surName: 'Ivanov',
    age: '23',
    city: 'Kyiv',
    profession: 'Developer'
}

function showProps(obj) {
    let arr = [];
    let arr2 = [];

    for(let key in obj) {
        arr.push(key);
        arr2.push(obj[key]);
    }

    console.log(arr);
    console.log(arr2);
}

console.log('Task_2:');
showProps(user);


/************************Task 3***********************************************************************/

class Person {
    constructor(name, surName) {
        this.name = name;
        this.surName = surName;
    }

    showFullName() {
        return this.name + ' ' + this.surName;
    }
}

class Student extends Person {
    constructor(name, surName, year) {
        super(name, surName);
        this.year = year;
    }

    showFullName(midleName) {
        return this.surName + ' ' + this.name + ' ' + midleName;
    }

    showCourse() {
        return 2021 - this.year;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log('Task_3: ');
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());




/***********************Task 4************************************************************************/

class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log('Salary: ' + salary);
    }

    showSalaryWithExperience() {
        const salaryWithExperience = (this.dayRate * this.workingDays) * this.#experience;
        console.log('Salary with experience: ' + salaryWithExperience);
    }

    set showExp(value) {
        this.#experience = value;
    }

    get showExp() {
        return this.#experience;
    }
}

let worker = new Worker('Ivan Ivanov', 50, 20);

console.log('Task_4:');
worker.showSalary();
worker.showSalaryWithExperience();
worker.showExp = 1.5;
console.log('New experience: ' + worker.showExp);
console.log('Salary with experience: ' + (worker.dayRate * worker.workingDays) * worker.showExp);
console.log('******************************');


let worker1 = new Worker("John Johnson", 20, 23);

console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.showExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
console.log('******************************');

let worker2 = new Worker("Tom Tomson", 48, 22);

console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.showExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log('******************************');

let worker3 = new Worker("Andy Ander", 29, 23);

console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.showExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
console.log('******************************');


let test1 = (worker1.dayRate * worker1.workingDays) * worker1.showExp;
let test2 = (worker2.dayRate * worker2.workingDays) * worker2.showExp;
let test3 = (worker3.dayRate * worker3.workingDays) * worker3.showExp;


let objWorkers = [
    {   name: 'Jonh Johnson', 
        salary: test1
    }, {
        name: 'Tom Tomson', 
        salary: test2
    }, {
        name: 'Andy Ander', 
        salary: test3
    }
]


function sortBySalary(obj) {
    obj.sort((a, b) => a.salary > b.salary ? 1 : -1);
    for(let key in obj) {
        console.log(obj[key].name + ': ' + obj[key].salary);
    }
}

console.log('Sorted salary: ');
sortBySalary(objWorkers);


/********************Task 5*****************************************************************************/

class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(a, h) {
        super();
        this.a = a;
        this.h = h;
    }
    getArea() {
        return 0.5 * this.a * this.h;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea(){
        return this.a * this.a;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea(){
        return Math.PI * (this.r ** 2);
    }
}


function handleFigures(figures) {
    let totalArea = 0;
    for(let i = 0; i < figures.length; i++) {
        if(figures[i] instanceof GeometricFigure === true) {
            let res1 = figures[i];
            totalArea += res1.getArea();
            console.log('Geometric figure: ' + figures[i] + ' - area: ' + res1.getArea());
        }
    }
    console.log('Total area: ' + totalArea);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log('Task_5:');
handleFigures(figures);

