console.log('main.js is working');

const btn1 = document.querySelector('#btn-1');


const h1 = document.querySelector('h1');

const coverImage= document.querySelector('.cover-image')

btn1.addEventListener('click', () => {
    coverImage.classList.toggle('open-screen');
    h1.classList.toggle('shadow');
    btn1.classList.toggle('active-btn');
    console.log('pressed');
})
