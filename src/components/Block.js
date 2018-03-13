export class Block {
    constructor(game, x, y, w, h) {
        this.game = game;
        this.pos = {
            x: x,
            y: y
        };
        this.size = {
            w: w,
            h: h
        };
        this.display = true;
    }
    draw() {
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        this.game.ctx.fillStyle = '#00ff21';
        this.game.ctx.fill();
        this.game.ctx.closePath();
    }
    update() {
        this.draw();
    }
}