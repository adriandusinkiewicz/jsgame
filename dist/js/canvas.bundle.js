/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = exports.Ball = function () {
    function Ball(game, x, y, r) {
        _classCallCheck(this, Ball);

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

    _createClass(Ball, [{
        key: 'draw',
        value: function draw() {
            this.game.ctx.beginPath();
            this.game.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
            this.game.ctx.fillStyle = '#af1212';
            this.game.ctx.fill();
            this.game.ctx.closePath();
        }
    }, {
        key: 'update',
        value: function update() {
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
    }]);

    return Ball;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = exports.Block = function () {
    function Block(game, x, y, w, h) {
        _classCallCheck(this, Block);

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

    _createClass(Block, [{
        key: 'draw',
        value: function draw() {
            this.game.ctx.beginPath();
            this.game.ctx.rect(this.pos.x, this.pos.y, this.size.w, this.size.h);
            this.game.ctx.fillStyle = '#00ff21';
            this.game.ctx.fill();
            this.game.ctx.closePath();
        }
    }, {
        key: 'update',
        value: function update() {
            this.draw();
        }
    }]);

    return Block;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stick = exports.Stick = function () {
    function Stick(game, x, y, w, h) {
        _classCallCheck(this, Stick);

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

    _createClass(Stick, [{
        key: 'draw',
        value: function draw() {
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
    }, {
        key: 'update',
        value: function update() {
            this.draw();
        }
    }]);

    return Stick;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Ball = __webpack_require__(0);

var _Stick = __webpack_require__(2);

var _Block = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

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
        };
        this.ball = null;
        this.stick = null;
    }

    _createClass(Game, [{
        key: 'detectStickColission',
        value: function detectStickColission() {
            if (this.ball.pos.x + this.ball.r > this.stick.pos.x - this.stick.size.w / 2 && this.ball.pos.x + this.ball.r < this.stick.pos.x + this.stick.size.w / 2 && this.ball.pos.y + this.ball.r > this.stick.pos.y) {
                this.ball.vel.y = -this.ball.vel.y;
            }
        }
    }, {
        key: 'detectBlockColission',
        value: function detectBlockColission(block) {
            if (this.ball.pos.x + this.ball.r > block.pos.x && this.ball.pos.x - this.ball.r < block.pos.x + block.size.w && this.ball.pos.y + this.ball.r > block.pos.y && this.ball.pos.y - this.ball.r < block.pos.y + block.size.h) {
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
    }, {
        key: 'detectBottomColission',
        value: function detectBottomColission() {
            if (this.ball.pos.y + this.ball.r > this.game.height) {
                this.reset();
                this.lives -= 1;
                if (this.lives == 0) {
                    this.lives = "Game Over ! madafaka";
                }
            }
        }
    }, {
        key: 'mouseDetect',
        value: function mouseDetect(event) {
            var _this = this;

            if (event.clientX < 0 + this.stick.size.w / 2) {
                this.stick.pos.x = this.stick.size.w / 2;
                if (!this.isBallMoving()) {
                    this.ball.pos.x = this.stick.size.w / 2;
                }
            } else if (event.clientX > this.game.width - this.stick.size.w / 2) {
                this.stick.pos.x = this.game.width - this.stick.size.w / 2;
                if (!this.isBallMoving()) {
                    this.ball.pos.x = this.game.width - this.stick.size.w / 2;
                }
            } else {
                this.stick.pos.x = event.clientX;
                if (!this.isBallMoving()) {
                    setTimeout(function () {
                        _this.ball.pos.x = event.clientX;
                    }, 20);
                }
            }
        }
    }, {
        key: 'keyPressDetect',
        value: function keyPressDetect(key) {
            var _this2 = this;

            var unicode = key.keyCode ? key.keyCode : key.charCode;
            var speed = 30;
            switch (unicode) {
                case 37:
                    if (this.stick.pos.x - this.stick.size.w / 2 > 0) {
                        this.stick.pos.x -= speed;
                        if (!this.isBallMoving()) {
                            setTimeout(function () {
                                _this2.ball.pos.x -= speed;
                            }, 40);
                        }
                    }
                    break;
                case 39:
                    if (this.stick.pos.x + this.stick.size.w / 2 < this.game.width) {
                        this.stick.pos.x += speed;
                        if (!this.isBallMoving()) {
                            setTimeout(function () {
                                _this2.ball.pos.x += speed;
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
    }, {
        key: 'setVel',
        value: function setVel() {
            if (!this.isBallMoving()) {
                this.ball.vel.x = -this.speed;
                this.ball.vel.y = -this.speed;
            }
        }
    }, {
        key: 'isBallMoving',
        value: function isBallMoving() {
            if (this.ball.vel.x != 0 && this.ball.vel.y != 0) {
                return true;
            }
            return false;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.ball.pos.x = this.game.width / 2;
            this.ball.pos.y = this.game.height - 40;
            this.ball.vel.x = 0;
            this.ball.vel.y = 0;
            this.stick.pos.x = this.game.width / 2;
        }
    }, {
        key: 'init',
        value: function init() {
            this.lives = 3;
            this.points = 0;
            this.speed = 5;
            this.ball = new _Ball.Ball(this.game, this.game.width / 2, this.game.height - 40, 10);
            this.stick = new _Stick.Stick(this.game, this.game.width / 2, this.game.height - 30, 200, 20);
            var blockW = 80;
            var blockH = 40;
            var blockX = 80;
            var blockY = 100;
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 12; j++) {
                    this.blocks.push(new _Block.Block(this.game, blockX, blockY, blockW, blockH));
                    blockX += blockW + 10;
                }
                blockX = 80;
                blockY += blockH + 10;
            }
            this.blocksCount = this.blocks.length;
        }
    }, {
        key: 'update',
        value: function update() {
            var _this3 = this;

            requestAnimationFrame(this.update.bind(this));
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.font = "30px Arial";
            this.ctx.fillText(this.lives, 50, 50);

            this.ctx.font = "30px Arial";
            this.ctx.fillText(this.points, this.game.width - 50, 50);

            this.blocks.forEach(function (block) {
                if (block.display) {
                    block.update();
                    _this3.detectBlockColission(block);
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
    }]);

    return Game;
}();

var game = new Game();

game.init();
game.update();

addEventListener('click', function () {
    game.setVel();
});

game.canvas.addEventListener('mousemove', function (event) {
    game.mouseDetect(event);
});

onkeydown = function onkeydown(key) {
    return game.keyPressDetect(key);
};

/***/ })
/******/ ]);
//# sourceMappingURL=canvas.bundle.js.map