import Game from "./helperAPIs/Game.js";
import CanvasRenderer from "./helperAPIs/CanvasRenderer.js";
import KeyListener from "./helperAPIs/KeyListener.js";
import Player from "./Player.js";
import Hitbox from "./helperAPIs/Hitbox.js";
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
        this.player = new Player(250, 350, 50, 30, CanvasRenderer.loadNewImage("./assets/playerph.svg"), false);
        this.hitboxes = [];
        this.hitboxes.push(new Hitbox(0, 250, canvas.width, 150, CanvasRenderer.loadNewImage("./assets/hitbox.png"), false));
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
        console.log(this.hitboxes);
        this.hitboxes[0].render(this.canvas);
    }
}
//# sourceMappingURL=SquirrelInALab.js.map