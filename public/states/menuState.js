var Menu = (function(){

  var o = {
    l : {},
    preload: function(){
      game.stage.backgroundColor = '#727272';
      game.load.image('sky',         '/assets/gameBackground.png');
      game.load.image('background',  '/assets/menu.png');
      game.load.image('logo',        '/assets/gremlins-logo.png');
      game.load.image('startButton', '/assets/startButton.png');
      game.load.image('mogwai',      '/assets/mogwai.png');
      game.load.image('gremlin',     '/assets/gremlin.png');
      game.load.spritesheet('rain',  '/assets/rain.png', 17, 17);

      // Load the theme music
      game.load.audio('theme', '/assets/audio/theme-music.ogg');
    },

    create: function(){
      game.physics.startSystem(Phaser.Physics.ARCADE);

      game.add.sprite(0, 0, 'sky');

      // new Sound(game, key, volume, loop)
      var theme = game.add.audio('theme', 0.8, true);
      theme.play();

      var background = game.add.sprite(game.world.centerX, 150, 'background');
      background.scale.setTo(1.5)
      background.anchor.setTo(0.5, 0);

      var logo = game.add.sprite(game.world.centerX, 0, 'logo');
      logo.anchor.setTo(0.5, 0);

      var mogwai = game.add.sprite(250, 530, 'mogwai');
      var gremlin = game.add.sprite(550, 200, 'gremlin');
      gremlin.scale.setTo(0.3)

      var startButton = game.add.button(game.world.centerX, 150, 'startButton', o.l.startGame, game);
      startButton.anchor.setTo(0.5, 0.5);
      startButton.scale.setTo(0.2)

      // RAIN EMITTER
      var emitter = game.add.emitter(game.world.centerX, 0, 400);

    	emitter.width = game.world.width;
    	// emitter.angle = 30; // uncomment to set an angle for the rain.

    	emitter.makeParticles('rain');

    	emitter.minParticleScale = 0.1;
    	emitter.maxParticleScale = 0.5;

    	emitter.setYSpeed(300, 500);
    	emitter.setXSpeed(-5, 5);

    	emitter.minRotation = 0;
    	emitter.maxRotation = 0;

    	emitter.start(false, 1600, 5, 0);


      // var style = { font: '65px gremlinsregular', fill: '#ff0044', align: 'center' };
      // var text  = game.add.text(game.world.centerX, game.world.centerY, 'Mogwai Roundup', style);
      // text.anchor.set(0.5);


    },
  };

  o.l.startGame = function(){
    game.state.start('level1');
  };

  return o;

})();
