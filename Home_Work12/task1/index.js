/***********************Task 1**************************************************/

function loadData() {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://localhost:5000', true);
   xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) return;

      if (xhr.status != 200) {
         alert('Error ' + xhr.status + ': ' + xhr.statusText);
      } else {
         btn.innerHTML = 'You vote is accepted: ' + xhr.responseText;
      }
   }
   xhr.send();
}

btn.addEventListener('click', loadData);