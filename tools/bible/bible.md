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

ul#books {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul#books li {
  margin: 15px 0;
  padding: 0;
}

ul#bible-verse {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul#bible-verse li {
  margin: 5px 0;
  padding: 0;
}
</style>
<div class="row">
  <div class="col-md-4">
    <form id="bible-search" method="POST">
      <h4>Lookup Verse by Reference</h4>
      <div class="form-group">
        <input type="text" name="lookup" placeholder="i.e. John 3:16" />
        <button class="btn btn-sm btn-primary">Lookup Verse</button>
      </div>
    </form>
      
    <h4>Books</h4>
    <ul id="books" />
  </div>

  <div class="col-md-8">
    <div id="bible-verse-heading"></div>
    <ul id="bible-verse"></ul>
  </div>
</div>

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

    var htmlEncode = function(text) {
      var e = $('<span />').html(text);

      return e.text();
    };

    var formatReference = function(v) {
      return '<h4>' + v.book + ' ' + v.chapter + '</h4>';
    };

    // TODO: Add HTML encoding
    var formatVerseHtml = function(v, tag) {
      if (v.text === undefined)
        return '<strong>Reference not found.</strong>';

      if (tag === undefined)
        tag = 'li';

      return $('<' + tag + ' />').html('<sup>' + v.verse + '</sup>' + htmlEncode(v.text))[0].outerHTML;
    };

    $('form#bible-search').submit(function() {
      var input = $(this).find('input[name=lookup]').val();

      var lookup = input.match(/^(\d\s)?(\w[\w\s]+)\s(\d+):(\d+)$/);
      var bookName = (lookup[1] || '') + lookup[2];
      var chapter = parseInt(lookup[3]);
      var verse = parseInt(lookup[4]);
      
      var book = getBookByName(bookName);
      var text = getVerseText(book, chapter, verse);
      var lookup = {
        book: bookName,
        chapter: chapter,
        verse: verse,
        text: text
      };

      $('#bible-verse-heading').html(formatReference(lookup));
      $('#bible-verse').html(formatVerseHtml(lookup));

      return false;
    });

    var readChapterOnClick = function() {
      var ref = $(this).attr('href').match(/^#b(\d+)c(\d+)$/);

      var bookId = ref[1];
      var chapterId = ref[2];

      var book = window.books[bookId];
      var chapter = window.bible[bookId][chapterId];
      var read = '';
      
      $('#bible-verse-heading').html(formatReference({
        book: book.name,
        chapter: chapterId
      }));

      for (var verse in chapter) {
        read += formatVerseHtml({
          book: book.name,
          chapter: chapterId,
          verse: verse,
          text: chapter[verse]
        });
      }

      $('#bible-verse').html(read);
    };

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
          chapters: chapter
        };

        window.bible[bookId] = window.bible[bookId] || {};
        window.bible[bookId][chapter] = window.bible[bookId][chapter] || {};
        window.bible[bookId][chapter][verse] = text;
      }

      // Display books
      for (var i in window.books) {
        var b = window.books[i];
        var li = $('<li />')
                  .html(b.name + ':<br />')
                  .appendTo($('ul#books'));

        for (var c = 1; c <= b.chapters; c++) {
          var a = $('<a />')
                  .attr('href', '#b' + b.id + 'c' + c)
                  .addClass('read-chapter')
                  .text(c)
                  .click(readChapterOnClick)
                  .appendTo(li);
          li.append(' ');
        }
      }

      window.console && console.log('Loaded.');
    });
  })('{{ "/tools/bible/kjv-pce.tsv" | relative_url }}');
</script>