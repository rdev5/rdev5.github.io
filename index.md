---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Matt Borja
description: Enterprise Web &amp; DevOps
layout: page
background: /assets/img/developer-1280.jpg

trades:
- name: Enterprise Web Application Development
  skills:
    - ASP.NET MVC (C#)
    - Securing Web Application Technologies
    - Third-Party Integration (REST API)
    - Clustering (Persistence, Distributed Caching)
    - Single Sign-On (CAS, Shibboleth, ADFS, SAML2, OAuth)
    - Configuration Management

- name: DevOps
  skills:
    - Continuous Integration &amp; Delivery
    - Puppet Enterprise (Windows Server 2016, CentOS 7.x)
    - Core Infrastructure
    - Application Infrastructure &amp; Orchestration

---

{% for t in page.trades %}
  <h2>{{ t.name }}</h2>
  <ul>
    {% for s in t.skills %}
    <li>{{ s }}</li>
    {% endfor %}
  </ul>
{% endfor %}

<p>For inquiries, please use the <a href="{{ "/contact" | relative_url }}">Contact</a> page.</p>