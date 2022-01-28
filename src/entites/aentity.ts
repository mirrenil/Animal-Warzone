class Entity {
    protected appearance: p5.Image;
    public x: number;
    public y: number;
    public size: p5.Vector;
    public velocity: p5.Vector;

    constructor(appearance: p5.Image, x: number, y: number, size: p5.Vector, velocity?: p5.Vector) {
        this.appearance = appearance;
        this.x = x;
        this.y = y;
        this.size = size;
        this.velocity = velocity || createVector(0, 0);
    }

    public update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

    public draw() {
        push();
        imageMode(CORNER);
        image(this.appearance, this.x, this.y, this.size.x, this.size.y);
        pop();
    }

}