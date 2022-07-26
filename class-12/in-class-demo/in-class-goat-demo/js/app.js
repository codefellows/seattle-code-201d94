'use strict';

/*

Goat Picker

  - I have collection of goat photos
  - user is presented the photos in 2s (2 goat photos at a time) — should be 2 different photos
  - user votes on their favorite by clicking on the photo
  - 15 match ups per round of voting (so 15 total votes)
  - at end of round display the results
  - in results I want to see
    - how many votes each goat got
    - how many times each goat photo was render


  PLAN

  Constructor — goat
    - name
    - image source
    - votes
    - views
  Global variables
    - all goat array
    - counter for the votes (number of matchups)
  method function
    render the goat image in the dom
      - can't have 2 of the same goat
    random number to use to get a goat
    display the results
  event lister
    goat clicks
      increment the vote
      triger a new set of goats

*/

console.log('hi');

// GLOBAL VARIABLES
let myContainer = document.querySelector('section');
// let myButton = document.querySelector('section + div');
let ul = document.querySelector('ul');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let allGoats = [];
let indexArray = [];
let clicks = 0;

let clickAllowed = 15;


// CONSTRUCTOR

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `images/${this.name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
}

// FUNCTIONS

function getRandomGoat() {
  return Math.floor(Math.random() * allGoats.length);
}

function renderGoats() {
  // let goat1 = getRandomGoat();
  // let goat2 = getRandomGoat();
  // console.log(goat1, goat2);
  // seriously consider using an array here
  // remember how do you know if an array includes something?
  // Google it and find out
  // while (goat1 === goat2) {
  //   goat2 = getRandomGoat();
  //   console.log(goat1, goat2);
  // }

  // indexArray = [2,1,4,5]
  while (indexArray.length < 4) {
    let ranNum = getRandomGoat();
    if (!indexArray.includes(ranNum)) {
      indexArray.push(ranNum);
    }
  }
  // console.log(indexArray[0], indexArray[1]);
  console.log(indexArray);

  let goat1 = indexArray.shift(); // 4
  let goat2 = indexArray.shift(); // 0
  // console.log(indexArray);

  image1.src = allGoats[goat1].src;
  image1.alt = allGoats[goat1].name;
  allGoats[goat1].views++;
  image2.src = allGoats[goat2].src;
  image2.alt = allGoats[goat2].name;
  allGoats[goat2].views++;
  // console.log(allGoats);
}

function handleGoatClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickedGoat = event.target.alt;
  console.log(clickedGoat);

  for (let i = 0; i < allGoats.length; i++) {
    if (clickedGoat === allGoats[i].name) {
      allGoats[i].clicks++;
      break;
    }
  }
  renderGoats();
  if (clicks === clickAllowed) {
    // myButton.className = 'clicks-allowed';
    myContainer.removeEventListener('click', handleGoatClick);
    renderChart();
    // myButton.addEventListener('click', handleButtonClick);
  }

}

// function handleButtonClick() {
//   // if (clicks === clickAllowed) {
//     renderResults();
//   // }
// }

// function renderResults() {

// for each  goat in my array, generate a LI
// ex: name had X views and was clicked on X times
// for (let i = 0; i < allGoats.length; i++) {
//   let li = document.createElement('li');
//   li.textContent = `${allGoats[i].name} had ${allGoats[i].views} views and was clicked on ${allGoats[i].clicks} times`;
//   ul.appendChild(li);
// }
// }

// EXCUTABLE CODE


let cruisin = new Goat('cruisin-goat', 'png');
let float = new Goat('float-your-goat');
let hand = new Goat('goat-out-of-hand');
let kissing = new Goat('kissing-goat');
let sassy = new Goat('sassy-goat');
let smile = new Goat('smiling-goat');
let sweater = new Goat('sweater-goat');

allGoats.push(cruisin, float, hand, kissing, sassy, smile, sweater);

// console.log(allGoats);
renderGoats();

myContainer.addEventListener('click', handleGoatClick);


// CHART.JS
function renderChart() {

  console.log(allGoats[0].name)
  let goatNames = [];
  let goatViews = [];
  let goatClicks = [];
  for (let i = 0; i < allGoats.length; i++) {
    goatNames.push(allGoats[i].name);
    goatViews.push(allGoats[i].views);
    goatClicks.push(allGoats[i].clicks);
  }
  console.log(goatNames);
  console.log(goatViews);
  console.log(goatClicks);

  // const labels = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray'];

  const data = {
    labels: goatNames,
    datasets: [
      {
        label: 'Views',
        data: goatViews,
        backgroundColor: [
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      },
      {
        label: 'Clicks/Votes',
        data: goatClicks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
        ],
        borderWidth: 1
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}
