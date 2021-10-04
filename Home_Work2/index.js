/********************Task 1*********************************/

const x = 1;
const y = 2;

const res1 = x + '' + y;
console.log(res1);
console.log(typeof res1);


const res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);


const res3 = Boolean(x);
console.log(res3);
console.log(typeof res3);


const res4 = x + y * 'm';
console.log(res4);
console.log(typeof res4);

/*******************Task 2************************************/

const number = prompt('Write the number');

if (number % 2 === 1) {
	console.log('This is an odd number');
}
else {
	console.log('It is an even number.');
}

if (number % 7 === 0) {
	console.log('This number is a multiple of 7');
}
else {
	console.log('This number is not a multiple of 7');
}


/*******************Task 3************************************/

let arr = [];

arr.unshift(22);
arr.push('JavaScript is the programming language of the Web');
arr.push(true);
arr.push(null);
console.log(arr.length);

let test = prompt("Write something");
arr[4] = test;
console.log(arr[4]);

arr.shift();
console.log(arr);

/*******************Task 4************************************/

let cities = ["Rome", "Lviv", "Warsaw"];
let cities2 = [];

let str = cities.join('*');
cities2.push(str);
console.log(cities2);

/********************Task 5************************************/

const isAdult = prompt('How old are you?');

if (isAdult >= 18) {
	console.log('You are an adult!');
}
else {
	console.log('You are too young!');
}

/********************Task 6*************************************/

const side = Number(prompt('Enter the side of the triangle'));
const side2 = Number(prompt('Enter the side of the triangle'));
const side3 = Number(prompt('Enter the side of the triangle'));


const perim = (side + side2 + side3) / 2;
const square = perim * (perim - side) * (perim - side2) * (perim - side3);
const result = Math.sqrt(square);


if (isNaN(result) === true) {
	console.log('Incorrect data');
}
else {
	console.log(result.toFixed(3));
}


function checkup(a, b, c) {
	let check = [a, b, c].sort((a, b) => a - b)[1];
	return check;
}


const maxNum = Math.max(side, side2, side3);
const minNum = Math.min(side, side2, side3);
const resultCheck = checkup(side, side2, side3);

const resMaxNum = maxNum ** 2;
const resMinNum = minNum ** 2;
const middleNum = resultCheck ** 2;


if (resMaxNum === resMinNum + middleNum) {
	console.log('This is a right triangle');
}
else {
	console.log('Is not a right triangle');
}

/*********************Task 7***************************************/

//Attempt number one

const date = new Date();
const hours = date.getHours();

if (hours >= 23) {
	console.log('Good night!');
}

else if (hours < 5) {
	console.log('Good night!');
}

else if (hours >= 5 && hours < 11) {
	console.log('Good morning!');
}

else if (hours >= 11 && hours < 17) {
	console.log('Good afternoon!');
}

else if (hours >= 17 && hours < 23) {
	console.log('Good evening!')
}

//Attempt number two

const myDate = Number(moment().format('HH'));
moment.locale('ua');


let myHour = (myDate >= 23) ? 'Good night!' :
	(myDate < 5) ? 'Good night!' :
		(myDate >= 5 && myDate < 11) ? 'Good morning!' :
			(myDate >= 11 && myDate < 17) ? 'Good afternoon!' :
				(myDate >= 17 && myDate < 23) ? 'Good evening!' : 'Incorrect';
console.log(myHour);





