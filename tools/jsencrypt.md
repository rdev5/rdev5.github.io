---
layout: page
title: JSEncrypt
description: Demonstration of JSEncrypt
permalink: /tools/jsencrypt
background: /assets/img/keys-1280.jpg
---
<style>
  textarea, #ciphertext, #result { font-family: Consolas; }
</style>

<h2>JSEncrypt Demo</h2>
<p>Note: Enter both <a href="https://github.com/travist/jsencrypt">public and private keys</a> to decrypt the ciphertext below, or generate a new pair to encrypt/decrypt your own plaintext!</p>

<div id="ciphertext" style="overflow: auto; margin: 25px 0; padding: 10px;">
M6NqvBNv3QCNwAC1Z5K9eJWDvzmWFyDz64Um4uY5bxlURqJE9yc7rJG4f5LQn6DFQsrvdCU4bN+5mE7YxHYgn68skTjMwymzRPxswm8yuB3iPKKy3+BxdbKuEVBoxTvmcOoGf3RvykTSyeDoJkNvLVhc5khI9kaa2A8TpBxCBPY=
</div>

<div class="form-group">
  <textarea id="privkey" rows="5" cols="100" placeholder="Enter private key..."></textarea>
</div>

<div class="form-group">
  <textarea id="pubkey" rows="5" cols="100" placeholder="Enter public key..."></textarea>
</div>

<div class="form-group">
  <textarea id="input" rows="5" cols="100" placeholder="Enter plaintext to encrypt..."></textarea>
</div>

<button id="run">Run</button>

<div id="result"></div>

<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script src="{{ "/assets/js/jsencrypt.min.js" | relative_url }}"></script>
<script>
  $(function() {
    var encrypt = new JSEncrypt();
    var decrypt = new JSEncrypt();

    $('#pubkey').change(function() {
      encrypt.setPublicKey($('#pubkey').val());
      window.console && console.log('Public key set');
    });

    $('#privkey').change(function() {
      decrypt.setPrivateKey($('#privkey').val());
      window.console && console.log('Private key set');
    });

    // Run a quick encryption/decryption when they click.
    $('#run').click(function() {
      var ciphertext = $('#input').val().length > 0 ? encrypt.encrypt($('#input').val()) : $('#ciphertext').text();
      window.console && console.log('Attempting to decrypt', ciphertext);

      var decrypted = decrypt.decrypt(ciphertext);

      if (!decrypted) {
        window.console && console.error('Decrypt failed.');
        return;
      }

      $('#ciphertext').css('font-weight', 'bold').text(decrypted);
    });
  });
</script>