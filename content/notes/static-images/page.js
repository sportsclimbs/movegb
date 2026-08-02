console.log('static images working');

// button bank buttons
const btn2 = document.querySelector('#btn-2');
btn2.addEventListener('click', changeH1);

const btn3 = document.querySelector('#btn-3');
btn3.addEventListener('click', randomNumGen);

const randomNum = document.querySelector('#randomNum');


const randomNumBtn = document.querySelector('#random-num-btn');
const randomizerBtn = document.querySelector('#randomizer-btn');
// const randomNumBtn = document.querySelector('#random-num-btn');

randomNumBtn.addEventListener('click', randomNumGen);

function randomNumGen() {
    const num = Math.ceil(Math.random() * 6 );
    randomNum.textContent =  randomNum.textContent + num + " ";
    console.log('radnum working');
}


function changeH1() {
    const h1 = document.querySelector('h1');

    const texts = [
        'Fuck Your Gods',
        'The Cows The Cows',
        'Mr Grump Nose',
        'Tawa',
        'Mission Accomplished',
        'Static Images',
        'Mangerbey',
        'No brackets in Event Listeners',
        'space required in shortcode declarations',
        '10',
        'Fuck Fascism & Fuck Farage',
        '',
        'Nice One Masson',
        'Handy Borehole',
        'Pocket Wocket',
        'Hilti Soundsystem',
        'Eye Eye',
        'The Masson Chronicles',
    ]

    const chosenText = Math.floor(Math.random() * texts.length );

    console.log(texts[chosenText]);

    h1.textContent = texts[chosenText];
}