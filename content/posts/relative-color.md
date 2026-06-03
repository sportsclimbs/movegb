---
title: "Relative Color"
date: 2026-05-29T23:25:36+01:00
summary: "How to use CSS relative colours."
cover_image: images/dumbell-rack.jpg
tags: [css]
---

Don't mix this up with the `color-mix()` function.

The basic syntax is:

```css
:root {
    --base-color: blue;
}
div {
    color: hsl(from var(--base-color) h s l );
}
```

The final `h s l` are placeholders. They currently stand for the values of the base color. But you can replace any of these with percentage values (hue takes angle values).

You can also add opacity values..

```css
div {
    color: hsl(from var(--base-color) h s 35% / 0.25 );
}
```


## oklch

Use oklch rather than `hsl` because it works in a more consistent way.

```css
div {
    color: oklch(from var(--base-color) l c 35% / 0.25 );
}
```

So l c h is lightness, chroma and hue.

## Evolution of color syntax

The new way is don't bother with the `a` in `rgba` or `hsla` and don't use with commas. However if using the fourth alpha value you need to separate it with a forwards slash.

```css
div {
    color: hsl(225deg 50% 27% / 0.5);
}
```

You can also skip the color units too. No need to use `deg` or `%` though the percertage values help VS Code with colours.

VS Code still uses the old `hsla` and comma separated syntax. But with `oklch` it uses:

```css
div {
    color: oklch(75.157% 0.14687 83.99);
}
```

Note also that `rgb` can use percentage values now:

```css
h1 {
    color: rgb(0 16% 81%);
}
```


## Links from K. Powell vid

✅ [The demo](https://codepen.io/kevinpowell/pen/wBMbozY)  
✅ [The pragmatic guide to color, part 1](https://piccalil.li/blog/a-pragmatic-guide-to-modern-css-colours-part-one)  
✅ [The pragmatic guide to color, part 2](https://piccalil.li/blog/a-pragmatic-guide-to-modern-css-colours-part-two  )