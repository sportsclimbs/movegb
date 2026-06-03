---
title: "Gradients 2026"
date: 2026-05-30T10:28:02+01:00
summary: "Some new stuff relating to CSS gradients."
cover_image: images/0530-bong.jpg
buttons: 
  - label: ratite
    title: Release the ratite
tags: [CSS]
---

![ratite](/img/placidplace-ostrich-60.gif)

Some thoughts culled by an [excellent article](https://piccalil.li/blog/a-pragmatic-guide-to-modern-css-colours-part-one/) by Kevin Powell on Piccalil.li.

## Colour spaces

<div class="gradient srgb">srgb</div>
<div class="gradient hsl">hsl</div>
<div class="gradient hwb">hwb</div>
<div class="gradient lch">lch</div>
<div class="gradient oklch">oklch</div>
<div class="gradient oklab">oklab</div>


## in longer hue

Here are two gradients that both go from `red` to `red`. 

<div class="gradient default"></div>

<div class="gradient long-way"></div>

The second one uses `in longer hue`. It takes the long route to go around the colour wheel from red all the way back to red.

```css
.gradient.long-way {
  background: linear-gradient(
    in hsl longer hue 90deg,
    var(--color-1),
    var(--color-2)
  );
}
```

## Colour wheel

Here's a simple colour wheel using `longer hue` and the `hsl` colour space with a `conic-gradient`. 


<div class="wheel hsl"></div>

This doesn't work in all colour spaces.

Here's `srgb` version..

<div class="wheel srgb"></div>

In `lch`.

<div class="wheel lch"></div>

.. and `oklch` the colours are more muddy and blue and yellow hardly show up at all.

<div class="wheel oklch"></div>

## decreasing and increasing.

Using the `decreasing` keyword instead of `longer`. This goes from `red` to `magenta` in `hsl`.

```css
.wheel.dec {
    background-image: 
    conic-gradient(in hsl decreasing hue, red, magenta);
}
```

<div class="wheel dec"></div>

And this uses `increasing` from `red` to `magenta`.

<div class="wheel inc"></div>
