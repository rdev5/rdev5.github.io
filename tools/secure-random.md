---
layout: page
title: Secure Random
description: Custom Tools
permalink: /tools/secure-random
background: /assets/img/tools-1280.jpg
---
<p>This secure random function is written purely in Javascript and thus can run locally within your browser without an Internet connection. It is based on the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto"><code>Window.crypto</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"><code>Crypto.getRandomValues</code></a> Web APIs which are said to be "suitable for cryptographic usages" as a psuedo-random number generator (PRNG) seeded with sufficient entropy.</p>

{% highlight javascript %}
// Converts Uint8Array to string
function bytesToString(bytes) {
  var s = '';

  for (var i = 0; i < bytes.length; i++) {
    s += String.fromCharCode(bytes[i]);
  }

  return s;
}

// Returns Uint8Array of cryptographically strong random sequence
function secureRandom(size) {
  var crypto = window.crypto || window.msCrypto;
  if (crypto === undefined)
    throw "No crypto service available";

  var bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);

  return bytes;
}

// Usage
alert('New password: ' + btoa(bytesToString(secureRandom(16))));
{% endhighlight %}

<p>Then test the password at <a href="https://howsecureismypassword.net/">How Secure Is My Password?</a></p>