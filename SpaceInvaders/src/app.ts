const canvas: HTMLCanvasElement = document.getElementById("board") as HTMLCanvasElement;

const c: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

c.fillStyle = "green";
c.fillRect(10, 10, 150, 80);