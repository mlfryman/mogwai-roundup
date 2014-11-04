var game = new Phaser.Game(900, 680, Phaser.AUTO, '');

game.state.add('menu', Menu);
game.state.add('level1', Level1);

game.state.start('menu');
