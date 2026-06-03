---
title: "Urls Parse & shortcodes inline"
linktitle: "Parse & shortcodes"
date: 2026-06-03T06:48:12+01:00
summary: "Want to see what urls.Parse actually does as well as trying out inline shortcodes"
cover_image: images/dance/uv-faces.jpeg
tags: [Hugo, shortcodes]
---

To create a shortcode inline you add it to the markdown page in the usual way but name it end with `.inline`. This prevents Hugo looking in the shortcodes folder and finding nothing there.

<h2>HTML in markdown</h2>

To allow both HTML to be used in markdown files and use shortcodes inline here is my security policy in the hugo.toml file..

```toml
[security]
  allowContent = ['^text/html$', 'markdown']
  enableInlineShortcodes = true
```

There's a whole bunch of stuff in security but the above keeps it simple for my needs.

What does the `^` and `$` do in the above ... ? 

## Below is an inline shortcode..

{{< urls.inline >}}

{{ $url := "https://example.org:123/foo?a=6&b=7#bar" }}

<p>The original url</p>
{{ print $url }}

{{ $parsed := urls.Parse $url }}
<p> and parsed: </p>
{{ print $parsed }}

<P>So exactly the same. But once parsed you can do things with it. See <a href="https://gohugo.io/functions/urls/parse/#article">the docs</a>

{{< /urls.inline >}}

