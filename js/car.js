var Car = function(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.z = this.game.camera.y / Math.tan(this.game.fieldOfView / 2);

    
};

Car.prototype = {
    loadImage : function() {
        this.game.engine.load.image("player-left", "imgs/player_left.png");
        this.game.engine.load.image("player-right", "imgs/player_right.png");
        this.game.engine.load.image("player-straight", "imgs/player_straight.png");
    },

    init : function() {
        this.bitmap = this.game.engine.add.bitmapData(
            this.game.resolution.x,
            this.game.resolution.y
        );
        this.game.engine.add.image(0, 0, this.bitmap);
    },

    accelerate : function() {},

    brake : function() {},

    decelerate : function() {},

    turnRight : function() {},

    turnLeft : function() {},

    run : function() {

    },

    render : function() {}
};