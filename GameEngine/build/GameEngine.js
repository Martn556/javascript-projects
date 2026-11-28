import Game from "./helperAPIs/Game.js";
import CanvasRenderer from "./helperAPIs/CanvasRenderer.js";
import KeyListener from "./helperAPIs/KeyListener.js";
import Player from "./Player.js";
import Test from "./Test.js";
export default class GameEngine extends Game {
    canvas;
    player;
    keyListener;
    test;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.player = new Player(0, 0, 0, 0, "./assets/hitbox.png", false);
        this.test = new Test(0, 0, 0, 0, "./assets/ball.png", false);
    }
    processInput() {
        if (this.keyListener.isKeyDown("ArrowLeft")) {
            this.player.moveLeft();
        }
        if (this.keyListener.isKeyDown("ArrowRight")) {
            this.player.moveRight();
        }
    }
    update(delta) {
        this.test.update(delta);
        return true;
    }
    render() {
        CanvasRenderer.clearCanvas(this.canvas);
        this.test.render(this.canvas);
    }
}
//# sourceMappingURL=GameEngine.js.map