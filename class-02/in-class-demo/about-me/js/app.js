'use strict';



console.log('hello');

let livesInSeattle = prompt('Do I live in Seattle?').toLowerCase();
// console.log(livesInSeattle);
// let lowercaseLivesInSeattle = livesInSeattle.toLowerCase();
// console.log(lowercaseLivesInSeattle)

if (livesInSeattle === 'yes' || livesInSeattle === 'y') {
  console.log('Yes, I do live in Seattle');
} else if (livesInSeattle === 'no' || livesInSeattle === 'n') {
  console.log('Sorry, you are wrong. I do live in Seattle.');
} else {
  console.log('You need to answer with a \'yes\' or a \'no\'');
}
