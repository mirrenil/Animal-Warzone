class Barricade extends Entity  {
  //  private size: p5.Vector;
  public damageTaken: number;

  //   constructor(size: p5.Vector) {
  //     this.size = size; 
  //   }

  
  public constructor(appearance: p5.Image, x: number, y: number, size: p5.Vector) {
    super(appearance, x, y, size);
    this.damageTaken = 0;
  }

  // public draw() {
  //   image(barricade, imageX * x + width * .5, height * .15, imageX, imageY)

  // private size: p5.Vector;
  // constructor(x: number, y: number, width: number, height: number) {
  //   this.size = size;
  //   super(barricade)
  // }
  
  // public draw() {
  //   image(barricade, imageX * x + width * .5, height * .15, imageX, imageY)
  // }

  // barricadeShape() {


  // }

  // breakBarricade() {

  // }
}