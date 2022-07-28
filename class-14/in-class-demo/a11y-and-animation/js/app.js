'use strict';

const cta = document.querySelector('div.cta');
const results = document.getElementById('results');

function handleClick() {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = '<section class="deals"><h3>Your Deal</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur illo laborum, doloribus asperiores doloremque obcaecati mollitia nulla, excepturi at, eos perferendis nostrum non tempora quos quisquam alias. Explicabo, quis!<p><ul><li>One</li><li>Two</li><li>Three</li></ul><div class="claim-deal">Claim deal</div></section>';
  results.appendChild(newParagraph);
}

cta.addEventListener('click', handleClick);
cta.addEventListener('keypress', handleClick);
