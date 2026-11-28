export default class Physics {
    gravity;
    yVel;
    weight;
    constructor() {
        this.gravity = 3;
        this.yVel = 0;
        this.weight = 0;
    }
    updatePhysics(delta) {
        return this.gravity * delta;
    }
}
//# sourceMappingURL=Physics.js.map