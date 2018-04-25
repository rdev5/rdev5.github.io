---
layout: post
title:  "What is a \"Full-Stack\" Developer?"
subtitle: A special kind of tool builder...
date:   2018-04-24
categories: articles development
background: /assets/img/developer-1280.jpg

web_application_requirements:
 - Business logic - What problem am I looking to solve? What purpose will the application serve?
 - Research - What existing tools, if any, can be leveraged to facilitate application development and can they be trusted? How will I adapt the application's architecture to the company's direction? What mistakes can I learn from others so I don't make the same mistakes?
 - Data - How will I collect the information the application requires? Where will this information be stored for later use? How will I ensure the application is compliant with information privacy laws?
 - Infrastructure - How will I deliver the application to end users?
 - Reliability - How will I ensure the application is always responsive? How will I ensure the application is always available in the event of a system failure? What if I need to make an update?
 - Presentation - How should the application represent the company?
 - Security - How will I mitigate the possibility of the application being exploited and used in a malicious manner?
---
A *web application developer* is a special kind of **tool builder**; often one who builds tools for others. These are tools which run right inside your web browser, but are more commonly called <em>web applications</em>.

In order to be useful, however, a web application must consider a rather large "stack" of requirements which will often be left up to the developer to fulfill.
{% for e in page.web_application_requirements %}
- {{ e }}
{% endfor %}