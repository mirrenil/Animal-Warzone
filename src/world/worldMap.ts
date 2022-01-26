class WorldMap {
  createGrid(){

  }
  setBackGround(){

  }
  initRandomizedBoard(){

  }
  darw(){

  }
  protected appearance: p5.Image;
  protected x: number;
  protected y: number;
  public size: p5.Vector;
  constructor (appearance: p5.Image, x: number, y: number, size: p5.Vector){
    this.appearance = appearance;
    this.x = x;
    this.y = y;
    this.size = createVector(0.0);
  }

  public getEntities() {
    const entities: Entity[] = [];
    const imageX = 45
    const imageY = 45

    //horizontal
    for (let x = 0; x < 4; x++) {
      // up left
      entities.push(new Barricade(barricade, imageX * x + width * .02 + imageX * 2, height * .5 - imageY * 4, this.size))
      entities.push(new Barricade(barricade,imageX * x + width * .5, height * .15 + imageY * 2, this.size))

      //middle-up left
      // entities.push(new Barricade(imageX * x + width * .08, height * .5 - imageY * 3, imageX, imageY))
      // //middle-up right
      // entities.push(new Barricade(imageX * x + width * .92 - imageX * 3, height * .5 - imageY * 3, imageX, imageY))

      // //middle-down left
      // entities.push(new Barricade(imageX * x + width * .08, height * .5 + imageY * 2, imageX, imageY))
      // // middle-down right
      // entities.push(new Barricade(imageX * x + width * .92 - imageX * 3, height * .5 + imageY * 2, imageX, imageY))

      // // middle-down
      // entities.push(new Barricade(imageX * x + width * .4, height * .7, imageX, imageY))
      // entities.push(new Barricade(imageX * x + width * .4 + imageX * 4, height * .7 + imageY * 4, imageX, imageY))

    }
    // vertical
    for (let y = 0; y < 4; y++) {
      // upp left
      // entities.push(new Barricade(width * .5 + imageX * 4, y * imageY + height * .15 - imageY, imageX, imageY))

      // //middle left 
      // entities.push(new Barricade(width * .08 + imageX * 3, y * imageY + height * .5 - imageY * 2, imageX, imageY))

      // //middle right 
      // entities.push(new Barricade(width * .92 - imageX * 3, y * imageY + height * .5 - imageY * 2, imageX, imageY))

      // // middle
      // entities.push(new Barricade(width * .5 - imageX / 2, y * imageY + height * .5 - imageY * 2, imageX, imageY))
      // entities.push(new Barricade(width * .5 + imageX / 2, y * imageY + height * .5 - imageY * 2, imageX, imageY))
      // // middle-down
      // entities.push(new Barricade(width * .4 + imageX * 4, y * imageY + height * .7, imageX, imageY))


    }
    for (let y = 0; y < 2; y++) {
      //  left up
      // entities.push(new Barricade(width * .3 - imageX / 2, y * imageY + height * .2, imageX, imageY))
      // entities.push(new Barricade(width * .3 - imageX / 2 + imageX, y * imageY + height * .2, imageX, imageY))
    }

    return entities;
  }
}
}