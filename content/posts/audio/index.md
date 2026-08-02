---
title: "The HTML audio tag"
date: 2026-06-09T06:22:20+01:00
summary: "Using the HTML audio tag from basics to using it with JS."
cover_image: images/dance/fractal-face.jpg
tags: [HTML, Javascript, audio, web audio api, canvas]
buttons:
  - label: 2
    title: second button
---


<div id="audio-box" popover>
  <canvas id="canvas-1"></canvas>
  <audio controls id="audio-1"></audio>
</div>

<button class="btn" popovertarget="audio-box">Launch canvas</button>

Basic syntax is:

```html
<audio src="path/to/file.mp3" controls>
</audio>
```

The `controls` attribute doesn't just add the controls. It also means the element will be visible on the page.

## formats

It can play 3 formats: `mp3`, `wav` and `ogg`. The `<source>` element allows fallback options:

```html
<audio controls>
  <source src="path/to/file.ogg">
  <source src="path/to/file.mp3">
</audio>
```

## JS

See W3 Schools [full list](https://www.w3schools.com/jsref/dom_obj_audio.asp) of properties and methods.

<button class="btn" id="play">Play</button>
<button class="btn" id="play-2">Play</button>

```js
const audioPlayer = document.querySelector('audio');
// play

audioPlayer.play();
```

You can create a new HTML `<audio>` element with the built in Audio constructor in JS.

```js
const audioEl = new Audio();
```

This is a quick way to add and `<audio>` element especially if it doesn't need to be placed on the screen anywhere. However remember if you want to see it you need to add the `controls` attribute. This can be done as a property of the audio element.

```js
audioEl.controls = true;
```

Then you'll need to add it to the DOM using `appendChild` or similar.

### Adding a sound file

There are a couple of ways to add a sound file to the above.

```js
// add to the brackets when you create the audio element..
const audioEl = new Audio('sound.mp3');
```

Use the src property of the audio object

```js
audioEl.src = 'sound.mp3';
```