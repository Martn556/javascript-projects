import Ship from "./Ship.js";

const canvas: HTMLCanvasElement = document.getElementById("board") as HTMLCanvasElement;

const c: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D; // canvas api start


const tileSize: number = 32;
const rows: number = 16;
const columns: number = 16;

// const board: number;
const boardWidth: number = tileSize * columns; // 32 * 16 = 512 px
const boardHeight: number = tileSize * rows; // 32 * 16 = 512 px


// ship instantiation
const ship: Ship = new Ship(tileSize, columns, rows);


window.onload = function (): void {
  canvas.width = boardWidth;
  canvas.height = boardHeight;

  // c.fillStyle="green";
  // c.fillRect(ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
  c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
  document.addEventListener("keydown", moveShip);
  requestAnimationFrame(animate);
};


function animate(): void {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
}

function moveShip(e: any): void {
  if(e.code == "ArrowLeft") {
    ship.goLeft();
  } else if (e.code == "ArrowRight") {
    ship.goRight();
  }
}
