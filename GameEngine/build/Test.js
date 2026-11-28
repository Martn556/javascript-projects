import CanvasRenderer from "./helperAPIs/CanvasRenderer.js";
import Sprite from "./helperAPIs/Sprite.js";
export default class Test extends Sprite {
    constructor(x, y, w, h, spriteImg, physics) {
        super(x, y, w, h, spriteImg, physics);
    }
    update(delta) {
        this.posX += 0 * delta;
    }
    render(canvas) {
        CanvasRenderer.drawImageAndStrech(canvas, this.spriteImg, this.posX, this.posX, this.width, this.height);
    }
}
//# sourceMappingURL=Test.js.map