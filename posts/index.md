---
layout: page
title: Blog
permalink: /blog/
include_navigation: true
background: /assets/img/idea-board-1280.jpg
---

{% for post in site.posts limit : 5 %}

  <article class="post-preview">
    <a href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}">
      <h2 class="post-title">{{ post.title }}</h2>
      {% if post.subtitle %}
        <h3 class="post-subtitle">{{ post.subtitle }}</h3>
      {% else %}
        <h3 class="post-subtitle">{{ post.excerpt | strip_html | truncatewords: 15 }}</h3>
      {% endif %}
    </a>
    <p class="post-meta">Posted by
      {% if post.author %}
        {{ post.author }}
      {% else %}
        {{ site.author }}
      {% endif %}
      on
      {{ post.date | date: '%B %d, %Y' }}</p>
  </article>

{% endfor %}