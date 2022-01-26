class Barricade extends Entity  {
  //  private size: p5.Vector;

  //   constructor(size: p5.Vector) {
  //     this.size = size; 
  //   }

  
  public constructor(appearance: p5.Image, x: number, y: number, size: p5.Vector) {
    super(appearance, x, y, size);
  }

  // public draw() {
  //   image(barricade, imageX * x + width * .5, height * .15, imageX, imageY)
  // }

  breakBarricade() {

  }
}