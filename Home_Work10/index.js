/*******************Task 1**************************************************************/

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, k, ...z] = arr;
console.log('Task_1');
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]


/*******************Task 2**************************************************************/


let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
console.log('Task_2');
console.log(name2)
console.log(age2);
console.log(name4);
console.log(age4);


/*******************Task 3***************************************************************/


function mul(...arg) {
   let number = 0;
   arg.forEach(element => {
      if (typeof element === 'number' && (isNaN(element) === false)) {
         number += element;
      }
   });
   return number;
}

console.log('Task_3');
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));


/*******************Task 4**************************************************************/


let server = {
   data: 0,
   convertToString: function (callback) {
      callback(() => {
         return this.data + "";
      });
   }
};

let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return ((callback) => {
         this.result = callback();
      });
   }
};

client.calc(123);
console.log('Task_4');
console.log(client.result);
console.log(typeof client.result);


/*******************Task 5*************************************************************/

console.log('Task_5');
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);


function mapBuilder(keysArray, valuesArray) {
   const [key1, key2, key3, key4] = keysArray;
   const [value1, value2, value3, value4] = valuesArray;
   const res = new Map();
   res.set(key1, value1)
      .set(key2, value2)
      .set(key3, value3)
      .set(key4, value4);
   console.log(res.size);
   console.log(res.get(2));
}

