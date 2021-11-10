/******************Task 2**************************************************/

function loadData() {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://127.0.0.1:5500/books.json', true);
   xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) return;

      if (xhr.status != 200) {
         alert('Error ' + xhr.status + ': ' + xhr.statusText);
      } else {
         let result = JSON.parse(xhr.responseText);
         for (let i = 0; i < result.length; i++) {
            list.innerHTML += `<li>${result[i]['author']}</li>`;
         }
      }
   }
   xhr.send();
}


download.addEventListener('click', loadData);