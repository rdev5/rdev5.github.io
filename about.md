---
layout: page
title: About
description: Matt Borja, Full Stack Web Application Developer (since 2004)
permalink: /about/
include_navigation: true
background: /assets/img/palm-trees-1280.jpg

web_application_requirements:
 - Business logic - What problem am I looking to solve? What purpose will the application serve?
 - Research - What existing tools, if any, can be leveraged to facilitate application development and can they be trusted? How will I adapt the application's architecture to the company's direction? What mistakes can I learn from others so I don't make the same mistakes?
 - Data - How will I collect the information the application requires? Where will this information be stored for later use? How will I ensure the application is compliant with information privacy laws?
 - Infrastructure - How will I deliver the application to end users?
 - Reliability - How will I ensure the application is always responsive? How will I ensure the application is always available in the event of a system failure? What if I need to make an update?
 - Presentation - How should the application represent the company?
 - Security - How will I mitigate the possibility of the application being exploited and used in a malicious manner?
---
<h3>What is a "Full-Stack" Web Application Developer anyways?</h3>
<p>A <em>web application developer</em> is a special kind of <strong>tool builder</strong>; often one who builds tools for others. These are tools which run right inside your web browser, but are more commonly called <em>web applications</em>.</p>
<p>In order to be useful, however, a web application must consider a rather large "stack" of requirements which will often be left up to the developer to fulfill:</p>
<ul>
{% for e in page.web_application_requirements %}
  <li>{{ e }}</li>
{% endfor %}
</ul>
<p>Any developer who dares to summit the full stack of these responsibilities can only be regarded as much.</p>