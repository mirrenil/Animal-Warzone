class Barricade extends Entity {
 private size: p5.Vector;

//   constructor(size: p5.Vector) {
//     this.size = size; 
//   }


  public draw() {
    const wallCellSize = createVector(width * .04, height * 0.02);
    const barricadeCellSize = createVector(width * .02, height * 0.05);

    push();
    
    fill('#006DD2');
    stroke('#21212F');
    strokeWeight(2);
    //horizontal
    for (let x = 0; x < 5; x++){
      rect(x * barricadeCellSize.x + width * .4 + barricadeCellSize.x, height * .6 + barricadeCellSize.y * 4, barricadeCellSize.x, barricadeCellSize.y);

    }
    for (let x = 0; x < 3; x++) {
      //left 
      rect(x * barricadeCellSize.x + width * .08, height * .3 , barricadeCellSize.x, barricadeCellSize.y);
      rect(x * barricadeCellSize.x + width * .08, height * .3 + barricadeCellSize.y * 5, barricadeCellSize.x, barricadeCellSize.y);
      //right 
      rect(x * barricadeCellSize.x + width * .92 - barricadeCellSize.x * 2, height * .3 , barricadeCellSize.x, barricadeCellSize.y);
      rect(x * barricadeCellSize.x + width * .92 - barricadeCellSize.x * 2, height * .3 + barricadeCellSize.y * 5, barricadeCellSize.x, barricadeCellSize.y);
      //down
      rect(x * barricadeCellSize.x + width * .4 - barricadeCellSize.x * 3, height * .6 + barricadeCellSize.y, barricadeCellSize.x, barricadeCellSize.y);
      //up
      rect(x * barricadeCellSize.x +width * .7 - barricadeCellSize.x * 3, height * .05 + barricadeCellSize.y * 2, barricadeCellSize.x, barricadeCellSize.y);
      rect(x * barricadeCellSize.x +width * .7 + barricadeCellSize.x, height * .05 + barricadeCellSize.y * 4, barricadeCellSize.x, barricadeCellSize.y);
    }
    for (let x = 0; x < 2; x++) {
      rect(x * barricadeCellSize.x + width * .3 - barricadeCellSize.x * 2, height * .2 , barricadeCellSize.x, barricadeCellSize.y);
      rect(x * barricadeCellSize.x + width * .3 - barricadeCellSize.x * 2, height * .2  - barricadeCellSize.y, barricadeCellSize.x, barricadeCellSize.y);
      
    }
    // vertical
    for (let y = 0; y < 6; y++) {
      //left 
      rect(width * .08 + barricadeCellSize.x * 3, y * barricadeCellSize.y + height * .3, barricadeCellSize.x, barricadeCellSize.y);
      //right 
      rect(width * .92 - barricadeCellSize.x * 3, y * barricadeCellSize.y + height * .3, barricadeCellSize.x, barricadeCellSize.y);
      
    }
    for (let y = 0; y < 4; y++){
      //middle 
      rect(width * .5, y * barricadeCellSize.y + height * .3 + barricadeCellSize.y, barricadeCellSize.x * -1, barricadeCellSize.y);
      rect(width * .5, y * barricadeCellSize.y + height * .3 + barricadeCellSize.y, barricadeCellSize.x, barricadeCellSize.y);
      //up
      rect(width * .7, y * barricadeCellSize.y + height * .05 + barricadeCellSize.y, barricadeCellSize.x, barricadeCellSize.y);
      //down
      rect(width * .4, y * barricadeCellSize.y + height * .6 + barricadeCellSize.y, barricadeCellSize.x, barricadeCellSize.y);
    }
  }
    barricadeShape() {

    }

    breakBarricade() {
        
    }
}