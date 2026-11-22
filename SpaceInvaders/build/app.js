import Ship from "./Ship.js";
const canvas = document.getElementById("board");
const c = canvas.getContext("2d");
const tileSize = 32;
const rows = 16;
const columns = 16;
const boardWidth = tileSize * columns;
const boardHeight = tileSize * rows;
const ship = new Ship(tileSize, columns, rows);
window.onload = function () {
    canvas.width = boardWidth;
    canvas.height = boardHeight;
    c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
    document.addEventListener("keydown", moveShip);
    requestAnimationFrame(animate);
};
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
}
function moveShip(e) {
    if (e.code == "ArrowLeft") {
        ship.goLeft();
    }
    else if (e.code == "ArrowRight") {
        ship.goRight();
    }
}
//# sourceMappingURL=app.js.map