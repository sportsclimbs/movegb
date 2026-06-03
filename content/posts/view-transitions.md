---
title: "View Transitions"
date: 2026-05-29T10:02:52+01:00
summary: "An intro into view transitions that are now available in all browsers."
cover_image: images/bicycles.jpg
tags: [css]
---

From a [Kevin Powell vid](https://youtu.be/quvE1uu1f_I)

The easiest way to start..

```css
@view-transition {
    navigation: auto;
}
```


Only works on same origin sites.

Then change the timing of the fade:

```css
::view-transition-group(root) {
    animation-duration: 1s;
}
```

## Scaling

For more advanced animations use `keyframes`..

```css
@keyframes scale-in {
    from {
        scale: 0;
    }
}

@keyframes scale-out {
    to {
        scale: 0;
    }
}
```

Then target the *old* snapshot..

```css
::view-transition-old(root) {
    animation-name: scale-out;
}
```

You can change the animations to slide in or out. Simply change..

```css
@keyframes slide-in {
    from {
        translate: 100vw;
    }
}

@keyframes slide-out {
    to {
        translate: -100vw;
    }
}
```

If you only use 1 value in translate then the x axis value is assumed.


You don't have transition the root element. You can name any element..

```css
header {
    view-transition-name: header;
}
```

Then use that in the `transition-group` rule:


```css
::view-transition-group(header) {
    animation-duration: 1s;
}
```

If you want to transition everything then use an asterick..

```css
::view-transition-group(*) {
    animation-duration: 1s;
}
```

## JavaScript

There are 2 new events:

1. A page swap event on the old page
2. A page reveal event on the new page