---
title: "ExecuteAsTemplate"
date: 2026-06-02T09:47:24+01:00
summary: "How to place Hugo template code in leaf bundle resources like CSS and JS files."
cover_image: images/0530-squats.jpg
tags: [Hugo]
---

So I hadn't realised that Hugo template code can be used inside of leaf bundle CSS and JS files.

The process is similar to you do it [with global CSS files](https://learninghugo.netlify.app/posts/adding-template-code-in-css-files/).

Here is the code suggested by Lumo Ai in the `<head>` section. But it has a problem.

```js
{{ with .Resources.GetMatch "page.js" | resources.ExecuteAsTemplate "new.js" . }}
    <script src="{{ .RelPermalink }}" defer></script>
{{ end }}
```

But here is the final code..

```go-html-template
{{ with .Resources.GetMatch "page.js" }}
    {{ with . | resources.ExecuteAsTemplate (add $.Path "/new.js") $ }}
        <script src="{{ .RelPermalink }}" defer></script>
    {{ end }}
{{ end }}
```

Instead of the context being the dot I used the `$` as suggested on the Hugo forums. What's the difference? The dollar sign, `$`, is the global context.

> You can, of course, rebind the context in partial templates just like in normal ones. In this case, the global context, $, refers to the original context passed to the partial, not the main page being rendered (unless that’s what was passed in).
> - [Smashing mag on the context](https://www.smashingmagazine.com/2021/02/context-variables-hugo-static-site-generator/)

Using `resources.ExecuteAsTemplate` means the resource is treated as a global resources and the file, `new.js` here, is placed in the root of project. If you create another leaf bundle the same way it overwrites the first. So I used `.Path` to get the path of the original, `page.js` file and `add` it to the new output file.



Here is my final code for leaf bundles..

```go-html-template
{{ if eq .BundleType "leaf" }}
    {{ with .Resources.GetMatch "style.css" }}
        <style>
            {{ readFile .RelPermalink | safeCSS }}
        </style>
    {{ end }}
    {{ with .Resources.GetMatch "page.js" }}
            {{ with . | resources.ExecuteAsTemplate (add $.Path "/new.js") $ }}
            <script src="{{ .RelPermalink }}" defer></script>
        {{ end }}
    {{ end }}
    
{{ end }}
```