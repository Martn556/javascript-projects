export default class Alien {
    private alienWidth: number;

    private alienHeight: number;

    private alienX: number;

    private alienY: number;

    private spriteImg: HTMLImageElement;

    private alive: boolean;

    private alienVelocityX: number;

    public constructor(tileSize: number, spritesrc: string, offsetX: number, offsetY: number, velX: number) {
        this.alienWidth = tileSize * 2;
        this.alienHeight = tileSize;
        this.alienX = tileSize + offsetX * this.alienWidth;
        this.alienY = tileSize + offsetY * this.alienHeight;

        this.spriteImg = new Image();
        this.spriteImg.src = spritesrc;

        this.alive = true;
        this.alienVelocityX = velX;
    }

    public getWidth(): number {
        return this.alienWidth;
    }

    public getHeight(): number {
        return this.alienHeight;
    }

    public getX(): number {
        return this.alienX;
    }

    public getY(): number {
        return this.alienY;
    }

    public getSprite(): HTMLImageElement {
        return this.spriteImg;
    }

    /**
     * getter
     * @returns boolean
     */
    public isAlive(): boolean {
        return this.alive;
    }

    /**
     * moves Alien right by velocity
     */
    public moveRight(): void {
        this.alienX += this.alienVelocityX;
    }

    /**
     * Flips the veloicty of the alien and makes it travel the other way
     * multiplies the velocity by -1
     */
    public flipVelocity(): void {
        this.alienVelocityX *= -1;
        this.alienX += this.alienVelocityX * 2;
    }

    /**
     * Moves the alien by the specified row
     * @param rows How many rows to move down by
     */
    public moveByRow(rows: number): void {
        this.alienY += this.alienHeight * rows;
    }

    /**
     * Sets alive to false
     */
    public died(): void {
        this.alive = false;
    }
}
