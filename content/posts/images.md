---
title: "Images"
date: 2026-05-29T10:15:15+01:00
summary: "All images in the assets folder"
tags: [images]
cover_image: images/bicep.jpg
style: |-
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    }
---

{{< readdir "/assets/images" >}}

{{< images >}}