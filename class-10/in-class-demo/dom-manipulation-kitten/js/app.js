'use strict';


// Glocal variables
console.log('hi');
// let tableHead = document.querySelector('thead');
let tableBody = document.querySelector('tbody');
// let tableFoot = document.querySelector('tfoot');
console.log(tableBody);

// Global fuctions and constructors
function addAnElement(newEl, content, parentEl) {
  let element = document.createElement(newEl);
  element.textContent = content;
  parentEl.appendChild(element);
}

function Kitten(name, like, about, src) {
  this.name = name;
  this.like = like;
  this.about = about;
  this.src = src;
}

Kitten.prototype.render = function () {
  // Grab the element in the DOM:
  let kittenContainer = document.getElementById('kittenProfiles');
  // proof of life
  // console.log(kittenContainer);

  // render the containing article

  // 1. create the element
  let art = document.createElement('article');

  // 2. give it content

  // 3. append it to the DOM
  kittenContainer.appendChild(art);


  // create HTML elements in JavaScript
  // 3 steps
  // 1. create an h3
  let h3 = document.createElement('h3');
  // 2. give it content
  h3.textContent = this.name;
  // 3. append it the DOM
  art.appendChild(h3)

  let para = document.createElement('p');
  para.textContent = this.about;
  art.appendChild(para);

  let list = document.createElement('ul');
  list.setAttribute('class', 'test-class');
  art.appendChild(list);

  // add an image
  // 1. create the image element
  let image = document.createElement('img');

  // 2. give it content
  image.src = this.src;
  image.alt = this.about;
  image.width = 275;
  image.height = 184;

  // 3. append to the DOM
  art.appendChild(image);

  // let listItem = document.createElement('li');
  // listItem = `6am: ${seattle.someValueInAnArray[i]} cookies`;

  //fill in the <ul> with <li>s:
  this.renderList(list);
  this.renderTable();
};

Kitten.prototype.renderList = function (list) {
  // code to render the list items
  console.log('the render for the list');
  for (let i = 0; i < this.like.length; i++) {

    // addAnElement(newEl, content, parentEl)
    addAnElement('li', `${this.name} likes ${this.like[i]}`, list);
    // let li = document.createElement('li');
    // li.textContent = `${this.name} likes ${this.like[i]}`;
    // list.appendChild(li);
  }
};

Kitten.prototype.renderTable = function () {
  // create a table row in the tbody

  let trow = document.createElement('tr');
  tableBody.appendChild(trow);
  // inside that table row I need several TDs

  // 1 — that has the name of the Kitten
  let tdName = document.createElement('td');
  tdName.textContent = this.name;
  trow.appendChild(tdName);

  // 2+ — iterate through the Kitten like array and create a TD for each
  for (let i = 0; i < this.like.length; i++) {
    // for each element in the like array. create a TD
    // addAnElement(newEl, content, parentEl)

    addAnElement('td', this.like[i], trow);
    // let tdLike = document.createElement('td');
    // tdLike.textContent = this.like[i];
    // trow.appendChild(tdLike);
  }

}

// create instances of Kitten
// function Kitten(name, like, about, src)

let frankie = new Kitten(
  'Frankie',
  ['naps', 'treats', 'cat tree'],
  'Frankie is sooo nice.',
  'images/frankie.jpeg'
);

let jumper = new Kitten(
  'Jumper',
  ['cuddling', 'lazer pointer', 'catnip'],
  'Jumper is available for adoption',
  'images/jumper.jpeg'
);

let serena = new Kitten(
  'Serena',
  ['string', 'feathers', 'soft beds'],
  'Serena is a sweet kitty.',
  'images/serena.jpeg'
);

// frankie.render();
// jumper.render();
// serena.render();

let kittenArray = [frankie, serena, jumper];

function renderAll() {
  for (let i = 0; i < kittenArray.length; i++) {
    kittenArray[i].render();
  }
}

renderAll();


// ADD A NEW KITTEN

//1
let form = document.querySelector('form');

//3
function handleSubmit(event) {
  event.preventDefault();
  let kittenName = event.target.kittenName.value;
  let about = event.target.about.value;
  let ageInMonths = parseInt(event.target.ageInMonths.value);
  let imageURL = event.target.imageURL.value;
  // let fav1 = event.target.fav1.value;
  // let fav2 = event.target.fav2.value;
  // let fav3 = event.target.fav3.value;
  let favorites = [
    event.target.fav1.value,
    event.target.fav2.value,
    event.target.fav3.value
  ];
  console.log(typeof ageInMonths);
  // create a new instance of Kitten
  // function Kitten(name, like, about, src)
  let newKitty = new Kitten(kittenName, favorites, about, imageURL);
  kittenArray.push(newKitty);
  newKitty.render();
}

// Executable code

//2
form.addEventListener('submit', handleSubmit)



// let jumper = {
//   name: 'Jumper',
//   like: ['cuddling', 'lazer pointer', 'catnip'],
//   about: 'Jumper is available for adoption',
//   src: 'images/jumper.jpeg',
//   listId: `{this.name}Likes`,
//   render: function () {
//     // Grab the element in the DOM:
//     let kittenContainer = document.getElementById('kittenProfiles');
//     // proof of life
//     // console.log(kittenContainer);

//     // render the containing article

//     // 1. create the element
//     let art = document.createElement('article');

//     // 2. give it content

//     // 3. append it to the DOM
//     kittenContainer.appendChild(art);


//     // create HTML elements in JavaScript
//     // 3 steps
//     // 1. create an h3
//     let h3 = document.createElement('h3');
//     // 2. give it content
//     h3.textContent = this.name;
//     // 3. append it the DOM
//     art.appendChild(h3)

//     let para = document.createElement('p');
//     para.textContent = this.about;
//     art.appendChild(para);

//     let list = document.createElement('ul');
//     list.setAttribute('class', 'test-class');
//     art.appendChild(list);

//     // add an image
//     // 1. create the image element
//     let image = document.createElement('img');

//     // 2. give it content
//     image.src = this.src;
//     image.alt = this.about;
//     image.width = 275;
//     image.height = 184;

//     // 3. append to the DOM
//     art.appendChild(image);

//     // let listItem = document.createElement('li');
//     // listItem = `6am: ${seattle.someValueInAnArray[i]} cookies`;

//     //fill in the <ul> with <li>s:
//     this.renderList(list);
//   },
//   renderList: function (list) {
//     // code to render the list items
//     console.log('the render for the list');
//     for (let i = 0; i < this.like.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${this.name} likes ${this.like[i]}`;
//       list.appendChild(li);
//     }
//   }
// }

// jumper.render();
