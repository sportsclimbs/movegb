console.log('page.js is working');

const stage = document.querySelector('.stage');
const trex = document.querySelector('[src*=trex]');
const dancers = document.querySelector('[src*=dancers]');
const couple = document.querySelector('[src*=couple]');
const threesome = document.querySelector('[src*=threesome]');
const gurner = document.querySelector('[src*=gurner]');
// const baby = document.querySelector('[src*=baby.gif]');

stage.appendChild(trex);
stage.appendChild(dancers);
stage.appendChild(couple);
stage.appendChild(threesome);
stage.appendChild(gurner);



console.log('appended trex');