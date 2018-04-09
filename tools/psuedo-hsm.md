---
layout: page
title: Psuedo-HSM
description: Custom Tools
permalink: /tools/psuedo-hsm
background: /assets/img/tools-1280.jpg
---
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

alert('Attack succeeded: ' + (attack !== undefined));
````

<p>
  <button type="button" class="btn btn-primary" onclick="javascript:alert('Attack succeeded: ' + (PsuedoHSM(['KEY_A', 'KEY_B', 'KEY_C']).vault !== undefined));">Try It!</button>
</p>