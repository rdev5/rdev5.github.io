---
layout: page
title: Matt Borja
description: Web Application Developer
permalink: /about/
background: /assets/img/palm-trees-1280.jpg

github_background:
  - >-
    The name rdev5 originated from my earlier days learning Ruby on Rails; it is
    short for "Ruby Developer." My tooling has since expanded into numerous other areas,
    including enterprise web application development and DevOps.
  - The number (5) has no real significance that I recall other than achieving uniqueness.
  - .github.io is a free domain for hosting this developer site.

hobbies:
  - Security &amp; Cryptography
  - Electrical Engineering
  - Home Improvement
---
<p style="text-align: center;">&mdash; This page is under construction &mdash;</p>
<h3>The history behind <ins>{{ site.github_username }}</ins><small class="text-muted">.github.io</small></h3>

{% for line in page.github_background %}
  <p>{{ line }}</p>
{% endfor %}

<h3>Hobbies</h3>
<ul>
  {% for e in page.hobbies %}
    <li>{{ e }}</li>
  {% endfor %}
</ul>