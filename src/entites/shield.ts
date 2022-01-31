//---- GLOBAL VARIABLES ----//
let shield: p5.Image;
class Shield extends Entity {
    public constructor(appearance: p5.Image, x: number, y: number, size: p5.Vector) {
        super(appearance, x, y, size);
      }
    
    // draw() {
    // imageMode(CENTER);
    // image(shield, windowHeight / 2, windowWidth / 2);
    // }
}