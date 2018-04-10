---
layout: page
title: One-Time Pad
description: Custom Tools
permalink: /tools/one-time-pad
background: /assets/img/tools-1280.jpg
---
<p><strong>Requirements:</strong></p>
<ul>
  <li>Encryption key must be truly random</li>
  <li>Encryption key must be at least the same length as the plaintext</li>
  <li>Encryption key must never be re-used</li>
</ul>

{% highlight javascript %}
// Converts string to Uint8Array
function stringToBytes(s) {
  var bytes = new Uint8Array(s.length);

  for (var i = 0; i < s.length; i++) {
    bytes[i] = s[i].charCodeAt(0);
  }

  return bytes;
}

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

// Returns Uint8Array of ciphertext
function otp(key, plaintext) {
  if (typeof key === 'string')
    key = stringToBytes(key);

  if (typeof plaintext === 'string')
    plaintext = stringToBytes(plaintext);

  if (key.length < plaintext.length)
    throw "Key must be at least the same length as the plaintext"

  var bytes = new Uint8Array(plaintext.length);
  var ciphertext = '';
  for (var i = 0; i < plaintext.length; i++) {
    bytes[i] = key[i] ^ plaintext[i];
  }

  return bytes;
}

// Usage
var plaintext = 'This is sensitive information';
var key = secureRandom(plaintext.length);

var ciphertext = otp(key, plaintext);
var decrypted = otp(key, ciphertext);

console.log('plaintext:', plaintext);
console.log('key:', btoa(bytesToString(key)));
console.log('ciphertext:', btoa(bytesToString(ciphertext)));
console.log('decrypted:', bytesToString(decrypted));
{% endhighlight %}