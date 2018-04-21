(function(config) {
  // Data store required
  if (Rhaboo === undefined)
  {
    window.console && console.error('Library missing: rhaboo.min.js');
    return;
  }

  // Runtime
  window.runtime = { active: true };

  // Rand
  var rand = function() {
    return window.crypto.getRandomValues(new Uint8Array(1))[0];
  };

  // Default options
  config = config || {
    playerListContainer: 'ul#player-list',

    mod: {
      learn: {
        m: rand() % 10,
        limit: 100
      }
    },

    store: {
      name: 'game-v1',
      autosave: 1000
    }
  };

  var log = function(level, msg) {
    // TODO: Implement logging in UI
    if (window.console === undefined)
      return;

    // Handle default: console.log(msg)
    if (msg === undefined) {
      msg = level;
      level = 'log';
    }

    // Handle invalid log level: console.warn(msg)
    if (!(level in window.console))
      level = 'log'

    window.console[level]('[' + level.toUpperCase() + ']', msg);
  };

  var Player = function(id) {
    var sid = config.store.name + '_' + id;
    var db = Rhaboo.persistent(sid);

    var private = db.player || {
      id: id,
      name: 'No Name',
      level: 1,
      xp: 0,
      credits: 0
    };

    var public = {
      rename: function(name) {
        private.name = name;
      },

      info: function(s) {
        if (s === undefined)
          return private;

        if (s in private)
          return private[s];

        return undefined;
      },

      save: function() {
        // log('Saving player #' + id + ': ' + JSON.stringify(public.info()));
        db.write(id, private);
      },

      // Takes XP from target
      learn: function(target) {
        private.xp += target.xp();

        // Handle Number.MAX_SAFE_INTEGER
        if (private.xp >= Number.MAX_SAFE_INTEGER)
          private.xp = 0;

        // Level-up
        if (private.xp > 0 && private.xp % config.mod.learn.m === 0) {
          private.level++;
          private.xp = 0;
        }
      },

      // Gives XP to player object calling this function
      xp: function() {
        // TODO: Refactor with stats
        var xp = private.xp > 0 ? private.xp : 0;

        private.xp -= xp;
        return xp;
      },
    };

    // Autosave
    if (!isNaN(config.store.autosave))
      setInterval(function() { public.save() }, config.store.autosave);

    return public;
  };

  var NPC = function() {
    return {
      xp: function() { return rand(); }
    }
  };

  var report = function(player) {
    // TODO: Clear intervals
    if (!window.runtime.active)
      return;

    var info = player.info();
    var id = 'player-info-' + info.id;

    var li = $('#' + id);
    if (!li.length) {
      li = $('<li />')
            .attr('id', id)
            .addClass('list-group-item')
            .appendTo($(config.playerListContainer));
    }

    var html = '<strong>' + info.name + '</strong> (Level: ' + info.level + ', XP: ' + info.xp + ')';
    li.html(html);

    // Declare winner
    if (info.level >= config.mod.learn.limit) {
      window.runtime.active = false;
      html += ' - WINNER!';
      li.html(html);

      // alert(info.name + ' is the winner!');
    }
  };

  var p1 = new Player('001');
  p1.rename(prompt('Please enter a name for your player:'));
  report(p1);

  // Player interaction
  window.addEventListener('mouseover', function(e) {
    p1.learn(new NPC());
    report(p1);
  });

  // CPU
  var cpu1 = new Player('002');
  cpu1.rename('CPU 1');

  var cpu2 = new Player('003');
  cpu2.rename('CPU 2');

  setInterval(function() {
    cpu1.learn(new NPC());
    cpu2.learn(new NPC());

    report(cpu1);
    report(cpu2);
  }, 45);
})();