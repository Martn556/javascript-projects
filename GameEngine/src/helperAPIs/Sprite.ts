export default abstract class Sprite {
    private canvas: HTMLCanvasElement;

    private c: CanvasRenderingContext2D;

    protected posX: number;

    protected posY: number;

    protected width: number;

    protected height: number;

    protected spriteImg: HTMLImageElement;

    protected physics: boolean;

    /**
     * Sprite class
     * @param x Starting position X of your Sprite
     * @param y Starting position Y of your Sprite
     * @param w Width of your sprite
     * @param h Height of your sprite
     * @param spriteImg the image that will be displayed for this sprite (example: CanvasRenderer.loadNewImage("./assets/playerph.svg"))
     * @param [physics=false] By default physics are set to false, set this to true if you want your object to be affected by gravity
     */
    public constructor(x: number, y: number, w: number, h: number, spriteImg: string, physics?: boolean) {
        this.canvas = document.getElementById("game") as HTMLCanvasElement;
        this.c = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.spriteImg = new Image();
        this.spriteImg.src = spriteImg;
        if (physics == undefined) {
            this.physics = false;
        } else {
            this.physics = physics;
        }
    }

    /**
     * Update logic everyframe
     * @param delta Delta time in between frames
     */
    public abstract update(delta: number): void;

    /**
     * Renders the sprite image at its current position
     * @param canvas Canvas :p (HTMLCanvasElement)
     */
    public render(canvas: HTMLCanvasElement): void {
        this.c.drawImage(this.spriteImg, this.posX, this.posY, this.width, this.height);
    }
}
