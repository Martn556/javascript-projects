import Ship from "./Ship.js";
const tileSize = 32;
const rows = 16;
const columns = 16;
const boardWidth = tileSize * columns;
const boardHeight = tileSize * rows;
const ship = new Ship(tileSize, columns, rows);
window.onload = function () {
    const canvas = document.getElementById("board");
    canvas.width = boardWidth;
    canvas.height = boardHeight;
    const c = canvas.getContext("2d");
    c.drawImage(ship.getSprite(), ship.getX(), ship.getY(), ship.getWidth(), ship.getHeight());
};
//# sourceMappingURL=app.js.map