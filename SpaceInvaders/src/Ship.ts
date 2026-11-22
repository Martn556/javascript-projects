export default class Ship {
    private shipWidth: number;

    private shipHeight: number;

    private shipX: number;

    private shipY: number;

    private spriteImg: HTMLImageElement;

    private shipVelocityX: number;

    /**
     * Creates a ship object
     * @param tileSize Size of tiles
     * @param columns How many colums (x)
     * @param rows How many rows (y)
     */
    public constructor(tileSize: number, columns: number, rows: number) {
        this.shipWidth = tileSize * 2;
        this.shipHeight = tileSize;
        this.shipX = tileSize * columns / 2 - tileSize;
        this.shipY = tileSize * rows - tileSize * 2;
        this.spriteImg = new Image();
        this.spriteImg.src = "../assets/ship.png";
        this.shipVelocityX = tileSize; // Ship moves one tile over
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
}
