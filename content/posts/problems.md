---
title: "Problems"
date: 2026-05-28T17:21:00+01:00
summary: "Problems I've had with site and how I fixed them"
cover_image: images/note-face.jpg
tags: [hugo, css]
---

1. The image in the header was overflowing the container and not behaving.
   **solution** `overflow-clip`
   Also I had `object-fit: center` a non-value.
2. Can't get bg of ::before in front of `img`.
   **solution**: Can't add pseudo elements to `<img>` elements.
3. About page wouldn't show up.
   **solution:** `draft: true` duh!
4. Multiple menu items showing up.
   **solution:** Frontmatter menu with same name, `main`. 
5. The image, or div, rides up as the window narrows.
