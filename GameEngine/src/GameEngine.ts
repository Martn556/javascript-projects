import Game from "./helperAPIs/Game.js";
import CanvasRenderer from "./helperAPIs/CanvasRenderer.js";

import KeyListener from "./helperAPIs/KeyListener.js";
import Player from "./Player.js";
import Test from "./Test.js";

export default class GameEngine extends Game {
    private canvas: HTMLCanvasElement;

    private player: Player;

    private keyListener: KeyListener;

    private test: Test;

    public constructor(canvas: HTMLCanvasElement) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight; // TODO: change the window size
        this.canvas.width = window.innerWidth;
        this.keyListener = new KeyListener();
        this.player = new Player(0, 0, 0, 0, "./assets/hitbox.png", false);
        this.test = new Test(0, 0, 1000, 100, "./assets/ball.png", false);
    }

    /**
     * Process all input. Called from the GameLoop.
     */
    public processInput(): void {
        if (this.keyListener.isKeyDown("ArrowLeft")) {
            this.player.moveLeft();
        }
        if (this.keyListener.isKeyDown("ArrowRight")) {
            this.player.moveRight();
        }
    }

    /**
     * Update game state. Called from the GameLoop
     *
     * @param delta time in ms elapsed from the GameLoop
     * @returns true if the game should continue
     */
    public update(delta: number): boolean {
    // this.player.update(delta);
    this.test.update(delta);
    return true;
}


    /**
     * Render all the elements in the screen.
     */
    public render(): void {
        // Clear the canvas
        CanvasRenderer.clearCanvas(this.canvas); //Dont remove this
        // this.player.render(this.canvas);
        this.test.render(this.canvas);
    }
}
