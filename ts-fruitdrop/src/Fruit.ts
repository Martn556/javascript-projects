import CanvasRenderer from "./CanvasRenderer.js";

export default class Fruit {
  private image: HTMLImageElement;

  private score: number;

  private posX: number;

  private posY: number;

  private speed: number;

  private width: number;

  private height: number;

  public constructor(maxX: number) {
    this.image = CanvasRenderer.loadNewImage("./assets/fruit-banana.png");
    this.score = 0;
    const rndNumb: number = Math.random();
    if (0.1 > rndNumb) {
      this.score = 10;
      this.image = CanvasRenderer.loadNewImage("./assets/fruit-cherries.png");
    } else if (0.3 > rndNumb) {
      this.score = 7;
      this.image = CanvasRenderer.loadNewImage("./assets/fruit-strawberry.png");
    } else if (0.6 > rndNumb) {
      this.score = 5;
      this.image = CanvasRenderer.loadNewImage("./assets/fruit-orange.png");
    } else if (0.8 > rndNumb) {
      this.score = 3;
      this.image = CanvasRenderer.loadNewImage("./assets/fruit-grapes.png");
    } else if (1 >= rndNumb) {
      this.score = 1;
      this.image = CanvasRenderer.loadNewImage("./assets/fruit-banana.png");
    }
    this.posX = Math.random() * maxX;
    this.posY = -60;
    this.speed = 0.3;
    this.width = 32;
    this.height = 32;
  }

  /**
   * All the logic of the falling fruit
   * @param delta delta of the refresh rate
   */
  public update(delta: number): void {
    this.posY += this.speed * delta;
    this.speed += 0.0001 * delta;
  }

  /**
   * Renders that image initialised in the constructor
   * @param canvas canvas element
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }
}
