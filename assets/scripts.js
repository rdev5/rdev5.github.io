(function() {
  // tools.md
  $('script.snippet').each(function(a, b, c) {
    var snippet = $(this).html();

    var block = $('<pre />').text(snippet.trim());
    $(this).before(block);
  });

  // tools.md
  $('form#otp input#otp-plaintext').keyup(function() {
    var plaintext = $(this).val();
    var key = secureRandom(plaintext.length);
    var ciphertext = otp(key, plaintext);

    $('form#otp #otp-key-size').text(key.length);
    $('form#otp input#otp-key').val(btoa(bytesToString(key)));
    $('form#otp input#otp-ciphertext').val(btoa(bytesToString(ciphertext)));
  });
})();