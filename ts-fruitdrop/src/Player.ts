import CanvasRenderer from "./CanvasRenderer.js";
import Fruit from "./Fruit.js";
import FruitDrop from "./FruitDrop.js";
import Spider from "./Spider.js";

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
    this.speed = 1;
    this.moveingLeft = false;
    this.moveingRight = false;
  }

  /**
   * Sets a flag that tells the player to move left during update
   */
  public moveLeft(): void {
    this.moveingLeft = true;
  }

  /**
   *  Sets a flag that tells the player to move right during update
   */
  public moveRight(): void {
    this.moveingRight = true;
  }

  public isCollidingFruit(fruit: Fruit): boolean {
    return (fruit.getPosX() + fruit.getWidth() > this.posX) &&
           (fruit.getPosX() < this.posX + this.width) &&
           (fruit.getPosY() + fruit.getHeight() > this.posY) &&
           (fruit.getPosY() < this.posY + this.height);
  }

  // public isCollidingSpider(spider: Spider): boolean {

  // }

  public update(delta: number): void {
    if (this.moveingLeft && this.posX > 0) {
      this.posX -= this.speed * delta;
    }

    if (this.moveingRight && this.posX + this.width < this.maxX) {
      this.posX += this.speed * delta;
    }

    this.moveingLeft = false;
    this.moveingRight = false;
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
