import CanvasRenderer from "./helperAPIs/CanvasRenderer.js";
import Sprite from "./helperAPIs/Sprite.js";
export default class Ball extends Sprite {
    constructor() {
        super(200, 200, 20, 20, CanvasRenderer.loadNewImage("./assets/ball.png"), true);
        this.posX = 200;
        this.posY = 200;
        this.spriteImg = CanvasRenderer.loadNewImage("./assets/ball.png");
    }
    update() {
        console.log("ran");
    }
}
//# sourceMappingURL=Ball.js.map