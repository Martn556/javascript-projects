export default class Alien {
    alienWidth;
    alienHeight;
    alienX;
    alienY;
    spriteImg;
    alive;
    alienVelocityX;
    constructor(tileSize, spritesrc, offsetX, offsetY, velX) {
        this.alienWidth = tileSize * 2;
        this.alienHeight = tileSize;
        this.alienX = tileSize + offsetX * this.alienWidth;
        this.alienY = tileSize + offsetY * this.alienHeight;
        this.spriteImg = new Image();
        this.spriteImg.src = spritesrc;
        this.alive = true;
        this.alienVelocityX = velX;
    }
    getWidth() {
        return this.alienWidth;
    }
    getHeight() {
        return this.alienHeight;
    }
    getX() {
        return this.alienX;
    }
    getY() {
        return this.alienY;
    }
    getSprite() {
        return this.spriteImg;
    }
    isAlive() {
        return this.alive;
    }
    moveRight() {
        this.alienX += this.alienVelocityX;
    }
    flipVelocity() {
        this.alienVelocityX *= -1;
        this.alienX += this.alienVelocityX * 2;
    }
    moveByRow(rows) {
        this.alienY += this.alienHeight * rows;
    }
    died() {
        this.alive = false;
    }
}
//# sourceMappingURL=Alien.js.map