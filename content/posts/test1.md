---
title: "Test 1"
date: 2019-12-01T13:42:18Z
summary: "New syntax highlighting in Hugo 0.60"
tags: ["testing"]
cover_image: "https://picsum.photos/id/851/2160/550"
---

This is test page 1 showing some HTML code.

Syntax highlighting changed in Hugo in version 0.60. See the [docs](https://gohugo.io/content-management/syntax-highlighting/).

```go-html-template {linenos=table,hl_lines=[5,6]}
<body>

    <div class="container">

    {{ block "main" . }}
    
    {{ end }}

</div>
</body>
```

And some CSS...

```css {linenos=table}
pre,
code {
    font-family: 'mononokiRegular';
    font-weight: normal;
    font-style: normal;
    font-size: .9em;
    line-height: 1.2;
 }
 
```

Font used here is [monokai](https://fontlibrary.org/en/font/mononoki)