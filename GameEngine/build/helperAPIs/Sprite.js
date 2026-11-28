export default class Sprite {
    canvas;
    c;
    posX;
    posY;
    width;
    height;
    spriteImg;
    physics;
    constructor(x, y, w, h, spriteImg, physics) {
        this.canvas = document.getElementById("game");
        this.c = this.canvas.getContext("2d");
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.spriteImg = new Image();
        this.spriteImg.src = spriteImg;
        if (physics == undefined) {
            this.physics = false;
        }
        else {
            this.physics = physics;
        }
    }
    render(canvas) {
        this.c.drawImage(this.spriteImg, this.posX, this.posY, this.width, this.height);
    }
}
//# sourceMappingURL=Sprite.js.map