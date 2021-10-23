/********************Task 1***************************************************************/


document.getElementById('test').innerHTML = 'Last';
document.querySelector('#test').innerHTML = 'Last';


/**********************Task 2**************************************************************/


document.querySelector('.image').src = 'cat.jpg';
const img = document.querySelector('.image');
alert(img.outerHTML);


/**********************Task 3***************************************************************/

console.log('Task_3:');
const text = document.querySelectorAll('#text');
const arr = [];
arr.push(text[0].children[0].innerHTML, text[0].children[1].innerHTML, text[0].children[2].innerHTML);

for(let i = 0; i < arr.length; i++) {
    console.log('Selector text ' + arr.indexOf(arr[i]) + ': ' + arr[i]);
}


/**********************Task 4****************************************************************/


//Attempt 1

const listArr = [];

listArr.push(list.firstElementChild.textContent,
            list.lastElementChild.textContent,
            list.firstElementChild.nextElementSibling.textContent,
            list.lastElementChild.previousElementSibling.textContent,
            list.firstElementChild.nextElementSibling.nextElementSibling.textContent);

const result = listArr.toString();
console.log('Task_4:');
console.log(result);



//Attempt 2

const listArr2 = [];

listArr2.push(list.children[0].innerHTML,
            list.children[list.children.length - 1].innerHTML,
            list.children[list.children.length - 4].innerHTML,
            list.children[list.children.length - 2].innerHTML,
            list.children[list.children.length - 3].innerHTML);

const result2 = listArr2.toString();
console.log(result2);


/**************************Task 5*****************************************************************/


document.querySelector('.green').style.background = '#0f0';
document.querySelector('.green').style.width = '40%';

myDiv.firstElementChild.style.fontWeight = 'bold';
myDiv.firstElementChild.nextElementSibling.style.color = 'red';
myDiv.lastElementChild.previousElementSibling.style.textDecoration = 'underline';
myDiv.lastElementChild.style.fontStyle = 'italic';
myList.remove();


document.querySelector('.span').innerHTML = 'Makemehorizontal!';
document.querySelector('.span').style.paddingLeft = '40px';


/****************************Task 6****************************************************************/


const question = prompt('Write something');
const question2 = prompt('Write something');

input1.value = question;
input2.value = question2;
input1.value = question2;
input2.value = question;

