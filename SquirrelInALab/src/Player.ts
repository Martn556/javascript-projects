
import Sprite from "./helperAPIs/Sprite.js";

export default class Player extends Sprite {
    private speed: number;


    private velocityY: number;


    private isJumping: boolean;


    private groundY: number;


    private gravity: number;


    private movingRight: boolean;


    private movingLeft: boolean;


    private jumping: boolean;

    public constructor(
        x: number,
        y: number,
        w: number,
        h: number,
        spriteImg: HTMLImageElement,
        physics: boolean
    ) {
        super(x, y, w, h, spriteImg, physics);
        this.speed = 2;
        this.velocityY = 0;
        this.isJumping = false;
        this.groundY = 350;
        this.gravity = 0.001;
        this.movingLeft = false;
        this.movingRight = false;
        this.jumping = false;
    }

    /**
     * go left
     */
    public moveLeft(): void {
        this.movingLeft = true;
    }

    /**
     * stop left
     */
    public stopMovingLeft(): void {
        this.movingLeft = false;
    }

    /**
     * go right
     */
    public moveRight(): void {
        this.movingRight = true;
    }

    /**
     * stop right
     */
    public stopMovingRight(): void {
        this.movingRight = false;
    }

    /**
     * wehhh jump
     */
    public jump(): void {
        this.jumping = true;
    }

    /**
     * idk fix this later or smth
     */
    public updateJump(delta: number): void {
        if (this.jumping && !this.isJumping) {
            this.velocityY = -0.6;
            this.isJumping = true;
            this.jumping = false;
        }

        if (this.isJumping) {
            this.posY += this.velocityY * delta;
            this.velocityY += this.gravity * delta;
        }

        if (this.posY >= this.groundY) {
            this.posY = this.groundY;
            this.velocityY = 0;
            this.isJumping = false;
        }
    }

    /**
     * overridden update from sprite
     */
    public override update(delta: number): void {
    if (this.movingLeft) {
        this.posX -= this.speed * delta;
        this.movingLeft = false;
    }

    if (this.movingRight) {
        this.posX += this.speed * delta;
        this.movingRight = false;
    }

    this.updateJump(delta);
}
}
