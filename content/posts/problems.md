---
title: "Hero & design problems"
linktitle: design problems
date: 2026-05-28T17:21:00+01:00
lastmod: 2026-05-29T09:27:48
summary: "Problems I've had with site and how I fixed them"
cover_image: images/note-face.jpg
tags: [hugo, css]
---

1. The image in the header was overflowing the container and not behaving.  
   **solution** `overflow: clip`  
   Also I had `object-fit: center` a non-value. Use `object-fit: cover`.
2. Can't get bg of ::before in front of `img`.  
   **solution**: Can't add pseudo elements to `<img>` elements.  
3. About page wouldn't show up.  
   **solution:** `draft: true` duh!
4. Multiple menu items showing up.  
   **solution:** There was frontmatter menu items with same name, `main`. Deleted.
5. The image, or div, rides up as the window narrows.  
   **solution:** probably down to image dimensions. Should 100% for *both* width and height.
6. Will use *item* with `.Render` on the `section.html` template.
   NOT RESOLVED YET
7. Images in static folder cause Hugo to fail when using css file in `/assets/` with `css.Build`. 
   **solution:** place image file in the `assets/` folder too. Use a url like: `assets/images/image.png`. 
8. When top image of two is set to 0 opacity the lower one also disappears. But when set to `display: none` the second one shows as expected.
   **solution:** see [stacking context problem](/posts/stacking-context-problem/)

The main image is tricky because it needs to fit all different shapes from wide landscape to narrow portrait.

## Cover image

YOU NEED A SPECIAL IMAGE TO WORK FOR ALL FORMATS. Can be cropped anywhere.

To cover the allocated space it needs 100% height and width.

```css
img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: /* depends on the image!! */
}
```
Whilst the object position of the image depends on the image in a realistic scenario only the home page would have a large image like this.

### mix-blend-mode

The overlay for the image is from a pseudo element with a background colour. I hadn't thought, at first, to use `mix-blend-mode` on this element. Setting it to `multiply` resulted in much clearer images and a better contrast with the text overlaying them.

## Grid system

Using subgrid for columns seems like a good idea throughout the design. But maybe not for rows. The initial rows help keep the footer down on low content pages. Something like

```html
top nav # optional
header
main
footer
```

## Trying to design for too many scenarios

So trying to design for the hero on the front page and then a normal header on every other is a bad idea. At first it seems easy, less code to write. But then issues occur for things that work with hero and not the normal header.

There's a reason Hugo has a `home.html` template.

## Design phases

There seem to be 2 distinct phases when desiging in the browser:

1. Sorting out the layout
2. Fine tuning colours, fonts, widgets, images etc..

It's worth keeping this in mind for future projects and being aware of which phase you're in.