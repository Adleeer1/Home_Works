const btnCreate = document.getElementById('btnCreate');
const nameVal = document.getElementById('name');
const price = document.getElementById('price');
const material = document.getElementById('material');
const color = document.getElementById('select-color');
const main = document.getElementById('main');
const checkbox = document.querySelector('.checkbox');
const editBtn = document.querySelector('.edit-modal');
const nameEdit = document.getElementById('editName');
const priceEdit = document.getElementById('editPrice');
const materialEdit = document.getElementById('editMaterial');
const colorEdit = document.getElementById('editColor');
const inputs = document.querySelectorAll('input');
const inpFile = document.getElementById('inpFile');
const inpFileEdit = document.getElementById('inpFileEdit');


function saveData() {
   let imgValue = inpFile.value.match(/([\w]+?[-]?[\w]+?)\.\w+/);
   const obj = {
      'name': nameVal.value,
      'price': price.value,
      'material': material.value,
      'color': color.options[color.selectedIndex].text,
      'image': imgValue[0]
   }
   localStorage.setItem(nameVal.value, JSON.stringify(obj));
   getData();
}


function getData() {
   const array = [];
   const arrKey = Object.keys(localStorage);
   arrKey.forEach(element => {
      let raw = localStorage.getItem(element);
      let card = JSON.parse(raw);
      array.push(card);
   });
   createCard(array);
   return array;
}

getData();
btnCreate.addEventListener('click', saveData);


function createCard(data) {
   main.innerHTML = "";
   data.forEach(elem => {
      main.innerHTML += `
      <div class="item">
      <div class="itemImg"><img src="img/${elem.image}" class="card-img-top" width="200" height="200" alt=""></div>
         <div><h5 class="itemName">${elem.name}</h5></div>
         <ul>
            <li>Price: ${elem.price}$</li>
            <li>Material: ${elem.material}</li>
            <li>Color: ${elem.color}</li>
         </ul>
         <div class="itemBtns">
            <button type="button" class="btn btn-primary btn-edit" id="${elem.name}" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Edit</button>
            <button class="btn btn-danger btn-delete" name="${elem.name}"type="submit">Delete</button>
         </div>
      </div>`
   });
}


function removeCard(event) {
   localStorage.removeItem(event.target.name);
   getData();
}

main.addEventListener('click', removeCard);

function countTotalPrice() {
   totalPrice.innerHTML = '';
   let total = 0;
   const arrKey = Object.keys(localStorage);
   arrKey.forEach(element => {
      let raw = localStorage.getItem(element);
      let card = JSON.parse(raw);
      total += +card.price;
   });
   totalPrice.innerHTML += `<p>Total price: ${total} $</p>`;
}



function sortByPrice() {
   const data = getData();
   main.innerHTML = "";

   let byPrice = data.slice(0);
   byPrice.sort(function (a, b) {
      return a.price - b.price;
   });

   if (checkbox.checked === true) {
      byPrice.forEach(elem => {
         main.innerHTML += `
      <div class="item">
      <div class="itemImg"><img src="img/${elem.image}" class="card-img-top" width="200" height="200" alt=""></div>
         <div><h5 class="itemName">${elem.name}</h5></div>
         <ul>
            <li>Price: ${elem.price}$</li>
            <li>Material: ${elem.material}</li>
            <li>Color: ${elem.color}</li>
         </ul>
         <div class="itemBtns">
            <button type="button" class="btn btn-primary btn-edit" id="${elem.name}" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Edit</button>
            <button class="btn btn-danger btn-delete" name="${elem.name}"type="submit">Delete</button>
         </div>
      </div>`
      });
   }

   else if (checkbox.checked === false) {
      main.innerHTML = "";
      getData();
   }
}

checkbox.addEventListener('change', sortByPrice);


main.addEventListener('click', (e) => {
   editBtn.setAttribute('id', e.target.id);
   const arrKey = Object.keys(localStorage);
   arrKey.forEach(element => {
      let raw = localStorage.getItem(element);
      let card = JSON.parse(raw);
      nameEdit.value = card.name,
         priceEdit.value = card.price,
         materialEdit.value = card.material
   });
})




function editCard(event) {
   let imgValue = inpFileEdit.value.match(/([\w]+?[-]?[\w]+?)\.\w+/);
   localStorage.removeItem(event.target.id);
   const obj = {
      'name': nameEdit.value,
      'price': priceEdit.value,
      'material': materialEdit.value,
      'color': colorEdit.options[color.selectedIndex].text,
      'image': imgValue[0]
   }
   localStorage.setItem(nameEdit.value, JSON.stringify(obj));
   getData();
}


editBtn.addEventListener('click', editCard);



function sortByName() {
   if (searchInp.value !== '') {
      const array = [];
      let raw = localStorage.getItem(searchInp.value);
      let card = JSON.parse(raw);
      array.push(card);
      createCard(array);
      return array;
   }
   else {
      alert('Input value is empty');
   }
}

searchBtn.addEventListener('click', sortByName);


function canselSearch() {
   getData();
}

canselBtn.addEventListener('click', canselSearch);


function removeInputValue() {
   for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
   };
}

editBtn.addEventListener('click', removeInputValue);
btnCreate.addEventListener('click', removeInputValue);
searchBtn.addEventListener('click', removeInputValue);
