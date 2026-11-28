import Game from "./helperAPIs/Game.js";

import KeyListener from "./helperAPIs/KeyListener.js";
import Player from "./Player.js";
import Sprite from "./helperAPIs/Sprite.js";
// import Hitbox from "./helperAPIs/Hitbox.js";

export default class SquirrelInALab extends Game {
    private canvas: HTMLCanvasElement;

    private c: CanvasRenderingContext2D;

    private player: Player;

    private keyListener: KeyListener;

    private hitboxes: Sprite[];


    public constructor(canvas: HTMLCanvasElement) {
        super();
        this.canvas = canvas;
        this.canvas.height = window.innerHeight; // TODO: change the window size
        this.canvas.width = window.innerWidth;
        this.c = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.keyListener = new KeyListener();
        this.player = new Player(0, 350, 1500, 150, "./assets/hitbox.png", false);
        this.hitboxes = [];
        // this.hitboxes.push(new Hitbox(0, 250, canvas.width, canvas.height, CanvasRenderer.loadNewImage("./assets/hitbox.png"), false));
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
    this.player.update(delta);
    return true;
}


    /**
     * Render all the elements in the screen.
     */
    public render(): void {
        // Clear the canvas
        // CanvasRenderer.clearCanvas(this.canvas); //Dont remove this
        this.c.clearRect(0, 0, innerWidth, innerHeight);
        this.player.render(this.canvas);
        console.log(this.player);
        
        // this.hitboxes[0].render(this.canvas);
    }
}
