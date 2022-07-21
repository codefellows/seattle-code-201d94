'use strict';

// step 1: event handling
// must get the container we are listening to from the DOM
let myContainer = document.getElementById('container');
let parentEl = document.getElementById('results');


//step 3:  create event handler to do specific things when event is FIRED or RAISED
// event Handler
// takes in ONE parameter - the event
let handleClick = function(event) {
  console.log(event);

  if (event.target.id === 'box-one') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 1 was clicked!';
    pEl.className = 'class-I-am-adding';
    parentEl.append(pEl);
  } else if (event.target.id === 'box-two') {
    let pEl = document.createElement('p');
    pEl.textContent = 'clicked:  Box 2!';
    pEl.setAttribute('class', 'class-I-am-adding');
    parentEl.append(pEl);
  } else if (event.target.id === 'box-three') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 3 done got clicked!';
    parentEl.appendChild(pEl);
  } else {
    let pEl = document.createElement('p');
    pEl.textContent = 'FOLLOW INSTRUCTIONS!!!';
    parentEl.appendChild(pEl);
  }
};

// step 2: add event listener, we pass in two arguements!  event as string, and callback function
// placed at bottom typically (below other function declarations)
myContainer.addEventListener('click', handleClick);

