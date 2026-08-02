---
title: "Dance Images"
date: 2026-06-23T10:30:42+01:00
summary: "Getting a list of image by their file names"
cover_image: images/dance/stranger.jpg
tags: [Hugo, images, CSS]
style: |-
  ol.button-list {
    column-count: 2;
    column-gap: 2em;
  }
  li:has(button) {
    margin-bottom: 0.75em;
  }
  .thumb {
    border-radius: 0.5em;
    box-shadow: 2px 2px 7px #0007;
    display: none;
    position: fixed;
    z-index: 100;
    left: 1em;
    scale: 0;
    transform-origin: left center;
    transition-behavior: allow-discrete;
    transition: scale 0.14s ease-in;
    position-anchor: --this-btn;
    position-area: right center;
    }
  .btn:hover {
    anchor-name: --this-btn;
  }  
  .btn:hover + .thumb {
    display: block;
    scale: 1;
    @starting-style {
        scale: 0;
    }
   }
   .full-img {
     border-radius: 2em;
     background: transparent;
     padding: 0;
     max-width: 94vw;
     box-shadow: 5px 5px 12px #0009;
   }
---


Using the new `strings.ReplacePairs` function to remove the path and file extension (`.jpg`). Could be useful for generating class or ID names from the image.

NB. This works slightly differently from the `replace` function. The first argument of `replace` is the actual string you want to work on. With `strings.ReplacePairs` there is only the section to be replaced an that which replaces it.

```go-html-template
{{range resources.Match "images/dance/*.jpg" }}
    {{  .Name | strings.ReplacePairs "/images/dance/" "" ".jpg" "" }}<br>
{{ end }}
```

{{< dance-images.inline >}}
<ol class="btn-list">
{{range resources.Match "images/dance/*.jpg" }}
    {{ $imgID :=  .Name | strings.ReplacePairs "/images/dance/" "" ".jpg" "" }}
    <li>
        <button popovertarget="{{ $imgID }}" class="btn">{{ $imgID }}</button>
        <img src='{{ (.Resize "400x").RelPermalink }}' class='thumb'>
    </li>
    <div popover id="{{ $imgID }}" class="full-img">
        <img src="{{ .RelPermalink }}" lazy>
    </div>
{{ end }}
</ol>

{{< /dance-images.inline >}}

This also uses the new `anchor-positioning` api to anchor each thumbnail image to its button.

```css
.thumb {
    position-anchor: --this-btn;
    position-area: right center;
}
.btn:hover {
    anchor-name: --this-btn;
}
```