---
title: "Static Images"
date: 2026-06-04T08:07:38+01:00
summary: "The images from the static folder"
cover_image: images/temp/park.jpg
tags: [images]
buttons:
  - label: What!!
    title: the fuck?
  - label: random
    title: make a random number
---

<button class="btn" id="random-num-btn">Generate a number from 1 to 6</button>
<p id="randomNum"></p>

<div class="button-bank">
    <button class="btn" id="h1-btn">Press first</button>
    <button class="btn" id="randomizer-btn">Press</button>
    <button class="btn" id="random-2-btn">Press</button>
    <button class="btn" id="random-3-btn">Press</button>
    <button class="btn" id="random-4-btn">Press</button>
    <button class="btn" id="random-5-btn">Press</button>
</div>


## What have we learned?

1. When declaring shortcodes the gaps at the end and beginning are key.
2. No brackets for a function in an event listener.
   `randomNumBtn.addEventListener('click', randomNumGen);`
3. Use `Math.ceil` when generating from 1 to x AND `Math.floor` for 0 to x.

## Audio

<audio controls autoplay>
	<source src=
"https://media.geeksforgeeks.org/wp-content/uploads/20241009180552641558/sample-12s.mp3" type="audio/mpeg">
</audio>


{{< static.inline >}}
<p>heelow static </p>

{{ $imgList := readDir "static/img" }}

{{ range $imgList }}
<p>
    {{ .Name }}<br>
    <img src="/img/{{ .Name }}" alt="{{ .Name }}">
</p>
{{ end }}

{{< /static.inline >}}