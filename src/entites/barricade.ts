
let barricade: p5.Image;
let img;

class Barricade {
  //  private size: p5.Vector;

  //   constructor(size: p5.Vector) {
  //     this.size = size; 
  //   }
  private size: p5.Vector;
  constructor(size: p5.Vector, barricade: p5.Image, heart: p5.Image) {
    this.size = size;
    barricade = new p5.Image();
  }
  public draw() {

    const imageX = 35
    const imageY = 35
    imageMode(CENTER)
    //horizontal
    for (let x = 0; x < 4; x++) {
      // up left
      image(barricade, imageX * x + width * .5, height * .15, imageX, imageY)
      image(barricade, imageX * x + width * .5 + imageX * 5, height * .15 + imageY * 2, imageX, imageY)

      //middle-up left
      image(barricade, imageX * x + width * .08, height * .5 - imageY * 3, imageX, imageY)
      //middle-up right
      image(barricade, imageX * x + width * .92 - imageX * 3, height * .5 - imageY * 3, imageX, imageY)

      //middle-down left
      image(barricade, imageX * x + width * .08, height * .5 + imageY * 2, imageX, imageY)
      // middle-down right
      image(barricade, imageX * x + width * .92 - imageX * 3, height * .5 + imageY * 2, imageX, imageY)

      // middle-down
      image(barricade, imageX * x + width * .4, height * .7, imageX, imageY)
      image(barricade, imageX * x + width * .4 + imageX * 4, height * .7 + imageY * 4, imageX, imageY)

    }
    // vertical
    for (let y = 0; y < 4; y++) {
      // upp left
      image(barricade, width * .5 + imageX * 4, y * imageY + height * .15 - imageY, imageX, imageY)

      //middle left 
      image(barricade, width * .08 + imageX * 3, y * imageY + height * .5 - imageY * 2, imageX, imageY)

      //middle right 
      image(barricade, width * .92 - imageX * 3, y * imageY + height * .5 - imageY * 2, imageX, imageY)

      // middle
      image(barricade, width * .5 - imageX / 2, y * imageY + height * .5 - imageY * 2, imageX, imageY)
      image(barricade, width * .5 + imageX / 2, y * imageY + height * .5 - imageY * 2, imageX, imageY)
      // middle-down
      image(barricade, width * .4 + imageX * 4, y * imageY + height * .7, imageX, imageY)


    }
    for (let y = 0; y < 2; y++) {
      //  left up
      image(barricade, width * .3 - imageX / 2, y * imageY + height * .2, imageX, imageY)
      image(barricade, width * .3 - imageX / 2 + imageX, y * imageY + height * .2, imageX, imageY)
    }



  }

  barricadeShape() {

  }

  breakBarricade() {

  }
}