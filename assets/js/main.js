console.log('main.js is working');

const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');

const h1 = document.querySelector('h1');

const coverImage= document.querySelector('.cover-image')

btn1.addEventListener('click', () => {
    coverImage.classList.toggle('open-screen');
    h1.classList.toggle('shadow');
})
