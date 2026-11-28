import GameEngine from "./GameEngine.js";

const gameEngine: GameEngine = new GameEngine(document.getElementById("game") as HTMLCanvasElement);

window.addEventListener("load", () => {
  gameEngine.start();
});
