import Game from "./helperAPIs/Game.js";
import CanvasRenderer from "./helperAPIs/CanvasRenderer.js";
import KeyListener from "./helperAPIs/KeyListener.js";
import Player from "./Player.js";
export default class SquirrelInALab extends Game {
    canvas;
    player;
    keyListener;
    hitboxes;
    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.player = new Player(250, 350, 1500, 150, CanvasRenderer.loadNewImage("./assets/hitbox.png"), false);
        this.hitboxes = [];
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
        this.player.update(delta);
        return true;
    }
    render() {
        CanvasRenderer.clearCanvas(this.canvas);
        this.player.render(this.canvas);
        console.log(this.player);
    }
}
//# sourceMappingURL=SquirrelInALab.js.map