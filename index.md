---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Matt Borja
description: Full Stack Web Application Developer
layout: wide
background: /assets/img/developer-1280.jpg

trades:
- name: Enterprise Web Application Development
  skills:
    - ASP.NET MVC (C#), HTML5, Javascript
    - Securing Web Application Technologies
    - Documentation &mdash; Markdown
    - Configuration Management &mdash; Private NuGet packages
    - Continuous Integration &amp; Delivery &mdash; GitHub, Team Services, TeamCity
    - Compliance - Access Management, Application Lifecycle Management

- name: Infrastructure
  skills:
    - High Availability &mdash; HAProxy, NGINX, Barracuda ADC, Snapt ADC
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

<div class="container" markdown="1">
{% for t in page.trades %}
## {{ t.name }}
{% for s in t.skills %}
- {{ s }}
{% endfor %}
{% endfor %}
</div>

<section class="feature">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <i class="far fa-question-circle" style="font-size: 200px;"></i>
      </div>
      <div class="col-md-9">
<div markdown="1">
## What is a "Full-Stack" Web Application Developer anyways?
A *web application developer* is a special kind of **tool builder**; often one who builds tools for others. These are tools which run right inside your web browser, but are more commonly called <em>web applications</em>.

In order to be useful, however, a web application must consider a rather large "stack" of requirements which will often be left up to the developer to fulfill.

[Learn more...]({% post_url 2018-04-24-about-full-stack-development %})
</div>
      </div>
    </div>
  </div>
</section>
