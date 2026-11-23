export default class Bullet {
    private bulletVelocityY: number;

    private x: number;

    private y: number;

    private width: number;

    private height: number;

    private used: boolean;

    public constructor(shipX: number, shipY: number, shipWidth: number, tileSize: number) {
        this.bulletVelocityY = -10; // Bullet travel speed
        this.x = shipX + shipWidth * 15 / 32;
        this.y = shipY;
        this.width = tileSize / 8;
        this.height = tileSize / 2;
        this.used = false;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    /**
     * returns if the bullet has hit something
     * @returns boolean
     */
    public isUsed(): boolean {
        return this.used;
    }


    /**
     * Updates any movment in the bullet
     */
    public update(): void {
        this.y += this.bulletVelocityY;
    }

    /**
     * Sets used to true
     */
    public hit(): void {
        this.used = true;
    }
}
