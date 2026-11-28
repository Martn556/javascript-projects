export default class Bullet {
    bulletVelocityY;
    x;
    y;
    width;
    height;
    used;
    constructor(shipX, shipY, shipWidth, tileSize) {
        this.bulletVelocityY = -10;
        this.x = shipX + shipWidth * 15 / 32;
        this.y = shipY;
        this.width = tileSize / 8;
        this.height = tileSize / 2;
        this.used = false;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    isUsed() {
        return this.used;
    }
    update() {
        this.y += this.bulletVelocityY;
    }
    hit() {
        this.used = true;
    }
}
//# sourceMappingURL=Bullet.js.map