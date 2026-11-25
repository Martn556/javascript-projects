import CanvasRenderer from "./CanvasRenderer.js";

export default class Spider {
  private image: HTMLImageElement;

  private score: number;

  private posX: number;

  private posY: number;

  private speed: number;

  private width: number;

  private height: number;

  public constructor(maxX: number) {
    this.image = CanvasRenderer.loadNewImage("./assets/spider01.png");
    this.score = 0;
    this.posX = Math.random() * maxX;
    this.posY = -32;
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
    this.speed += 0.000001 * delta;
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
