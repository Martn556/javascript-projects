import Sprite from "./Sprite.js";

export default class Hitbox extends Sprite {
    public constructor(
        x: number,
        y: number,
        w: number,
        h: number,
        spriteImg: HTMLImageElement,
        physics: boolean) {
        super(x, y, w, h, spriteImg, physics);
    }

    /**
     * I hate you so much (Glados)
     * @param delta i hate you
     */
    public override update(delta: number): void {
        //do something
        this.posX += 0 * delta;
    }
    // CanvasRenderer.loadNewImage("./assets/playerph.svg"))
}
