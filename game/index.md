---
layout: page
title: A Browser-Based Game
description: ...of what? I don't know (yet)
permalink: /game/
background: /assets/img/chess-1280.jpg
background_offset: -250px
---
<div class="game-instructions">
  <h2>Instructions</h2>
  <ul>
    <li>Move your mouse around to search for XP and level up. First to reach 100 wins!</li>
  </ul>
</div>

<h3>Easy Mode</h3>
<ul id="player-list" class="list-group"></ul>
<script src="{{ "/assets/game/js/jquery-2.2.4.min.js" | relative_url }}"></script>
<script src="{{ "/assets/game/js/rhaboo.min.js" | relative_url }}"></script>
<script src="{{ "/assets/game/js/game.js" | relative_url }}"></script>

