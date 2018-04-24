---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Matt Borja
description: Full Stack Web Application Developer
layout: home
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

web_application_requirements:
 - Business logic - What problem am I looking to solve? What purpose will the application serve?
 - Research - What existing tools, if any, can be leveraged to facilitate application development and can they be trusted? How will I adapt the application's architecture to the company's direction? What mistakes can I learn from others so I don't make the same mistakes?
 - Data - How will I collect the information the application requires? Where will this information be stored for later use? How will I ensure the application is compliant with information privacy laws?
 - Infrastructure - How will I deliver the application to end users?
 - Reliability - How will I ensure the application is always responsive? How will I ensure the application is always available in the event of a system failure? What if I need to make an update?
 - Presentation - How should the application represent the company?
 - Security - How will I mitigate the possibility of the application being exploited and used in a malicious manner?
---

{% for t in page.trades %}
## {{ t.name }}
{% for s in t.skills %}
- {{ s }}
{% endfor %}
{% endfor %}

## What is a "Full-Stack" Web Application Developer anyways?
A *web application developer* is a special kind of **tool builder**; often one who builds tools for others. These are tools which run right inside your web browser, but are more commonly called <em>web applications</em>.

In order to be useful, however, a web application must consider a rather large "stack" of requirements which will often be left up to the developer to fulfill:
{% for e in page.web_application_requirements %}
- {{ e }}
{% endfor %}
