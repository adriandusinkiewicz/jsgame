export class Stick {
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
    }
    draw() {
        // this.game.ctx.beginPath();
        // this.game.ctx.rect(this.pos.x - this.size.w / 2, this.pos.y, this.size.w, this.size.h, 10, 10, 10, 10);
        // this.game.ctx.rectMode(RADIUS);
        // this.game.ctx.fillStyle = '#00ff21';
        // this.game.ctx.fill();
        // this.game.ctx.closePath();

        this.game.ctx.beginPath();
        this.game.ctx.moveTo(this.pos.x - this.size.w / 2 + 10, this.pos.y);
        this.game.ctx.lineTo(this.pos.x - this.size.w / 2 + this.size.w - 10, this.pos.y);
        this.game.ctx.quadraticCurveTo(this.pos.x - this.size.w / 2 + this.size.w, this.pos.y, this.pos.x - this.size.w / 2 + this.size.w, this.pos.y + 10);
        this.game.ctx.lineTo(this.pos.x - this.size.w / 2 + this.size.w, this.pos.y + this.size.h - 10);
        this.game.ctx.quadraticCurveTo(this.pos.x - this.size.w / 2 + this.size.w, this.pos.y + this.size.h, this.pos.x - this.size.w / 2 + this.size.w - 10, this.pos.y + this.size.h);
        this.game.ctx.lineTo(this.pos.x - this.size.w / 2 + 10, this.pos.y + this.size.h);
        this.game.ctx.quadraticCurveTo(this.pos.x - this.size.w / 2, this.pos.y + this.size.h, this.pos.x - this.size.w / 2, this.pos.y + this.size.h - 10);
        this.game.ctx.lineTo(this.pos.x - this.size.w / 2, this.pos.y + 10);
        this.game.ctx.quadraticCurveTo(this.pos.x - this.size.w / 2, this.pos.y, this.pos.x - this.size.w / 2 + 10, this.pos.y);
        this.game.ctx.fillStyle = '#404040';
        this.game.ctx.fill();
        this.game.ctx.closePath();

    }
    update() {
        this.draw();
    }
}