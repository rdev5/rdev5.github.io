---
layout: page
title: Bible
description: KJV (Pure Cambridge Edition)
permalink: /bible
---
<h2>Bible</h2>

<style>
#bible-verse {
  margin: 15px 0;
}
</style>
<form id="bible-search" method="POST">
  <div class="form-group">
    <input type="text" name="lookup" placeholder="i.e. John 3:16" />
    <button class="btn btn-sm btn-primary">Lookup Verse</button>
  </div>

  <div id="bible-verse"></div>
</form>

<script src="{{ "/assets/game/js/jquery-2.2.4.min.js" | relative_url }}"></script>
<script>
  (function(target) {
    window.console && console.log('Loading...');
    window.bible = {};
    window.books = {};

    var getBookByName = function(name) {
      for (var i in window.books) {
        var b = window.books[i];
        if (b.name == name)
          return b;
      }
    };

    var getVerseText = function(book, chapter, verse) {
      if (!book || !window.bible[book.id] || !window.bible[book.id][chapter] || !window.bible[book.id][chapter][verse]) {
        window.console && console.warn('Reference not found.');
        return undefined;
      }

      return window.bible[book.id][chapter][verse];
    };

    var formatVerseHtml = function(v) {
      return '<blockquote><strong>' + v.book + ' ' + v.chapter + ':' + v.verse + '</strong> &mdash; ' + v.text + '</blockquote>';
    };

    $('form#bible-search').submit(function() {
      var input = $(this).find('input[name=lookup]').val();

      var lookup = input.match(/^(\d\s)?(\w[\w\s]+)\s(\d+):(\d+)$/);
      var bookName = (lookup[1] || '') + lookup[2];
      var chapter = parseInt(lookup[3]);
      var verse = parseInt(lookup[4]);
      
      var book = getBookByName(bookName);
      var text = getVerseText(book, chapter, verse);
      var format = formatVerseHtml({
        book: bookName,
        chapter: chapter,
        verse: verse,
        text: text
      });

      $('#bible-verse').html(format);

      return false;
    });

    $.get(target, function(data) {
      var separators = {
        verse: '\n',
        meta: '\t',
      };

      var lines = data.split(separators.verse); data = null;

      for (var i = 0; i < lines.length; i++) {
        var fields = lines[i].split(separators.meta);
        var bookId = fields[0];
        var bookAbbr = fields[1];
        var bookName = fields[2];
        var chapter = fields[3];
        var verse = fields[4];
        var text = fields[5];

        // TODO: Debug!
        window.books[bookId] = {
          id: bookId,
          abbr: bookAbbr,
          name: bookName,
          chapters: chapter,
          verses: verse
        };

        window.bible[bookId] = window.bible[bookId] || {};
        window.bible[bookId][chapter] = window.bible[bookId][chapter] || {};
        window.bible[bookId][chapter][verse] = text;
      }

      window.console && console.log('Loaded.');
    });
  })('{{ "/tools/bible/kjv-pce.tsv" | relative_url }}');
</script>