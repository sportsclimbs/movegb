const btn2 = document.querySelector('#btn-2');
btn2.setAttribute('popovertarget', 'audio-box')

const audioBox = document.querySelector('#audio-box');
const canvas = document.querySelector('#canvas-1');

const ctx = canvas.getContext('2d');

let audioSource;
let analyser;

audioBox.addEventListener('click', () => {
    const audio1 = document.querySelector('#audio-1');
    audio1.src = '/sounds/ant-hill-gang.mp3';
    const audioContext = new AudioContext(); 
    audio1.play();

    audioSource = audioContext.createMediaElementSource(audio1);
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 64; // can be any multiple of 32 inc 32
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = canvas.width / bufferLength;
    let barHeight;
    let x;

    function animate() {
        x = 0; 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        
        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            ctx.fillStyle = 'white';
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth;
        }

        requestAnimationFrame(animate);
    }
    animate();
})





// For the first 2 buttons below

const audioCtx = new AudioContext();

const playBtn = document.querySelector('#play');
const playBtn2 = document.querySelector('#play-2');

const antHill = '/sounds/ant-hill-gang.mp3';

{{ $fear := resources.Get "audio/our-deepest-fear.mp3" }}

const deepestFear = "{{ $fear.RelPermalink }}";

let count = 0;

playBtn.addEventListener('click', () => {
    if ( count === 0 ) {
        audioEl = new Audio();
        audioEl.src = '/sounds/ant-hill-gang.mp3';
        audioEl.play();
        playBtn.textContent = 'pause';
        console.log('created audioEl');
    } else if (audioEl.paused) {

        audioEl.play();

        audioEl.addEventListener('playing', () => { 
            console.log('audio is playing');
            playBtn.textContent = 'pause';
        });
        audioEl.addEventListener('ended', () => { 
            console.log('audio has stopped');
            playBtn.textContent = 'play';
        });
        
    } else {
        audioEl.pause();
        playBtn.textContent = 'play';
    }
    count++;
    console.log(count);
})


// BUTTON 2

playBtn2.addEventListener('click', playSound );
const main = document.querySelector('main');

function playSound() {
    const oscillator = audioCtx.createOscillator();  // new audio node
    oscillator.connect(audioCtx.destination);  // direct to speakers
    oscillator.type = 'triangle'; // could be sine, square, sawtooth or  triangle..
    oscillator.start(); // play the sound.

    setTimeout( function() {
        oscillator.stop();
    }, 1000)
}