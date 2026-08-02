// JS for the home page

const frog = document.querySelector('[alt="frog on scooter"]');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const headline = document.querySelector('.headline');
const frogState = document.querySelector('.frog-state');

btn2.addEventListener('click', () => {
    frog.classList.toggle('play');
    if (frog.classList.contains('play')) {
        frogState.textContent = 'frog is coming';
    } else {
        frogState.textContent = 'frog has stopped';
    }
})

btn3.addEventListener('click', () => {

    if (headline.textContent.includes('industry')) {
        headline.textContent = 'Light Patterns in the Conservatory';
    } else {
        headline.textContent = 'Dark Patterns in the Bakery';
    }
})