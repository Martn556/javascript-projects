import Sprite from "./helperAPIs/Sprite.js";
export default class Test extends Sprite {
    constructor(x, y, w, h, spriteImg, physics) {
        super(x, y, w, h, spriteImg, physics);
    }
    update(delta) {
        this.posX += 0 * delta;
    }
}
//# sourceMappingURL=Test.js.map