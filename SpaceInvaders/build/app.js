import Alien from "./Alien.js";
import Ship from "./Ship.js";
const canvas = document.getElementById("board");
const c = canvas.getContext("2d");
const tileSize = 32;
const rows = 16;
const columns = 16;
const boardWidth = tileSize * columns;
const boardHeight = tileSize * rows;
const ship = new Ship(tileSize, columns, rows);
const aliensArray = [];
let alienRows = 2;
let alienColumns = 3;
let alienCount = 0;
window.onload = function () {
    canvas.width = boardWidth;
    canvas.height = boardHeight;
    c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
    createAliens();
    document.addEventListener("keydown", moveShip);
    requestAnimationFrame(animate);
};
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
    for (let i = 0; i < aliensArray.length; i++) {
        if (aliensArray[i].isAlive()) {
            c.drawImage(aliensArray[i].getSprite(), aliensArray[i].getX(), aliensArray[i].getY(), aliensArray[i].getWidth(), aliensArray[i].getHeight());
        }
    }
}
function moveShip(e) {
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
            aliensArray.push(new Alien(tileSize, "../assets/alien.png"));
        }
    }
    alienCount = aliensArray.length;
}
//# sourceMappingURL=app.js.map