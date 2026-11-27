import CanvasRenderer from "./CanvasRenderer.js";
export default class Sprite {
    posX;
    posY;
    width;
    height;
    spriteImg;
    physics;
    constructor(x, y, w, h, spriteImg, physics = false) {
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.spriteImg = spriteImg;
        this.physics = physics;
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.spriteImg, this.posX, this.posY);
    }
}
//# sourceMappingURL=Sprite.js.map