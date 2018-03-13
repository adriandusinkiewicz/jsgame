import {
    Ball
} from './components/Ball.js'

import {
    Stick
} from './components/Stick.js'

import {
    Block
} from './components/Block.js'

class Game {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 1200;
        this.canvas.height = 800;
        this.lives = null;
        this.points = null;
        this.speed = null;
        this.blocks = [];
        this.blocksCount = null;
        this.game = {
            ctx: this.ctx,
            width: this.canvas.width,
            height: this.canvas.height
        }
        this.ball = null;
        this.stick = null;
    }
    detectStickColission() {
        if (this.ball.pos.x + this.ball.r > this.stick.pos.x - this.stick.size.w / 2 &&
            this.ball.pos.x + this.ball.r < this.stick.pos.x + this.stick.size.w / 2 &&
            this.ball.pos.y + this.ball.r > this.stick.pos.y
        ) {
            this.ball.vel.y = -this.ball.vel.y;
        }
    }
    detectBlockColission(block) {
        if (this.ball.pos.x + this.ball.r > block.pos.x &&
            this.ball.pos.x - this.ball.r < block.pos.x + block.size.w &&
            this.ball.pos.y + this.ball.r > block.pos.y &&
            this.ball.pos.y - this.ball.r < block.pos.y + block.size.h
        ) {
            if (this.ball.pos.x + this.speed > block.pos.x + block.size.w || this.ball.pos.x - this.speed < block.pos.x) {
                this.ball.vel.x = -this.ball.vel.x;
            }
            if (this.ball.pos.y + this.speed > block.pos.y + block.size.h || this.ball.pos.y - this.speed < block.pos.y) {
                this.ball.vel.y = -this.ball.vel.y;
            }
            block.display = false;
            this.points += 10;
            this.blocksCount -= 1;
        }
    }
    detectBottomColission() {
        if (this.ball.pos.y + this.ball.r > this.game.height) {
            this.reset();
            this.lives -= 1;
            if (this.lives == 0) {
                this.lives = "Game Over ! madafaka"
            }
        }
    }
    mouseDetect(event) {
        if (event.clientX < 0 + this.stick.size.w / 2) {
            this.stick.pos.x = this.stick.size.w / 2;
            if (!this.isBallMoving()) {
                this.ball.pos.x = this.stick.size.w / 2
            }
        } else if (event.clientX > this.game.width - this.stick.size.w / 2) {
            this.stick.pos.x = this.game.width - this.stick.size.w / 2;
            if (!this.isBallMoving()) {
                this.ball.pos.x = this.game.width - this.stick.size.w / 2;
            }
        } else {
            this.stick.pos.x = event.clientX;
            if (!this.isBallMoving()) {
                setTimeout(() => {
                    this.ball.pos.x = event.clientX;
                }, 20);
            }
        }
    }
    keyPressDetect(key) {
        const unicode = key.keyCode ? key.keyCode : key.charCode;
        const speed = 30;
        switch (unicode) {
            case 37:
                if (this.stick.pos.x - this.stick.size.w / 2 > 0) {
                    this.stick.pos.x -= speed;
                    if (!this.isBallMoving()) {
                        setTimeout(() => {
                            this.ball.pos.x -= speed;
                        }, 40);
                    }
                }
                break;
            case 39:
                if (this.stick.pos.x + this.stick.size.w / 2 < this.game.width) {
                    this.stick.pos.x += speed;
                    if (!this.isBallMoving()) {
                        setTimeout(() => {
                            this.ball.pos.x += speed;
                        }, 40);
                    }
                }
                break;
            case 32:
                game.setVel();
                break;
            default:
                //do nothing
        }
    }
    setVel() {
        if (!this.isBallMoving()) {
            this.ball.vel.x = -this.speed;
            this.ball.vel.y = -this.speed;
        }
    }
    isBallMoving() {
        if (this.ball.vel.x != 0 && this.ball.vel.y != 0) {
            return true;
        }
        return false;
    }
    reset() {
        this.ball.pos.x = this.game.width / 2;
        this.ball.pos.y = this.game.height - 40;
        this.ball.vel.x = 0;
        this.ball.vel.y = 0;
        this.stick.pos.x = this.game.width / 2;
    }
    init() {
        this.lives = 3;
        this.points = 0;
        this.speed = 5;
        this.ball = new Ball(this.game, this.game.width / 2, this.game.height - 40, 10);
        this.stick = new Stick(this.game, this.game.width / 2, this.game.height - 30, 200, 20);
        const blockW = 80;
        const blockH = 40;
        let blockX = 80;
        let blockY = 100;
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 12; j++) {
                this.blocks.push(new Block(this.game, blockX, blockY, blockW, blockH));
                blockX += blockW + 10;
            }
            blockX = 80;
            blockY += blockH + 10;
        }
        this.blocksCount = this.blocks.length;
    }
    update() {
        requestAnimationFrame(this.update.bind(this));
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.lives, 50, 50);

        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.points, this.game.width - 50, 50);


        this.blocks.forEach(block => {
            if (block.display) {
                block.update();
                this.detectBlockColission(block);
            }
        });

        this.detectStickColission();
        this.detectBottomColission();

        this.ball.update();
        this.stick.update();

        if (this.blocksCount <= 0) {
            this.init();
        }
    }
}

const game = new Game();

game.init();
game.update();


addEventListener('click', () => {
    game.setVel();
})

game.canvas.addEventListener('mousemove', event => {
    game.mouseDetect(event);
})

onkeydown = (key) => game.keyPressDetect(key);