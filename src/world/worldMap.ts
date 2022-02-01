class WorldMap {
  protected appearance: p5.Image;
  protected x: number;
  protected y: number;
  public size: p5.Vector;
  constructor (appearance: p5.Image, x: number, y: number, size: p5.Vector){
    this.appearance = appearance;
    this.x = x;
    this.y = y;
    this.size = createVector(40, 40);
  }

  public getEntities() {
    const entities: Entity[] = [];
    const imageX = 40
    const imageY = 40
    entities.push(new ExtraLife(entites.redHeart, width * .6 - imageX , height * .16 + imageX, this.size ));
    entities.push(new ExtraLife(entites.redHeart, width * .4 - imageX , height * .7 + imageY, this.size ));
    
    entities.push(new Shield(entites.shield, width * .6 - imageX, height * .16 - imageY, this.size ));
    entities.push(new Shield(entites.shield, width * .4 + imageX, height * .7 + imageX * 2, this.size ));


    entities.push(new Speed(entites.speed, width * .4 - imageX , height * .7 + imageX * 3, this.size ));
    entities.push(new Speed(entites.speed, width * .4 - imageX , height * .4 + imageX * 3, this.size ));

    //horizontal
    for (let x = 0; x < 4; x++) {
      // up right
      entities.push(new Barricade(entites.barricade, imageX * x + width * .5, height * .16, this.size ));
      entities.push(new Barricade(entites.barricade, imageX * x + width * .5 + imageX * 5, height * .16 + imageY * 2, this.size));

      //middle-up left
      entities.push(new Barricade(entites.barricade, imageX * x + width * .08, height * .5 - imageY * 3, this.size));
      //middle-up right
      entities.push(new Barricade(entites.barricade, imageX * x + width * .92 - imageX * 3, height * .5 - imageY * 3, this.size));

      //middle-down left
      entities.push(new Barricade(entites.barricade, imageX * x + width * .08, height * .5 + imageY * 2, this.size));
      // middle-down right
      entities.push(new Barricade(entites.barricade, imageX * x + width * .92 - imageX * 3, height * .5 + imageY * 2, this.size));

      // middle-down
      entities.push(new Barricade(entites.barricade, imageX * x + width * .3, height * .7, this.size));
      entities.push(new Barricade(entites.barricade, imageX * x + width * .3 + imageX * 5, height * .7 + imageY * 3, this.size));

    }
    // vertical
    for (let y = 0; y < 4; y++) {
      // upp right
      entities.push(new Barricade(entites.barricade, width * .5 + imageX * 4, y * imageY + height * .16 - imageY, this.size));


      //middle left 
      entities.push(new Barricade(entites.barricade, width * .08 + imageX * 3, y * imageY + height * .5 - imageY * 2, this.size));
      //middle right 
      entities.push(new Barricade(entites.barricade, width * .92 - imageX * 3, y * imageY + height * .5 - imageY * 2, this.size));

      // middle
      entities.push(new Barricade(entites.barricade, width * .5 - imageX / 2, y * imageY + height * .5 - imageY * 2, this.size));
      entities.push(new Barricade(entites.barricade, width * .5 + imageX / 2, y * imageY + height * .5 - imageY * 2, this.size));

      // middle-down
      entities.push(new Barricade(entites.barricade, width * .3 + imageX * 4, y * imageY + height * .7 , this.size));


    }
    for (let y = 0; y < 2; y++) {
      //  left up
      entities.push(new Barricade(entites.barricade, width * .3 - imageX / 2, y * imageY + height * .2, this.size));
      entities.push(new Barricade(entites.barricade, width * .3 - imageX / 2 + imageX, y * imageY + height * .2, this.size));
    }

    
   
      return entities;
      
    }
}
