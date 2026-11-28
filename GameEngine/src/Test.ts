import CanvasRenderer from "./helperAPIs/CanvasRenderer.js";
import Sprite from "./helperAPIs/Sprite.js";

export default class Test extends Sprite {
    public constructor(x: number,
        y: number,
        w: number,
        h: number,
        spriteImg: string,
        physics: boolean) {
        super(x, y, w, h, spriteImg, physics);
    }

    /**
     * blah
     * @param delta blah blah
     */
    public override update(delta: number): void {
        this.posX += 0 * delta;
    }

    // public override render(canvas: HTMLCanvasElement): void {
    //     CanvasRenderer.drawImageAndStrech(canvas, this.spriteImg, this.posX, this.posX, this.width, this.height);
    // }
}
