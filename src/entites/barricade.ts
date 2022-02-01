class Barricade extends Entity  {
  
  public damageTaken: number;

  public constructor(appearance: p5.Image, x: number, y: number, size: p5.Vector) {
    super(appearance, x, y, size);
    this.damageTaken = 0;
  }

}