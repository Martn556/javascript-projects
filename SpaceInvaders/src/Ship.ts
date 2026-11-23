export default class Ship {
    private shipWidth: number;

    private shipHeight: number;

    private shipX: number;

    private shipY: number;

    private spriteImg: HTMLImageElement;

    private shipVelocityX: number;

    private canvasWidth: number;

    /**
     * Creates a ship object
     * @param tileSize Size of tiles
     * @param columns How many colums (x)
     * @param rows How many rows (y)
     */
    public constructor(tileSize: number, columns: number, rows: number, canvasWidth: number) {
        this.shipWidth = tileSize * 2;
        this.shipHeight = tileSize;
        this.shipX = tileSize * columns / 2 - tileSize;
        this.shipY = tileSize * rows - tileSize * 2;
        this.spriteImg = new Image();
        this.spriteImg.src = "../assets/ship.png";
        this.shipVelocityX = tileSize; // Ship moves one tile over
        this.canvasWidth = canvasWidth;
    }

    public getX(): number {
        return this.shipX;
    }

    public getY(): number {
        return this.shipY;
    }

    public getWidth(): number {
        return this.shipWidth;
    }

    public getHeight(): number {
        return this.shipHeight;
    }

    public getSprite(): HTMLImageElement {
        return this.spriteImg;
    }

    // /**
    //  * Moves the ship left if ArrowLeft is pressed or
    //  * Moves the ship right if ArrowRight is pressed
    //  * @param e KeyboardEvent
    //  */
    // public moveShip(e: KeyboardEvent): void {
    //     if (e.code == "ArrowLeft" && this.shipX - this.shipVelocityX >= 0) {
    //         this.goLeft();
    //     } else if (e.code == "ArrowRight" &&
    //  this.shipX + this.shipVelocityX + this.shipWidth <= this.canvasWidth) {
    //         this.goRight();
    //     }
    // }

    /**
     * guess bro 😭
     */
    public goLeft(): void {
        this.shipX -= this.shipVelocityX;
    }

    /**
     * again guess 😭
     */
    public goRight(): void {
        this.shipX += this.shipVelocityX;
    }

    public getVelocity(): number {
        return this.shipVelocityX;
    }
}
