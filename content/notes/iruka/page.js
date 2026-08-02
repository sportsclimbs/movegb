console.log('page js iruka loaded');

const body = document.body;
const coverImageDiv = document.querySelector('.cover-image');
const header = document.querySelector('header');
const headerNav = document.querySelector('.header-nav');
const iruka = document.querySelector('#iruka');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');
const btn7 = document.querySelector('#btn-7');

const h1 = document.querySelector('h1');

btn2.addEventListener('click', () => {
    iruka.play();
})

btn3.addEventListener('click', (e) => {
    movingLights();
    e.target.classList.toggle('active-btn');
    const sideLights = document.querySelectorAll('.strobe-light');
    sideLights.forEach((light) => {
        light.classList.toggle('fade');
    })
})


btn4.addEventListener('click', (e) => {
    fadeH1();
    body.classList.toggle('p34');
    headerNav.classList.toggle('scale-y');
    e.target.classList.toggle('active-btn');
    coverImageDiv.classList.toggle('remove-grid-row');

})

btn5.addEventListener('click', (e) => {
    header.classList.toggle('red-strobe');
    e.target.classList.toggle('active-btn');
})

btn6.addEventListener('click', (e) => {
    header.classList.toggle('strobe');
    e.target.classList.toggle('active-btn');
})

// Creates new audio element
{{ $daddy := resources.Get "audio/whos-your-daddy.mp3" }}

btn7.addEventListener('click', () => {
    fadeH1();
    const audioElement = new Audio('{{ $daddy.RelPermalink }}');
    audioElement.controls = true;
    audioElement.play();
})

function fadeH1() {
    h1.classList.toggle('fade');
}

function movingLights() {

    for (let i = 1; i <= 4; i++) {
        const strobeLight = document.createElement('div');
        strobeLight.className = 'strobe-light';
        strobeLight.id = `strobe-${i}`;
        coverImageDiv.appendChild(strobeLight);
        console.log('for loop complete');
    }
}

let speedBox;

function strobeControl () {
    const controlBox = document.createElement('div');
    controlBox.className ='control-box';
    speedBox = document.createElement('span');
    controlBox.appendChild(speedBox);


    
    const control = document.createElement('input');
    control.setAttribute('type', 'range');
    control.setAttribute('step', '0.01');
    control.setAttribute('min', '0.01');
    control.setAttribute('max', '0.50');
    control.setAttribute('value', '0.23');
    control.className = 'strobe-control';
    
    coverImageDiv.appendChild(controlBox);
    controlBox.appendChild(control);
    console.log('everything added');
}

strobeControl();


const strobeSpeed = document.querySelector('.strobe-control');
const root = document.querySelector(':root');

strobeSpeed.addEventListener('input', (e) => {
    root.style.setProperty('--strobe-speed', strobeSpeed.value + 's' );
    speedBox.textContent = Math.round(1 / strobeSpeed.value) ;
    console.log(strobeSpeed.value + 's' );
})