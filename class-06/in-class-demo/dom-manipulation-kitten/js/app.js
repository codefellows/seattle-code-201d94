'use strict';

console.log('hi');

let jumper = {
  name: 'Jumper',
  like: ['cuddling', 'lazer pointer', 'catnip'],
  render: function () {
    // code to render the list items
    for (let i = 0; i < this.like.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.like[i]}`;
      list.appendChild(li);
    }
  }
}

// Grab the element in the DOM:
let kittenContainer = document.getElementById('kittenProfiles');

// proof of life
console.log(kittenContainer);

// create HTML elements in JavaScript
// 3 steps

// 1. create the element
let art = document.createElement('article');

// 2. give it content

// 3. append it to the DOM
kittenContainer.appendChild(art);


// 1. create an h3
let h3 = document.createElement('h3');
// 2. give it content
h3.textContent = 'Jumper';
// 3. append it the DOM
art.appendChild(h3)

let para = document.createElement('p');
para.textContent = 'Jumper the cat is cute.';
art.appendChild(para);

// add an image
// 1. create the image element
let image = document.createElement('img');

// 2. give it content
image.src = 'images/jumper.jpeg';
image.alt = 'Jumper is available for adoption';
image.width = 275;
image.height = 184;

// 3. append to the DOM
art.appendChild(image);

let list = document.createElement('ul');
list.setAttribute('class', 'test-class');

// let listItem = document.createElement('li');
// listItem = `6am: ${seattle.someValueInAnArray[i]} cookies`;

art.appendChild(list);

jumper.render();
