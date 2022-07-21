'use strict';

console.log('inClass.js');

// 1 — window into the DOM
let myContainer = document.getElementById('container');
let resultsContainer = document.getElementById('results');

// 3 - declare the event handler (function)
function handleClick(event) {
  console.log(event);
  let pElement = document.createElement('p')
  if (event.target.id === 'box-one') {
    console.log('Box 1 was clicked');
    pElement.textContent = 'box 1';
  } else if (event.target.id === 'box-two') {
    console.log('Box 2 was clicked');
    pElement.textContent = 'box 2';
  }
  resultsContainer.appendChild(pElement);
}

// 2 - add the event listerner
myContainer.addEventListener('click', handleClick);
