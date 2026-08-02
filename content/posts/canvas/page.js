const canvas = document.querySelector('#canvas-1');

// canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the context
// the canvas rendering object 2d
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 200, 200);