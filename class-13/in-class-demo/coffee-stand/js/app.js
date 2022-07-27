// a local coffee shop wants your help to build a simple application they can use to record customer orders and maintain a record of what has been ordered (for any period of any amount of time).

// create a very simple app that has two components
// -- a way to create an order
//          - form
// -- a way to display the data
//          - lists (ul)

'use strict';
console.log('hi');


// GLOBAL VARIABLES

let drinkOrders = [];
let coffeeForm = document.querySelector('form');
let resultsLists = document.querySelector('ul');


// CONSTRUCTORS

function Drink(name, drinkType, milk, size) {
  this.name = name;
  this.drinkType = drinkType;
  this.milk = milk;
  this.size = size;
}

Drink.prototype.renderADrink = function () {
  // create an li
  let liElement = document.createElement('li');
  //give it some content
  // ex: Sheyna ordered a 12oz tea with whole milk.
  liElement.textContent = `${this.name} ordered a ${this.size} oz ${this.drinkType} with ${this.milk} milk.`;
  //append it to the parent
  resultsLists.appendChild(liElement);
}

// GLOBAL FUNCTIONS

function makeADrink(name, drinkType, milk, size) {
  // created a new Drink instance from our constructor
  let drinkObj = new Drink(name, drinkType, milk, size);
  // pushed that new instance onto the drink array
  drinkOrders.push(drinkObj);
  // Render and LI with information about the ordered drink:
  drinkObj.renderADrink();
}

function getDrinks() {
  // check if I have drinks (order) in storage
  let potentialOrders = localStorage.getItem('orders')
  // if there are no orders potentialOrders will be null
  if (potentialOrders) {
    // turn the potential orders back into Plain old JavaScript objects
    let parsedOrders = JSON.parse(potentialOrders);
    // turn them back into instances of Drinks
    // run the data back througgh the constructor again - REINSTANTIATE

    for (let order of parsedOrders) {
      console.log(order);
      // extract values from the POJOs
      let name = order.name;
      let drinkType = order.drinkType;
      let milk = order.milk;
      let size = order.size;

      // pass those values into my helper function that will create drink objects
      makeADrink(name, drinkType, milk, size)
    }
  }
  // if we do. than I need to do something with them
  // if there are no drinks???
}

function storeDrinks() {
  // to put things in localStorage I need a KEY (AKA label)
  // in this case 'orders' is my key.
  // 'pack' the items to put them put them in localStorage
  // use JSON.stringify() to turn it into a string
  console.log(drinkOrders);
  let stringifiedOrders = JSON.stringify(drinkOrders);
  console.log(stringifiedOrders);
  // set it in local storage
  localStorage.setItem('orders', stringifiedOrders)
  // console.log(JSON.parse(stringifiedOrders));
}

// EVENT HANDLER

function handleSubmit(event) {
  event.preventDefault();
  let customerName = event.target.name.value;
  let drinkType = event.target.drink.value;
  let milk = event.target.milk.value;
  let size = event.target.drinkSize.value;
  console.log(customerName, drinkType, milk, size);

  // makeADrink(name, drinkType, milk, size)
  makeADrink(customerName, drinkType, milk, size);
  storeDrinks();
}

// EXECUTABLE CODE


getDrinks();

// EVENT LISTENER
coffeeForm.addEventListener('submit', handleSubmit);
