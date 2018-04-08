---
layout: page
title: Tools
description: Custom Tools
permalink: /tools/
background: /assets/img/tools-1280.jpg
---
<h3>String Helpers</h3>
<p>A collection of re-usable helper functions for the snippets which follow.</p>
<script class="snippet">
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
</script>

<h3>Secure Random</h3>
<p>As with most of the examples on this page, this secure random function is written purely in Javascript and thus can run locally within your browser without an Internet connection. It is based on the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto"><code>Window.crypto</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"><code>Crypto.getRandomValues</code></a> Web APIs which are said to be "suitable for cryptographic usages" as a psuedo-random number generator (PRNG) seeded with sufficient entropy.</p>
<script class="snippet">
// Returns Uint8Array of cryptographically strong random sequence
function secureRandom(size) {
  var crypto = window.crypto || window.msCrypto;
  if (crypto === undefined)
    throw "No crypto service available";

  var bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);

  return bytes;
}
</script>
````
// Usage
alert('New password: ' + btoa(bytesToString(secureRandom(16))));
````

<p>
  <button type="button" class="btn btn-primary" onclick="javascript:alert('New password: ' + btoa(bytesToString(secureRandom(16))));">Try It!</button>
</p>

<p>Then test the password at <a href="https://howsecureismypassword.net/">How Secure Is My Password?</a></p>

<h3>One-Time Pad</h3>
<p><strong>Requirements:</strong></p>
<ul>
  <li>Encryption key must be truly random</li>
  <li>Encryption key must be at least the same length as the plaintext</li>
  <li>Encryption key must never be re-used</li>
</ul>
<script id="otp-example" class="snippet">
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
</script>
````
// Usage
var plaintext = 'This is sensitive information';
var key = secureRandom(plaintext.length);

var ciphertext = otp(key, plaintext);
var decrypted = otp(key, ciphertext);

console.log('plaintext:', plaintext);
console.log('key:', btoa(bytesToString(key)));
console.log('ciphertext:', btoa(bytesToString(ciphertext)));
console.log('decrypted:', bytesToString(decrypted));
````
<h4>Try It!</h4>
<p>Note: The key is regenerated with every plaintext character you type in order to fulfill the above requirements.</p>
<form id="otp">
  <div class="form-group">
    <input type="text" class="form-control" id="otp-plaintext" placeholder="Enter plaintext..." />
  </div>
  <div class="form-group">
    <label for="otp-key">Key (<span id="otp-key-size">0</span> bytes)</label>
    <input type="text" class="form-control" id="otp-key" readonly="readonly" />
  </div>
  <div class="form-group">
    <label for="otp-ciphertext">Ciphertext</label>
    <input type="text" class="form-control" id="otp-ciphertext" readonly="readonly" />
  </div>
</form>

<h3>Psuedo-HSM</h3>
<p>A simple definition of a <em>hardware security module</em> is a hardware device capable of securely storing encryption keys and being used for cryptographic functions. For example, a message may be passed to a hardware security module for encryption and signing, but the encryption keys are never shared, exposed, or released.</p>
<p>Below is a concept implementation that demonstrates these requirements using the <em>closure</em> pattern in Javascript to ensure the caller is prohibited from accessing secret keys once they have been added to the internal <code>vault</code>.</p>
<script class="snippet">
function PsuedoHSM(keys) {
  var vault = [];

  function protectKey(key) {
  }

  for (var i in keys)
    vault.push(protectKey(keys[i]));

  return {
    encrypt: function(plaintext) {
    },

    decrypt: function(ciphertext) {
    },

    sign: function(data) {
    },

    verify: function(data, signature) {
    }
  };
}
</script>

````
// Usage
var hsm = PsuedoHSM(['KEY_A', 'KEY_B', 'KEY_C']);
var attack = hsm.vault;

console.log('Attack succeeded:', attack !== undefined);
````