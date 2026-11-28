import CanvasRenderer from "./CanvasRenderer.js";
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

    public override update(delta: number): void {
        //do something
    }
    // CanvasRenderer.loadNewImage("./assets/playerph.svg"))
}