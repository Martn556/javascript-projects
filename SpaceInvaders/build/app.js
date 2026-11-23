import Alien from "./Alien.js";
import Bullet from "./Bullet.js";
import Ship from "./Ship.js";
const canvas = document.getElementById("board");
const c = canvas.getContext("2d");
const tileSize = 32;
const rows = 16;
const columns = 16;
const boardWidth = tileSize * columns;
const boardHeight = tileSize * rows;
const ship = new Ship(tileSize, columns, rows, canvas.width);
let aliensArray = [];
let alienRows = 2;
let alienColumns = 3;
let alienCount = 0;
let alienVel = 1;
let bulletsArray = [];
let score = 0;
let gameOver = false;
window.onload = function () {
    canvas.width = boardWidth;
    canvas.height = boardHeight;
    c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
    createAliens();
    document.addEventListener("keydown", moveShip);
    document.addEventListener("keyup", shoot);
    requestAnimationFrame(animate);
};
function animate() {
    if (gameOver) {
        return;
    }
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
    for (let i = 0; i < aliensArray.length; i++) {
        if (aliensArray[i].isAlive()) {
            aliensArray[i].moveRight();
            if (aliensArray[i].getX() + aliensArray[i].getWidth() >= canvas.width ||
                aliensArray[i].getX() <= 0) {
                for (let j = 0; j < aliensArray.length; j++) {
                    aliensArray[j].flipVelocity();
                    aliensArray[j].moveByRow(1);
                }
            }
            c.drawImage(aliensArray[i].getSprite(), aliensArray[i].getX(), aliensArray[i].getY(), aliensArray[i].getWidth(), aliensArray[i].getHeight());
        }
        if (aliensArray[i].getY() >= ship.getY()) {
            gameOver = true;
        }
    }
    for (let i = 0; i < bulletsArray.length; i++) {
        const bullet = bulletsArray[i];
        bullet.update();
        c.fillStyle = "white";
        c.fillRect(bullet.getX(), bullet.getY(), bullet.getWidth(), bullet.getHeight());
        for (let j = 0; j < aliensArray.length; j++) {
            const alien = aliensArray[j];
            if (!bullet.isUsed() && alien.isAlive() && detectCollision(bullet, alien)) {
                bullet.hit();
                alien.died();
                alienCount -= 1;
                score += 100;
            }
        }
    }
    while (bulletsArray.length > 0 && (bulletsArray[0].isUsed() || bulletsArray[0].getY() < 0)) {
        bulletsArray.splice(0, 1);
    }
    if (alienCount == 0) {
        alienColumns = Math.min(alienColumns + 1, columns / 2 - 2);
        alienRows = Math.min(alienRows + 1, rows - 4);
        alienVel += 0.2;
        aliensArray = [];
        bulletsArray = [];
        createAliens();
    }
    c.fillStyle = "white";
    c.font = "16px courier";
    c.fillText(`${score}`, 5, 20);
}
function moveShip(e) {
    if (gameOver) {
        return;
    }
    if (e.code == "ArrowLeft" && ship.getX() - ship.getVelocity() >= 0) {
        ship.goLeft();
    }
    else if (e.code == "ArrowRight" && ship.getX() + ship.getVelocity() + ship.getWidth() <= canvas.width) {
        ship.goRight();
    }
}
function createAliens() {
    for (let i = 0; i < alienColumns; i++) {
        for (let j = 0; j < alienRows; j++) {
            aliensArray.push(new Alien(tileSize, "../assets/alien.png", i, j, alienVel));
        }
    }
    alienCount = aliensArray.length;
}
function shoot(e) {
    if (gameOver) {
        return;
    }
    if (e.code == "Space") {
        bulletsArray.push(new Bullet(ship.getX(), ship.getY(), ship.getWidth(), tileSize));
    }
}
function detectCollision(a, b) {
    return a.getX() < b.getX() + b.getWidth() &&
        a.getX() + a.getWidth() > b.getX() &&
        a.getY() < b.getY() + b.getHeight() &&
        a.getY() + a.getHeight() > b.getY();
}
//# sourceMappingURL=app.js.map