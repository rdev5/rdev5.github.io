---
layout: page
title: Tools
description: Custom Tools
permalink: /tools/
background: /assets/img/tools-1280.jpg
---
<h3>Password Generator</h3>
<p>This password generator is written purely in Javascript and thus can run locally within your browser without an Internet connection. It is based on the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto"><code>Window.crypto</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"><code>Crypto.getRandomValues</code></a> Web APIs which are said to be "suitable for cryptographic usages" as a psuedo-random number generator (PRNG) seeded with sufficient entropy.</p>
<p>Note: The value returned by this function is a Base64-encoded string of the actual bytes of <code>size</code> length.</p>
````
function generatePassword(size) {
  var crypto = window.crypto || window.msCrypto;
  if (crypto === undefined)
    throw "No crypto service available";

  var bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);

  var s = '';
  for (var i = 0; i < bytes.length; i++) {
    s += String.fromCharCode(bytes[i]);
  }

  return btoa(s);
}
````
<p>
  <button type="button" class="btn btn-primary" onclick="document.getElementById('generatePassword').innerText=(function(r){var o=window.crypto||window.msCrypto;if(void 0===o)throw'No crypto service available';var a=new Uint8Array(r);o.getRandomValues(a);for(var e='',t=0;t<a.length;t++)e+=String.fromCharCode(a[t]);return btoa(e)})(32);">Try It:</button>
  &nbsp;&nbsp;<code id="generatePassword"></code>
</p>