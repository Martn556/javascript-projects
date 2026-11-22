import Alien from "./Alien.js";
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

// alien instantiation
const aliensArray: Alien[] = [];
let alienRows: number = 2;
let alienColumns: number = 3;
let alienCount: number = 0;


window.onload = function (): void {
  canvas.width = boardWidth;
  canvas.height = boardHeight;

  // c.fillStyle="green";
  // c.fillRect(ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
  c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
  createAliens();
  document.addEventListener("keydown", moveShip);
  requestAnimationFrame(animate);
};


function animate(): void {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
  for (let i: number = 0; i < aliensArray.length; i++) {
    if (aliensArray[i].isAlive()){
      c.drawImage(aliensArray[i].getSprite(),
        aliensArray[i].getX(),
        aliensArray[i].getY(),
        aliensArray[i].getWidth(),
        aliensArray[i].getHeight());
    }
  }
}

function moveShip(e: any): void { // make this a method inside ship
  if (e.code == "ArrowLeft" && ship.getX() - ship.getVelocity() >= 0) {
    ship.goLeft();
  } else if (e.code == "ArrowRight" && ship.getX() + ship.getVelocity() + ship.getWidth() <= canvas.width) {
    ship.goRight();
  }
}


function createAliens(): void {
  for (let i: number = 0; i < alienColumns; i++) {
    for (let j: number = 0; j < alienRows; j++) {
      aliensArray.push(new Alien(tileSize, "../assets/alien.png"));
    }
  }
  alienCount = aliensArray.length;
}
