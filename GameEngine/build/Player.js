import Sprite from "./helperAPIs/Sprite.js";
export default class Player extends Sprite {
    speed;
    velocityY;
    isJumping;
    groundY;
    gravity;
    movingRight;
    movingLeft;
    jumping;
    constructor(x, y, w, h, spriteImg, physics) {
        super(x, y, w, h, spriteImg, physics);
        this.speed = 2;
        this.velocityY = 0;
        this.isJumping = false;
        this.groundY = 350;
        this.gravity = 0.001;
        this.movingLeft = false;
        this.movingRight = false;
        this.jumping = false;
    }
    moveLeft() {
        this.movingLeft = true;
    }
    stopMovingLeft() {
        this.movingLeft = false;
    }
    moveRight() {
        this.movingRight = true;
    }
    stopMovingRight() {
        this.movingRight = false;
    }
    jump() {
        this.jumping = true;
    }
    updateJump(delta) {
        if (this.jumping && !this.isJumping) {
            this.velocityY = -0.6;
            this.isJumping = true;
            this.jumping = false;
        }
        if (this.isJumping) {
            this.posY += this.velocityY * delta;
            this.velocityY += this.gravity * delta;
        }
        if (this.posY >= this.groundY) {
            this.posY = this.groundY;
            this.velocityY = 0;
            this.isJumping = false;
        }
    }
    update(delta) {
        this.posX += 0 * delta;
    }
}
//# sourceMappingURL=Player.js.map