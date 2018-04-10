---
layout: page
title: Tools
description: Custom Tools
permalink: /tools/
background: /assets/img/tools-1280.jpg

tools:
  - name: Secure Random
    url: /tools/secure-random
  - name: Psuedo-HSM
    url: /tools/psuedo-hsm
  - name: One-Time Pad
    url: /tools/one-time-pad
---

<h3>Tools</h3>
<ul>
{% for e in page.tools %}
  <li><a href="{{ e.url }}">{{ e.name }}</a></li>
{% endfor %}
</ul>