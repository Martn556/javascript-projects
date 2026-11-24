import Game from "./Game.js";

import CanvasRenderer from "./CanvasRenderer.js";
import Fruit from "./Fruit.js";
import Spider from "./Spider.js";
import Player from "./Player.js";

export default class FruitDrop extends Game {
  private canvas: HTMLCanvasElement;

  private fruits: Fruit[];

  private spiders: Spider[];

  private player: Player;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.fruits = [];
    this.spiders = [];
    this.fruits.push(new Fruit(canvas.width));
    this.spiders.push(new Spider(canvas.width));
    this.player = new Player(canvas.width, canvas.height);
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {

  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param delta time in ms elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(delta: number): boolean {
    for (const fruit of this.fruits) {
      fruit.update(delta);
    }
    for (const spider of this.spiders) {
      spider.update(delta);
    }
    return true;
  }

  /**
   * Render all the elements in the screen.
   */
  public render(): void {
    // Clear the canvas
    CanvasRenderer.clearCanvas(this.canvas);

    this.fruits[0].render(this.canvas);
    this.spiders[0].render(this.canvas);
    this.player.render(this.canvas);
  }
}
