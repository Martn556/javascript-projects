export default class Ship {
    shipWidth;
    shipHeight;
    shipX;
    shipY;
    spriteImg;
    shipVelocityX;
    constructor(tileSize, columns, rows) {
        this.shipWidth = tileSize * 2;
        this.shipHeight = tileSize;
        this.shipX = tileSize * columns / 2 - tileSize;
        this.shipY = tileSize * rows - tileSize * 2;
        this.spriteImg = new Image();
        this.spriteImg.src = "../assets/ship.png";
        this.shipVelocityX = tileSize;
    }
    getX() {
        return this.shipX;
    }
    getY() {
        return this.shipY;
    }
    getWidth() {
        return this.shipWidth;
    }
    getHeight() {
        return this.shipHeight;
    }
    getSprite() {
        return this.spriteImg;
    }
    goLeft() {
        this.shipX -= this.shipVelocityX;
    }
    goRight() {
        this.shipX += this.shipVelocityX;
    }
}
//# sourceMappingURL=Ship.js.map