import CanvasRenderer from "./CanvasRenderer.js";

export default class Player {
  private images: HTMLImageElement;

  private posX: number;

  private posY: number;

  private maxX: number;

  private speed: number;

  private moveingLeft: boolean; // flag

  private moveingRight: boolean;

  private width: number;

  private height: number;

  public constructor(maxX: number, maxY: number) {
    this.width = 103;
    this.height = 60;
    this.images = CanvasRenderer.loadNewImage("./assets/basket.png");
    this.posX = maxX / 2 - this.width / 2;
    this.posY = maxY * 90 / 100;
    this.maxX = maxX;
    this.speed = 10;
    this.moveingLeft = false;
    this.moveingRight = false;
  }

  public moveLeft(): void {
    this.moveingLeft = true;
  }

  public moveRight(): void {
    this.moveingRight = true;
  }

  public update(canvas: HTMLCanvasElement): void {
    if (this.moveingLeft) {
      this.posX -= this.speed;
    }
  }

  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.images, this.posX, this.posY);
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
