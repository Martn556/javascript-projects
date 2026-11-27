export default class Physics {
    gravity;
    yVel;
    constructor() {
        this.gravity = 3;
        this.yVel = 0;
    }
    updatePhysics(delta) {
        return this.gravity * delta;
    }
}
//# sourceMappingURL=Physics.js.map