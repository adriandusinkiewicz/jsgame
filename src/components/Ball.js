export class Ball {
    constructor(game, x, y, r) {
        this.game = game;
        this.pos = {
            x: x,
            y: y
        };
        this.vel = {
            x: 0,
            y: 0
        };
        this.r = r;
    }
    draw() {
        this.game.ctx.beginPath();
        this.game.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
        this.game.ctx.fillStyle = '#af1212';
        this.game.ctx.fill();
        this.game.ctx.closePath();
    }
    update() {
        if (this.pos.x - this.r < 0 || this.pos.x + this.r > this.game.width) {
            this.vel.x = -this.vel.x;
        }

        if (this.pos.y - this.r < 0 || this.pos.y + this.r > this.game.height) {
            this.vel.y = -this.vel.y;
        }

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
        this.draw();
    }
}