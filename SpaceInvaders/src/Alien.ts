export default class Alien {
    private alienWidth: number;

    private alienHeight: number;

    private alienX: number;

    private alienY: number;

    private spriteImg: HTMLImageElement;

    private alive: boolean;

    public constructor(tileSize: number, spritesrc: string) {
        this.alienWidth = tileSize * 2;
        this.alienHeight = tileSize;
        this.alienX = tileSize;
        this.alienY = tileSize;

        this.spriteImg = new Image();
        this.spriteImg.src = spritesrc;

        this.alive = true;
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
}
