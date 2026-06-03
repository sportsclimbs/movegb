---
title: "About"
date: 2019-12-01T08:33:13Z
draft: false
summary: "Some notes about this site and it's purpose"
cover_image: "images/lead-climb.jpg"
style: |-
  main p {
    position: relative;
    }
  p:has([alt="squats"]) {
    outline: solid 5px red;
    
    &::before {
      content: 'SQUATS';
      position: absolute;
      inset: 0;
      background: #23eb;
      transition: all 0.5s ease-out;
    }
    &:hover::before {
      inset: 0 0 100% 0;
      background: red;
      }
    }
---

This site was first designed to provide info about the dark patterns and scammy nature of MoveGB

It's now being used to test more Hugo stuff including:

1. How the built site will functions locally
2. Putting on Netlify without a CMS
3. Maybe trying out Forrestry (how much?)
4. Uploading to sportsclimbs

![squats](/img/dumbell-squats.jpg)