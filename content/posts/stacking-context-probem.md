---
title: "Stacking Context Problem"
date: 2026-06-02T21:49:00+01:00
summary: "A strange problem and resolution by Lumo Ai"
cover_image: images/elysium.png
tags: [CSS]
---


**About some CSS: within a grid container I have a div which contains 2 images, one on top of the other. If I use display: none on the top one it disappears and I see the lower image as expected. However if I use opacity: 0 instead of display none both images disappear. This added to a style tag in the top image through the browser dev tools so should only affect the top image. I want to use opacity for a slow fade effect.**


This behavior is almost certainly caused by how CSS Grid handles empty cells and the stacking context of your images.

Here is the likely cause and the solution:

## The Problem: Grid Cell Collapse

When you use display: none on the top image, the browser removes it from the layout entirely. The grid cell it occupied effectively becomes empty, allowing the second image (which might be in the same cell or overlapping via grid-area) to become visible.

However, when you use `opacity: 0`, the element still exists in the layout. It takes up space, but it is invisible.

- **Scenario A:** If both images are in the same grid cell, the top image (now invisible) is still physically occupying that cell. Depending on your z-index or default stacking order, the invisible top image might be "covering" the bottom one, or the browser might be treating the cell as "occupied" and not rendering the bottom one correctly if they aren't explicitly layered.
- **Scenario B** (Most Likely): If the images are stacked using position: absolute inside the grid item, or if the grid container itself has overflow: hidden, setting opacity: 0 on the parent or a wrapper might be affecting the rendering context.

But the most common reason for "both disappear" when using opacity in a grid is Stacking Context. If the top image has `opacity: 0`, it creates a new stacking context. If the bottom image is positioned behind it in the DOM or lacks a higher z-index, it might be visually obscured by the transparent layer, or the browser is rendering the transparent layer over the bottom one.

## The Solution: Use visibility: hidden or Adjust Stacking

Since you want a fade effect, opacity is the correct property, but you need to ensure the bottom image is rendered on top of the invisible top image.

### Option 1: Adjust Z-Index (Recommended)

Ensure the bottom image has a higher z-index than the top image. Even if the top image is transparent, it might be blocking the bottom one if the bottom one is in a lower stacking context.

.top-image {
  opacity: 0; /* This keeps the space but makes it invisible */
  z-index: 1; /* Lower layer */
}

.bottom-image {
  z-index: 2; /* Higher layer, sits on top of the transparent top image */
}

### Option 2: Use visibility: hidden (No Fade)

If you don't strictly need the fade animation right now and just want the behavior of display: none but with the ability to animate later, visibility: hidden is a middle ground. It hides the element but keeps the space. However, you cannot animate visibility easily for a fade.

### Option 3: The "Fade" Animation Approach

If you want a smooth fade, you usually animate the opacity transition. The issue you are seeing suggests the bottom image is being covered.

Try this structure:

```html
<div class="grid-container">
  <div class="image-wrapper">
    <img src="top.jpg" class="top-img" />
    <img src="bottom.jpg" class="bottom-img" />
  </div>
</div>
```

```css
.image-wrapper {
  position: relative; /* Establishes a stacking context */
  width: 100%;
  height: 100%;
}

.top-img, .bottom-img {
  position: absolute; /* Stack them exactly on top of each other */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* The fix: Ensure bottom is on top */
.bottom-img {
  z-index: 2;
}

.top-img {
  z-index: 1;
  opacity: 0; /* Now this works because bottom is above it */
  transition: opacity 0.5s ease; /* Add your fade effect here */
}
```

## Why did display: none work?

`display: none` removes the element from the document flow. The grid cell becomes empty, and the browser naturally renders the next available content (the bottom image) in that space.

## Why did opacity: 0 fail?

`opacity: 0` keeps the element in the flow. If the bottom image was not explicitly placed above the top image in the stacking order (z-index), the invisible top image was acting as a "ghost" layer covering the bottom one, or the grid layout was calculating the cell as "full" and hiding the overflow/overlap in a way that made both seem gone.

Try adding `z-index: 2` to your bottom image. That should solve it immediately.