---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Matt Borja
description: Enterprise Web &amp; DevOps
layout: home
background: /assets/img/developer-1280.jpg

trades:
- name: Enterprise Web Application Development
  skills:
    - ASP.NET MVC (C#)
    - Securing Web Application Technologies
    - Documentation &mdash; Markdown
    - Configuration Management &mdash; Private NuGet packages
    - Continuous Integration &amp; Delivery &mdash; GitHub, Team Services, TeamCity
    - Compliance - Access Management, Application Lifecycle Management

- name: Infrastructure
  skills:
    - High Availability &mdash; HAProxy, Barracuda
    - Clustering &mdash; Persistence, Distributed Caching (Couchbase)
    - Cloud &mdash; Rackspace, Digital Ocean
    - Single Sign-On &mdash; CAS, Shibboleth, ADFS, SAML2, OAuth, MFA

- name: DevOps
  skills:
    - Puppet Enterprise &mdash; Code Manager, RBAC
    - Application Orchestration &mdash; SSL, RSA, Isolation, Virtual Hosts, Shares
    - Application Infrastructure &mdash; Windows Server (IIS), CentOS (Tomcat)
    - Core Infrastructure &mdash; DNS, Firewall, SSH, Users, Groups
    
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