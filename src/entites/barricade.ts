
let barricade: p5.Image;
let img;

class Barricade {
//  private size: p5.Vector;

//   constructor(size: p5.Vector) {
//     this.size = size; 
//   }
	private size: p5.Vector;
	constructor(size: p5.Vector,  barricade: p5.Image) {
		this.size = size;
		barricade = new p5.Image();
	}
  public draw() {
    // const barricadeCellSize = createVector(width * .02, height * 0.05);
    // push();
    // fill('#006DD2');
    // stroke('#21212F');
    // strokeWeight(2);
    // //horizontal
    // for (let x = 0; x < 5; x++){
    //   rect(x * barricadeCellSize.x + width * .4 + barricadeCellSize.x, height * .6 + barricadeCellSize.y * 4, barricadeCellSize.x, barricadeCellSize.y);

    // }
    // for (let x = 0; x < 3; x++) {
    //   //left 
    //   rect(x * barricadeCellSize.x + width * .08, height * .3 , barricadeCellSize.x, barricadeCellSize.y);
    //   rect(x * barricadeCellSize.x + width * .08, height * .3 + barricadeCellSize.y * 5, barricadeCellSize.x, barricadeCellSize.y);
    //   //right 
    //   rect(x * barricadeCellSize.x + width * .92 - barricadeCellSize.x * 2, height * .3 , barricadeCellSize.x, barricadeCellSize.y);
    //   rect(x * barricadeCellSize.x + width * .92 - barricadeCellSize.x * 2, height * .3 + barricadeCellSize.y * 5, barricadeCellSize.x, barricadeCellSize.y);
    //   //down
    //   rect(x * barricadeCellSize.x + width * .4 - barricadeCellSize.x * 3, height * .6 + barricadeCellSize.y, barricadeCellSize.x, barricadeCellSize.y);
    //   //up
    //   rect(x * barricadeCellSize.x +width * .7 - barricadeCellSize.x * 3, height * .05 + barricadeCellSize.y * 2, barricadeCellSize.x, barricadeCellSize.y);
    //   rect(x * barricadeCellSize.x +width * .7 + barricadeCellSize.x, height * .05 + barricadeCellSize.y * 4, barricadeCellSize.x, barricadeCellSize.y);
    // }
    // for (let x = 0; x < 2; x++) {
    //   rect(x * barricadeCellSize.x + width * .3 - barricadeCellSize.x * 2, height * .2 , barricadeCellSize.x, barricadeCellSize.y);
    //   rect(x * barricadeCellSize.x + width * .3 - barricadeCellSize.x * 2, height * .2  - barricadeCellSize.y, barricadeCellSize.x, barricadeCellSize.y);
      
    // }
    // // vertical
    // for (let y = 0; y < 6; y++) {
    //   //left 
    //   rect(width * .08 + barricadeCellSize.x * 3, y * barricadeCellSize.y + height * .3, barricadeCellSize.x, barricadeCellSize.y);
    //   //right 
    //   rect(width * .92 - barricadeCellSize.x * 3, y * barricadeCellSize.y + height * .3, barricadeCellSize.x, barricadeCellSize.y);
      
    // }
    // for (let y = 0; y < 4; y++){
    //   //middle 
    //   rect(width * .5, y * barricadeCellSize.y + height * .3 + barricadeCellSize.y, barricadeCellSize.x * -1, barricadeCellSize.y);
    //   rect(width * .5, y * barricadeCellSize.y + height * .3 + barricadeCellSize.y, barricadeCellSize.x, barricadeCellSize.y);
    //   //up
    //   rect(width * .7, y * barricadeCellSize.y + height * .05 + barricadeCellSize.y, barricadeCellSize.x, barricadeCellSize.y);
    //   //down
    //   rect(width * .4, y * barricadeCellSize.y + height * .6 + barricadeCellSize.y, barricadeCellSize.x, barricadeCellSize.y);
    // }
		const imageX = 35
    const imageY = 35
    imageMode(CENTER)
      //horizontal
    for (let x = 0; x < 4; x++){
      // up left
      image(barricade, imageX * x + width * .5, height * .15,imageX, imageY)
      image(barricade, imageX * x + width * .5 + imageX * 5, height * .15 + imageY * 2,imageX, imageY)

      //middle-up left
      image(barricade, imageX * x + width * .08, height * .5 - imageY * 3,imageX, imageY)
      //middle-up right
      image(barricade, imageX * x + width * .92 - imageX * 3, height * .5 - imageY * 3,imageX, imageY)

      //middle-down left
      image(barricade, imageX * x + width * .08, height * .5 + imageY * 2, imageX, imageY)
      // middle-down right
      image(barricade, imageX * x + width * .92 - imageX * 3, height * .5 + imageY * 2, imageX, imageY)

      // middle-down
      image(barricade, imageX * x + width * .4, height * .7, imageX, imageY)
      image(barricade, imageX * x + width * .4  + imageX * 4, height * .7 + imageY * 4, imageX, imageY)
  
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
      image(barricade, width * .5 - imageX /2, y * imageY + height * .5 - imageY * 2, imageX, imageY)
      image(barricade, width * .5 + imageX /2, y * imageY + height * .5 - imageY * 2, imageX, imageY)
       // middle-down
      image(barricade, width * .4 + imageX * 4, y * imageY + height * .7, imageX, imageY)


    }
      for (let y = 0; y < 2; y++) {
    //  left up
			image(barricade, width * .3 - imageX /2, y * imageY + height * .2, imageX, imageY)
			image(barricade, width * .3 - imageX /2 + imageX, y * imageY + height * .2, imageX, imageY)
    }



  }

    barricadeShape() {

    }

    breakBarricade() {
        
    }
}