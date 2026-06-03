console.log('Tunes page.js is loaded and working');

// const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');

const h1 = document.querySelector('h1');

const elotest = document.querySelector('#elotest');
const iframe = document.querySelector('iframe');

// soundcloudBtn.style.scale = '2'

elotest.addEventListener('click', () => {
    alert('you clicked first iframe');
})

const grandparent = document.querySelector('#if-1');
grandparent.addEventListener('click', e => {
    console.log('iframe 1');
}, {capture: true })


// const coverImage= document.querySelector('.cover-image')
// btn1.addEventListener('click', () => {
//     coverImage.classList.toggle('open-screen');
//     console.log('btn 1 workiing');
// })



btn2.addEventListener('click', () => {
    const scrollWatcher = document.createElement('div');
    scrollWatcher.className = 'scroll-watcher';
    console.log('btn 2 workiing');
    document.body.appendChild(scrollWatcher);
})

btn3.addEventListener('click', () => {
    console.log('btn 3 works');
    // document.body.style.setProperty('--bg', 'green');
    h1.classList.toggle('grow');
})

btn4.addEventListener('click', () => {
    document.body.classList.toggle('recolour');
})
