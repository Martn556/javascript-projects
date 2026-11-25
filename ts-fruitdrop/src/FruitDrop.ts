import Game from "./Game.js";

import CanvasRenderer from "./CanvasRenderer.js";
import Fruit from "./Fruit.js";
import Spider from "./Spider.js";
import Player from "./Player.js";
import KeyListener from "./KeyListener.js";

export default class FruitDrop extends Game {
  private canvas: HTMLCanvasElement;

  private player: Player;

  private fruits: Fruit[];

  private spiders: Spider[];

  private keyListener: KeyListener;

  private score: number;

  private timeLeft: number;

  private timeToNextItem: number;


  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.player = new Player(canvas.width, canvas.height);
    this.fruits = [];
    this.spiders = [];
    this.keyListener = new KeyListener();
    this.score = 0;
    this.timeLeft = 60;
    this.timeToNextItem = 320;
    this.fruits.push(new Fruit(canvas.width));
    this.spiders.push(new Spider(canvas.width));
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
    for (let i: number = 0; i < this.fruits.length; i++) {
      this.fruits[i].update(delta);

      // if (this.player.isCollidingFruit(this.fruits[i])) {
      //   this.fruits.splice(i, 1);
      //   i -= 1;
      // }

      console.log(this.player.isCollidingFruit(this.fruits[i]));


      if (this.fruits[i].getPosY() > this.canvas.height) {
        this.fruits.splice(i, 1);
        i -= 1;
      }
    }
    // for (const fruit of this.fruits) {
    //   fruit.update(delta);
    //   if (this.player.isCollidingFruit(fruit)) {
    //     fruit.splice(i, 1);
    //   }
    // }
    for (let i: number = 0; i < this.spiders.length; i++) {
      this.spiders[i].update(delta);

      if (this.spiders[i].getPosY() > this.canvas.height) {
        this.spiders.splice(i, 1);
        i -= 1;
      }
    }

    this.player.update(delta);

    this.timeToNextItem -= delta;
    if (this.timeToNextItem < 0) {
      this.fruits.push(new Fruit(this.canvas.width));
      this.fruits.push(new Fruit(this.canvas.width));
      this.spiders.push(new Spider(this.canvas.width));

      this.timeToNextItem = Math.random() * 300;
      // this.timeToNextItem = 320;
    }

    this.timeLeft -= 0.001 * delta;
    if (this.timeLeft <= 0.1) {
      console.log("Display Game over");
      // why are you not displaying the text :/
      CanvasRenderer.writeText(this.canvas, `GAME OVER points: ${this.score}`, 14, 70, "start", "Arial", 90, "white");
      return false;
    }

    return true;
  }

  /**
   * Render all the elements in the screen.
   */
  public render(): void {
    // Clear the canvas
    CanvasRenderer.clearCanvas(this.canvas);

    for (let i: number = 0; i < this.spiders.length; i++) {
      this.spiders[i].render(this.canvas);
    }
    for (let i: number = 0; i < this.fruits.length; i++) {
      this.fruits[i].render(this.canvas);
    }

    CanvasRenderer.writeText(this.canvas, `${this.timeLeft.toFixed(0)}`, 14, 70, "start", "Arial", 90, "white");
    this.player.render(this.canvas);
  }
}
