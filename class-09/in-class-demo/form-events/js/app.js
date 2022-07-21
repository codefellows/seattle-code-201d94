'use strict';

console.log('form js');

// 1. window into the dom (the thing we are going to attach the event listener to)

let form = document.getElementById('formId');
// let form2 = document.querySelector('form');

// 3. event handler
function handleSubmit(event) {
  event.preventDefault();
  let first = event.target.firstName.value;
  let last = event.target.lastName.value;
  console.log(first, last);
}

// 2. add event listener
//.addEventListener
form.addEventListener('submit', handleSubmit);
