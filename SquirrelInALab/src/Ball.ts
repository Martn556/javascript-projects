import CanvasRenderer from "./helperAPIs/CanvasRenderer.js";
import Sprite from "./helperAPIs/Sprite.js";

export default class Ball extends Sprite {
    public constructor() {
        super(200, 200, 20, 20, CanvasRenderer.loadNewImage("./assets/ball.png"), true);
        this.posX = 200;
        this.posY = 200;
        this.spriteImg = CanvasRenderer.loadNewImage("./assets/ball.png");
    }

    public update(): void {
        console.log("ran");
    }
}
