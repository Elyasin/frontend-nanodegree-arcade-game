// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -100;
    this.y = Math.random() * 400;
    this.speed = 10;//Math.random() * 350 + 50;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if ((!(this.x >= player.x + 80) && !(this.x + 80 <= player.x) && !(this.y >= player.y + 85) && !(this.y + 140 <= player.y + 70))) {	
	player.x = 200;
	player.y = 400;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 200; 
    this.y = 400;
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function() {
    if (this.y <= 0) {
	this.x = 200;
	this.y = 400;
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(direction) {
    
    this.speedX = 101;
    this.speedY = 85;

    switch(direction) {
        case 'left':
	    if (this.x - this.speedX >= 200-202) {
	        this.x = this.x - this.speedX;
	    }
	    break;
	case 'right':
	    if (this.x + this.speedX <= 200+202) {
	        this.x = this.x + this.speedX;
	    }
	    break;
	case 'up':
	    if (this.y - this.speedY >= 400-475) {
	        this.y = this.y - this.speedY;
	    }
	    break;
	case 'down':
	    if (this.y + this.speedY <= 400) {
	        this.y = this.y + this.speedY;
	    }
	    break;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

