import CanvasRenderer from "./CanvasRenderer.js";
export default class Sprite {
    posX;
    posY;
    width;
    height;
    spriteImg;
    physics;
    constructor(x, y, w, h, spriteImg, physics) {
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.spriteImg = CanvasRenderer.loadNewImage(spriteImg);
        if (physics == undefined) {
            this.physics = false;
        }
        else {
            this.physics = physics;
        }
    }
    render(canvas) {
        CanvasRenderer.drawImage(canvas, this.spriteImg, this.posX, this.posY);
    }
}
//# sourceMappingURL=Sprite.js.map