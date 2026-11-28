import Sprite from "./Sprite.js";
export default class Hitbox extends Sprite {
    constructor(x, y, w, h, spriteImg, physics) {
        super(x, y, w, h, spriteImg, physics);
    }
    update(delta) {
        this.posX += 0 * delta;
    }
}
//# sourceMappingURL=Hitbox.js.map