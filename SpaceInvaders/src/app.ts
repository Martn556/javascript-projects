import Alien from "./Alien.js";
import Bullet from "./Bullet.js";
import Ship from "./Ship.js";

const canvas: HTMLCanvasElement = document.getElementById("board") as HTMLCanvasElement;

const c: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D; // canvas api start

// TODO: CHALLENGES, random colour to aliens, aliens randomly fire back, add a game over screen
const tileSize: number = 32;
const rows: number = 16;
const columns: number = 16;

// const board: number;
const boardWidth: number = tileSize * columns; // 32 * 16 = 512 px
const boardHeight: number = tileSize * rows; // 32 * 16 = 512 px


// ship instantiation
const ship: Ship = new Ship(tileSize, columns, rows, canvas.width);

// alien instantiation
// const aliensArray: Alien[] = [];
let aliensArray: Alien[] = [];
let alienRows: number = 2;
let alienColumns: number = 3;
let alienCount: number = 0;
let alienVel: number = 1;

// Bullets
// const bulletsArray: Bullet[] = [];
let bulletsArray: Bullet[] = [];

// PlayerScore
let score: number = 0;
let gameOver: boolean = false;

window.onload = function (): void {
  canvas.width = boardWidth;
  canvas.height = boardHeight;

  // c.fillStyle="green";
  // c.fillRect(ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
  c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
  createAliens();
  document.addEventListener("keydown", moveShip);
  document.addEventListener("keyup", shoot);
  requestAnimationFrame(animate);
};


function animate(): void {
  if (gameOver) {
    return;
  }
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  // draw ship
  c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());

  // aliens
  for (let i: number = 0; i < aliensArray.length; i++) {
    if (aliensArray[i].isAlive()) {
      // make the alien movment a method
      aliensArray[i].moveRight();
      if (aliensArray[i].getX() + aliensArray[i].getWidth() >= canvas.width ||
        aliensArray[i].getX() <= 0) {
        for (let j: number = 0; j < aliensArray.length; j++) {
          aliensArray[j].flipVelocity();
          aliensArray[j].moveByRow(1);
        }
      }
      c.drawImage(aliensArray[i].getSprite(),
        aliensArray[i].getX(),
        aliensArray[i].getY(),
        aliensArray[i].getWidth(),
        aliensArray[i].getHeight());
    }
    // If the arrays reach the same y as the player game over is set to true
    if (aliensArray[i].getY() >= ship.getY()){
      gameOver = true;
    }
  }

  // Bullets
  for (let i: number = 0; i < bulletsArray.length; i++) {
    const bullet: Bullet = bulletsArray[i]; // so smart :sob:
    bullet.update();
    c.fillStyle = "white";
    c.fillRect(bullet.getX(), bullet.getY(), bullet.getWidth(), bullet.getHeight());

    // Bullet collision with aliens
    for (let j: number = 0; j < aliensArray.length; j++) {
      const alien: Alien = aliensArray[j];
      if (!bullet.isUsed() && alien.isAlive() && detectCollision(bullet, alien)) {
        bullet.hit();
        alien.died();
        alienCount -= 1;
        score += 100;
      }
    }
  }

  // Clear bullets
  while (bulletsArray.length > 0 && (bulletsArray[0].isUsed() || bulletsArray[0].getY() < 0)) {
    bulletsArray.splice(0, 1);
  }

  // next level (if all aliens are dead)
  if (alienCount == 0) {
    // Increase the number of aliens in columns and rows by 1
    alienColumns = Math.min(alienColumns + 1, columns / 2 - 2); // cap is at 16 / 2 - 2 = 6 Max rows of aliens
    alienRows = Math.min(alienRows + 1, rows - 4); // cap at 16 - 4 = 12
    alienVel += 0.2; // increases the alien movement speed
    aliensArray = [];
    bulletsArray = [];
    createAliens();
  }

  // score display
  c.fillStyle = "white";
  c.font = "16px courier";
  c.fillText(`${score}`, 5, 20);
}

function moveShip(e: KeyboardEvent): void { // make this a method inside ship
  if (gameOver) { // this is to deal with the asynchronus bs
    return;
  }
  if (e.code == "ArrowLeft" && ship.getX() - ship.getVelocity() >= 0) {
    ship.goLeft();
  } else if (e.code == "ArrowRight" && ship.getX() + ship.getVelocity() + ship.getWidth() <= canvas.width) {
    ship.goRight();
  }
}


function createAliens(): void {
  for (let i: number = 0; i < alienColumns; i++) {
    for (let j: number = 0; j < alienRows; j++) {
      aliensArray.push(new Alien(tileSize, "../assets/alien.png", i, j, alienVel));
    }
  }
  alienCount = aliensArray.length;
}

function shoot(e: KeyboardEvent): void {
  if (gameOver) { // this is to deal with the asynchronus bs
    return;
  }
  if (e.code == "Space") {
    bulletsArray.push(new Bullet(ship.getX(), ship.getY(), ship.getWidth(), tileSize));
  }
}

/**
 * Square collision detection (USE TRY CATCHING FOR THIS ^^)
 * @param a object
 * @param b object
 * @returns boolean
 */
function detectCollision(a: any, b: any): boolean {
  return a.getX() < b.getX() + b.getWidth() && // a's top left corner doesnt reach b's top right corner
    a.getX() + a.getWidth() > b.getX() && // a's top right passes b's top left corner
    a.getY() < b.getY() + b.getHeight() && // a's top left corner doesnt reach b's bottom left corner
    a.getY() + a.getHeight() > b.getY(); // a's bottom left corner passes b's top left corner
}

