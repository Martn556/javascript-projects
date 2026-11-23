export default class Ship {
    shipWidth;
    shipHeight;
    shipX;
    shipY;
    spriteImg;
    shipVelocityX;
    canvasWidth;
    constructor(tileSize, columns, rows, canvasWidth) {
        this.shipWidth = tileSize * 2;
        this.shipHeight = tileSize;
        this.shipX = tileSize * columns / 2 - tileSize;
        this.shipY = tileSize * rows - tileSize * 2;
        this.spriteImg = new Image();
        this.spriteImg.src = "../assets/ship.png";
        this.shipVelocityX = tileSize;
        this.canvasWidth = canvasWidth;
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
    getVelocity() {
        return this.shipVelocityX;
    }
}
//# sourceMappingURL=Ship.js.map