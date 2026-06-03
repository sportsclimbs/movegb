---
title: "New Fonts 1"
date: 2026-05-30T22:56:43+01:00
draft: false
tags: [typography, google]
summary: Cut and paste of fonts CSS code.
cover_image: images/dance/party-girls.jpg
style: |-
  body {
    background-image: url(/img/b-w-animated.gif);
    background-blend-mode: multiply;
    background-size: 100%;
    }
---

New fonts from Google..

Big Shoulders, Rethink Sans and Crimson Pro 

```css
// <weight>: Use a value from 100 to 900
// <uniquifier>: Use a unique and descriptive class name

.big-shoulders-<uniquifier> {
  font-family: "Big Shoulders", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```

```css
.rethink-sans-<uniquifier> {
  font-family: "Rethink Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```

Crimson Pro
```css
.crimson-pro-<uniquifier> {
  font-family: "Crimson Pro", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```