---
layout: page
title: Tools
description: Custom Tools
permalink: /tools/
include_navigation: true
order: 3
background: /assets/img/tools-1280.jpg

tools:
  - name: King James Bible (Pure Cambridge Edition)
    url: /bible/
  - name: A Browser-Based Game
    url: /game/
  - name: Secure Random
    url: /tools/secure-random
  - name: Psuedo-HSM
    url: /tools/psuedo-hsm
  - name: One-Time Pad
    url: /tools/one-time-pad
---

<h3>Tools</h3>
<p>All of the following tools are written in pure jQuery or Javascript.</p>
<ul>
{% for e in page.tools %}
  <li><a href="{{ e.url }}">{{ e.name }}</a></li>
{% endfor %}
</ul>