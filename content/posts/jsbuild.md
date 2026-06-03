---
title: "js.Build"
date: 2026-06-03T08:27:50+01:00
summary: "Using Hugo's js.Build with parameters that can be used inside a JS file."
cover_image: images/0530-dude.jpg
tags: [Hugo, js.Build]
---


Rather than use `resources.ExecuteAsTemplate` you can also do this using js.Build.

You set some parameters, probably in frontmatter, like the path to your image. These can then be used inside the JS file


```go-html-template
{{- $imagepath := ... }}
{{- with resources.Get "js/page.js" }}
  {{- with . | js.Build (dict "params" (dict "image" $imagepath)) }}
    <script type="module" src="{{ .RelPermalink }}"></script>
  {{- else }}
    {{- warnf "js.Build failed for %s" . }}
  {{- end }}
{{- else }}
  {{- warnf "JS not found: js/theme-toggle.js" . }}
{{- end }}
```

In the JS file..

```js
import * as params from '@params';

const imagepath = params.image;

.... your code ...
```