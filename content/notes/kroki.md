---
title: "Kroki"
date: 2026-06-06T05:55:11+01:00
summary: "Trying out Kroki"
cover_image: images/dance/uv-faces.jpg
tags: [Hugo]
---

Kroki is a service allowing you to create diagrams from text and embed them as SVGs into markdown. 

In Hugo you need to add a `_markup/render-codeblock-kroki.html` render hook first. You can find this in Joe Mooring's [article](https://www.veriphor.com/articles/diagrams/#source-code) on Kroki.

Then you simply use codefences in your markdown with `kroki` set as the language and an attribute with the system type you wish to use: `{type=d2}`.

Then using that system language you create your diagram.

Then use kroki codefences in your markdown to create diagrams and SVG's.

It can use different coding systems for different results. So first choose what you want:

{{< popover "show cheatsheet" >}}
<img src="/img/kroki-cheatsheet.jpg">
{{< /popover >}}

{{< popover "show white" "images/temp/white.jpg" >}}
{{< /popover >}}

{{< popover "The popover shortcode" "images/temp/barbell-gym-skirt.jpg" >}}
The new popover shortcode takes 2 parameters. The first is for the text on the button. The second (optional) is a link to an image in the assets folder.
{{< /popover >}}


This is kroki using D2

```kroki {type=d2}
# Actors
hans: Hans Niemann

defendants: {
  mc: Magnus Carlsen
  playmagnus: Play Magnus Group
  chesscom: Chess.com
  naka: Hikaru Nakamura

  mc -> playmagnus: Owns majority
  playmagnus <-> chesscom: Merger talks
  chesscom -> naka: Sponsoring
}

# Accusations
hans -> defendants: 'sueing for $100M'

# Offense
defendants.naka -> hans: Accused of cheating on his stream
defendants.mc -> hans: Lost then withdrew with accusations
defendants.chesscom -> hans: 72 page report of cheating
```


## A mind map..

This is kroki using *plantuml*:

```kroki {type=plantuml}
@startmindmap
skinparam monochrome true
+ OS
++ Ubuntu
+++ Linux Mint
+++ Kubuntu
+++ Lubuntu
+++ KDE Neon
++ LMDE
++ SolydXK
++ SteamOS
++ Raspbian
-- Windows 95
-- Windows 98
-- Windows NT
--- Windows 8
--- Windows 10
@endmindmap
```