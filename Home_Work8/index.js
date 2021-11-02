/*******************Task 1**************************************************************/


function upperCase(elem) {
   const result = /^[A-Z]/.test(elem);
   if (result === true) {
      console.log('Strings starts with uppercase character');
   }
   else {
      console.log('Strings not starts with uppercase character')
   }
}

console.log('Task_1');
upperCase('regexp');
upperCase('RegExp');


/********************Task 2************************************************************/


function checkEmail(email) {
   const result = /^[\w\W?]+@[\w\W?]+\.[\w\W?]+$/.test(email);
   console.log(result);
}

console.log('Task_2');
checkEmail("Qmail2@gmail.com");


/********************Task 3***********************************************************/


const reg = new RegExp(/d(b+)(d)/gi);
const result = reg.exec("cdbBdbsbz");
console.log('Task_3');
console.log(result);



/*******************Task 4************************************************************/


const str = "Java Script";
console.log('Task_4');
console.log(str.replace(/([\w]+)\s([\w]+)/, '$2,$1'));


/*******************Task 5***********************************************************/


function checkBancCard(num) {
   const result = /\d{4}-\d{4}-\d{4}-\d{4}/.test(num);
   console.log(result);
}

console.log('Task_5');
checkBancCard('4444-5555-6666-7777');


/*******************Task 6***********************************************************/


function checkEmail2(email) {
   const result = /^[^_\-\W]([-]?\w)+@\w+\.\w+/gi.test(email);
   if (result === true) {
      console.log('Email is correct!');
   }
   else {
      console.log('Email is not correct!');
   }
}

console.log('Task_6');
checkEmail2('my_mail@gmail.com');
checkEmail2('#my_mail@gmail.com');
checkEmail2('my_ma--il@gmail.com');


/*******************Task 7***********************************************************/


function checkLogin(login) {
   const result = /^[^\d][\w\d\.]{2,10}$/.test(login);
   const number = login.match(/([0-9]*[.])?[0-9]+/g);
   console.log(result);
   console.log(number.join(','));
}

console.log('Task_7:');
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');










/* /^((([0-9A-Za-z]{1}[0-9A-Za-z-?_*]{1,})@(\w+\.\w+))$/ */