export default abstract class Physics {
    private gravity: number;

    private yVel: number;

    private weight: number;

    //TODO figure out how to use dot products to make better colision
    // ! x1 * x2 + y1 * y2 (dot product formula)
    // https://www.youtube.com/watch?v=nXrEX6j-Mws

    public constructor() {
        this.gravity = 3;
        this.yVel = 0;
        this.weight = 0;
    }

    /**
     * Test method
     * @param delta Delta time
     * @returns The graivty
     */
    protected updatePhysics(delta: number): number {
        // this.yVel -= this.gravity * delta;
        return this.gravity * delta;
    }
}
