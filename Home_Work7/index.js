/*******************Task 1**************************************************************/

let newWin = window.open('/', 'google', 'width=300,height=300');
setTimeout(() => newWin.resizeTo(500, 500), 2000);
setTimeout(() => newWin.moveTo(200, 200), 4000);
setTimeout(() => newWin.close(), 6000);


/******************Task 2**************************************************************/

const p = document.getElementById('text');

function changeCSS() {
   p.style.color = 'orange';
   p.style.fontSize = '20px';
   p.style.fontFamily = 'Comic Sans MS';
}

btn.addEventListener("click", changeCSS);


/*****************Task 3**************************************************************/


test.style.height = '50px';

btn1.onclick = () => {
   test.style.backgroundColor = 'blue';
}

btn2.ondblclick = () => {
   test.style.backgroundColor = 'pink';
}

btn3.onmousedown = () => {
   test.style.backgroundColor = 'brown';
}

btn3.onmouseup = () => {
   test.style.backgroundColor = 'white';
}

link.onmouseover = () => {
   test.style.backgroundColor = 'yellow';
}

link.onmouseout = () => {
   test.style.backgroundColor = 'white';
}


/***********************Task 4************************************************************/


deleteBtn.onclick = () => {
   select.removeChild(document.getElementById(`${select.value}`));
}


/***********************Task 5***********************************************************/


liveBtn.onclick = () => {
   result.innerHTML += `<div>I was pressed!</div>`;
}

liveBtn.onmouseover = () => {
   result.innerHTML += `<div>Mouse on me!</div>`;
}

liveBtn.onmouseout = () => {
   result.innerHTML += `<div>Mouse is not on me!</div>`;
}


/**********************Task 6***********************************************************/


let width = window.innerWidth
let height = window.innerHeight;
screenRes.innerHTML = 'Width: ' + width + ' Height: ' + height;

window.onresize = () => {
   width = window.innerWidth;
   height = window.innerHeight;
   screenRes.innerHTML = 'Width: ' + width + ', Height: ' + height;
}


/********************Task 7***********************************************************/


const obj = {
   usa: ['Chikago', 'New York', 'Las Vegas', 'Boston'],
   ger: ['Berlin', 'Mainz', 'Munich', 'Drezden'],
   ukr: ['Lviv', 'Kyiv', 'Odessa', 'Kharkiv']
};



let selectCity = '';
let selectCountry = '';

function dataCountry() {
   selectCountry = country.options[country.selectedIndex].text;

   while (cities.firstChild) {
      cities.removeChild(cities.firstChild);
   }

   for (let key in obj) {
      if (country.value === key) {
         obj[key].forEach(element => {
            cities.innerHTML += `<option>${element}</option>`;
         });
      }
   }
   dataCities();
   res.innerHTML = selectCountry + ', ' + selectCity;
}

function dataCities() {
   selectCity = cities.options[cities.selectedIndex].text;
   res.innerHTML = selectCountry + ', ' + selectCity;
}

dataCountry();

country.addEventListener('change', dataCountry);
cities.addEventListener('change', dataCities);

