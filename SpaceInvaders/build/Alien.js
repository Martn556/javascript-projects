export default class Alien {
    alienWidth;
    alienHeight;
    alienX;
    alienY;
    spriteImg;
    alive;
    constructor(tileSize, spritesrc) {
        this.alienWidth = tileSize * 2;
        this.alienHeight = tileSize;
        this.alienX = tileSize;
        this.alienY = tileSize;
        this.spriteImg = new Image();
        this.spriteImg.src = spritesrc;
        this.alive = true;
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
}
//# sourceMappingURL=Alien.js.map