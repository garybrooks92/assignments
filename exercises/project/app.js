let myForm = document.getElementById('myForm');
let myField = document.getElementById('myField');
let myList = document.getElementById('myList');

myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  createItem();
});

// {
//   event.preventDefault();
// } createItem(ourField.value);


function createItem() {
  let myHTML = `<li> ${myField.value} <button onClick="deleteItem(this)">Delete</button></li>`
  myList.insertAdjacentHTML("beforeend", myHTML);
  myField.value = "";
  myField.focus();
}

function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove();
}