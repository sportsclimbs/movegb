---
title: Home
date: 2023-04-13T11:30:48+01:00
cover_image: images/ez-curls.jpg
buttons:
  - label: 2
    title: the frog
  - label: 3
    title: heading
style: |-
  #pages-here + ol {
    padding: 0;
  }
  li a+i {
    opacity: 0.5;
  }
  main li:has(a) {
    display: flex;
    justify-content: space-between;

    &:hover {
      background: #0004;
      }
  }
  [alt="frog on scooter"] {
    position: fixed;
    bottom: 3em;
    right: -62vw;
    z-index: 300;
    width: 500px;
    filter: brightness(0.9);
    animation: move 20s infinite linear;
    animation-play-state: paused;
    }
    .frog-state {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    color: #fff;
    text-shadow: 0 0 6px #fff;
    }
    .play {
    animation-play-state: running;
    }
    @keyframes move {
      to {
        translate: -800vw 0;
      }
    }
---

![frog on scooter](/img/placidplace-frog-20.gif)

frog has stopped
{.frog-state}

## ToDo's

1. Finish off trying view transitions tutorial.
2. Tidy up the design and typography.
3. Animate page nav
4. Use `color-mix()` CSS function for colour scheme/s.



## History

This site was maybe first used on Vercel when Vercel was still called Zeit Now.

Some pages were added using Coisas, some kind of cloud based headless CMS I believe.

Site updated in April 2023 to test authenticating on GitHub after changing the user.name and user.email.

Complete overhaul in 2026 trying out a better design, navigation, view transtions and more.

## Pages here..

