/******************Task 2 **************************************/

alert('Zaiachkovskyi');

/******************Task 3****************************************/

let testOne;
let testTwo;

testOne = 25;
testTwo = 36;
console.log(testOne + ', ' + testTwo);

testOne = testTwo;
console.log(testOne + ', ' + testTwo);

/******************Task 4***************************************/

let myObj = {
	string: 'String of my object',
	number: 77,
	boolean: true,
	underfined: "",
	null: null
}

/*******************Task 5**************************************/

let isAdult = confirm('You are 18 years old?');
console.log(isAdult);

/********************Task 6*************************************/

let firstName = 'Andrii';
let lastName = 'Zaiachkovskyi';
let studyGroup = 'Lv-636';
let yearOfBirth = 1995;

let question = confirm('You married?');
let result;

if (question === true) {
	result = 'I am married';
}
else {
	result = 'I am not married';
}
console.log(result);


console.log(typeof yearOfBirth + ', ' + typeof firstName + ', ' + typeof lastName + ', ' + typeof studyGroup);

let testNull = null;
let testUnderfined;
console.log(typeof testNull + ', ' + typeof testUnderfined);

/*********************Task 7**************************************/

let login = prompt('Your login');
let mail = prompt('Your mail');
let password = prompt('Your password');

console.log('Dear ' + login + ', ' + 'your mail is ' + mail + ', ' + 'your password is ' + password);

/************************Task 8***********************************/

let oneHour = 60 * 60;
let oneDay = 60 * 60 * 24;
let oneMonth = 60 * 60 * 24 * 31;

console.log('Seconds a hour' + ' - ' + oneHour);
console.log('Seconds a day' + ' - ' + oneDay);
console.log('Seconds a month' + ' - ' + oneMonth);
