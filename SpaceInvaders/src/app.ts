import Ship from "./Ship.js";

const tileSize: number = 32;
const rows: number = 16;
const columns: number = 16;

// const board: number;
const boardWidth: number = tileSize * columns; // 32 * 16 = 512 px
const boardHeight: number = tileSize * rows; // 32 * 16 = 512 px


// ship instantiation
const ship: Ship = new Ship(tileSize, columns, rows);


window.onload = function (): void {
  const canvas: HTMLCanvasElement = document.getElementById("board") as HTMLCanvasElement;

  canvas.width = boardWidth;
  canvas.height = boardHeight;

  const c: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D; // canvas api start

  // c.fillStyle="green";
  // c.fillRect(ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
  c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
};
