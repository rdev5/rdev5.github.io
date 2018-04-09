---
layout: page
title: Contact
permalink: /contact/
background: /assets/img/contact-1280.jpg
---
<h2>Contact</h2>
{% if site.email %}
<li class="list-inline-item">
  <a href="mailto:{{ site.email }}">
    <span class="fa-stack fa-lg">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-email fa-stack-1x fa-inverse"></i>
    </span>

    Email ({{ site.email }})
  </a>
</li>
{% endif %}

{% if site.linkedin_username %}
<li class="list-inline-item">
  <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}">
    <span class="fa-stack fa-lg">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
    </span>

    LinkedIn ({{ site.linkedin_username }})
  </a>
</li>
{% endif %}

{% if site.github_username %}
<li class="list-inline-item">
  <a href="https://github.com/{{ site.github_username }}">
    <span class="fa-stack fa-lg">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-github fa-stack-1x fa-inverse"></i>
    </span>

    GitHub ({{ site.github_username }})
  </a>
</li>
{% endif %}

{% comment %}
<form name="sentMessage" id="contactForm" novalidate>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls">
      <label>Name</label>
      <input type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name.">
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls">
      <label>Email Address</label>
      <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address.">
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <div class="control-group">
    <div class="form-group col-xs-12 floating-label-form-group controls">
      <label>Phone Number</label>
      <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number.">
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls">
      <label>Message</label>
      <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
      <p class="help-block text-danger"></p>
    </div>
  </div>
  <br>
  <div id="success"></div>
  <div class="form-group">
    <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
  </div>
</form>
{% endcomment %}