/**********************Task 1****************************************/

function calcRectangleArea(width, height) {
	try {
		if (isNaN(width) !== true && (isNaN(height) !== true)) {
			let s = width * height;
			console.log('The area of the rectangle: ' + s);
		}
		else {
			console.log('Incorrect data');
		}
	} catch (error) {
		console.log(error.name);
		console.log(error.message);
		console.log(error.stack);
	}
};

console.log('Task_1:');
calcRectangleArea(15, 22);


/*****************************Task 2********************************/

function checkAge() {
	try {
		let check_age = prompt('Please enter your age.');

		if (check_age === '') {
			alert('The field is empty!  Please enter your age.');
		}
		else if (isNaN(check_age) === true) {
			alert('The field is not a number!  Please enter your age.')
		}
		else if (check_age < 14) {
			alert('You are too young!');
		}
		else {
			alert('Enjoy watching the movie!');
		}
	} catch (error) {
		console.log('Task_2:');
		console.log(error.name);
		console.log(error.message);
	}
}

checkAge();


/********************Taks 3*****************************************/

class MonthException {
	constructor(message) {
		this.message = message;
		this.name = 'MonthException';
	}
}

let message = new MonthException('Incorrect month number');


function showMonthName(month) {
	let obj = {
		1: 'January',
		2: 'February',
		3: 'March',
		4: 'April',
		5: 'May',
		6: 'June',
		7: 'July',
		8: 'August',
		9: 'September',
		10: 'October',
		11: 'November',
		12: 'December'
	}

	for (let key in obj) {
		if (month === Number(key)) {
			return obj[key];
		}
		else if (month > 12 || month < 1) {
			return message;
		}
		else if (typeof month !== 'number') {
			return 'Incorrect number';
		}
	}
}

console.log('Task_3:');
console.log(showMonthName(5));
console.log(showMonthName(14));


/*********************Task 4*************************************/

function showUser(id) {
	let users = [{
		id: 7,
		name: 'xaiji'
	}, {
		id: 22,
		name: 'uhwhe'
	}, {
		id: 44,
		name: 'jsijj'
	}];


	for (let i = 0; i < users.length; i++) {
		for (let key in users[i]) {
			if (users[i][key] === id) {
				return users[i];
			}
			else if (id < 0) {
				return 'Error: ID must not be negative: ' + id;
			}
		}
	}
}

console.log('Task_4:');
console.log(showUser(22));


function showUsers(ids) {
	let arr = [];
	for (let i = 0; i < ids.length; i++) {
		if (ids[i] < 0) {
			console.log('Error: ID must not be negative: ' + ids[i]);
		}
		else {
			arr.push(showUser(ids[i]));
		}
	}
	console.log(arr);
}

console.log('Task_4:');
showUsers([7, -12, 44, 22]);