import SquirrelInALab from "./SquirrelInALab.js";

const squirrelInALab: SquirrelInALab = new SquirrelInALab(document.getElementById("game") as HTMLCanvasElement);

window.addEventListener("load", () => {
  squirrelInALab.start();
});
