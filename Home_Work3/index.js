/******************Task 1**************************************/

//Attempt one

const arr = [2, 3, 4, 5];
let count = 1;

for (let i = 0; i < arr.length; i++) {
	count = count * arr[i];
}
console.log('Task_1:');
console.log(count);

//Attempt two


let res = 1;
let i = arr.length;

while (i > 0) {
	res *= arr[--i];
}

console.log('Task_1:');
console.log(res);



/**********************Task 2*****************************************/

console.log('Task_2:');

for (let i = 0; i <= 15; i++) {
	if (i % 2 === 0) {
		console.log(i + ' is even');
	}
	else {
		console.log(i + ' is odd');
	}
}


/**********************Task 3*****************************************/

let k2 = [];

function randArray(k) {
	while (k2.length < k) {
		let rand = 1 + Math.random() * (500 + 1 - 1);
		let res = Math.floor(rand);
		k2.push(res);
	}
	return k2;
}

console.log('Task_3:');
console.log(randArray(5));


/*************************Task 4**************************************/

function raiseToDegree(a, b) {
	let result = a ** b;
	if (Number.isInteger(a) === true && Number.isInteger(b) === true) {
		return result;
	}
	else {
		console.log('Incorrect number');
	}
}

console.log('Task_4:');
console.log(raiseToDegree(5, 3));


/**************************Task 5*************************************/

function findMin(...arg) {
	let minNum = arg[0];
	for (let i = 0; i < arg.length; i++) {
		if (arg[i] < minNum) {
			minNum = arg[i];
		}
	}
	return minNum;
}

console.log('Task_5:');
console.log(findMin(12, 14, 4, -4, 0.2));


/*****************************Task 6***********************************/

function findUnique(arr) {
	let array = [];
	let result = [];
	array = arr;
	for (let num of array) {
		if (!result.includes(num)) {
			result.push(num);
		}
	}
	if (array.length === result.length) {
		return true;
	}
	else {
		return false;
	}
}

console.log('Task_6:');
console.log(findUnique([1, 2, 3, 5, 11]));


/*****************************Task 7*************************************/

function lastElem(arr) {
	if (arguments[1] === undefined) {
		return arr[arr.length - 1];
	}
	else {
		return arr.slice(-arguments[1]);
	}
}

console.log('Task_7:');
console.log(lastElem([3, 4, 10, -5], 2));


/******************************Task 8**********************************/

function upperCase(str) {
	return str.replace(/(^|\s)\S/g, function (a) {
		return a.toUpperCase()
	})
}

console.log('Task_8:');
console.log(upperCase('i love java script'));