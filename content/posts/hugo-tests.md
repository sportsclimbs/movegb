---
title: "Hugo Test"
date: 2026-05-29T09:40:26+01:00
summary: "Trying out Hugo stuff"
tags: [hugo]
cover_image: images/fitball.webp
style: |-
  .test-list li {
    margin-bottom: 1em;
    font-family: monospace;
  }
  b {
    color: white;
    }
---

## .page .Page and .Pages

Well a simple `{{ .page }}` fails.

`.Page` gives the path of the markdown file: THE CURRENT PAGE

`.Pages` is a collection of page objects in the current directory.

Used `.Page.Parent.Pages` below.

{{< hugo-tests >}}

