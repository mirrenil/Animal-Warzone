//---- GLOBAL VARIABLES ----//
let rabbitFront: p5.Image;
let rabbitBack: p5.Image;
let rabbitLeft: p5.Image;
let rabbitRight: p5.Image;
let pigFront: p5.Image;
let pigBack: p5.Image;
let pigLeft: p5.Image;
let pigRight: p5.Image;
let monkeyFront: p5.Image;
let monkeyBack: p5.Image;
let monkeyLeft: p5.Image;
let monkeyRight: p5.Image;
let turtleFront: p5.Image;
let turtleBack: p5.Image;
let turtleLeft: p5.Image;
let turtleRight: p5.Image;
let playerSpeed = 0.01;

// 
let character: p5.Image;
let characterMoF: p5.Image;

class Characters {
    private size: p5.Vector;
    // private width: number;
    // private height: number;
    // private appearance: p5.Image;
    
    private playerTowPosition = new p5.Vector()
    private playerOnePosition = new p5.Vector()
  
    constructor(size: p5.Vector) {
      this.size = size;
      this.playerTowPosition = createVector(150, height * .5 - 30)
      this.playerOnePosition = createVector(width - 150, height * .5 - 30)
      
    }
  
    public characterTowMove() {
      window.addEventListener('keyup', (e) => {
        // if (keyCode === 38) {
        //   this.playerONePositionY -= .1;
        //   console.log('character')
        // } else if (keyCode === 40) {
        //   this.playerONePositionY += .1;
        // }
        // else if (keyCode === 37) {
        //   this.playerONePositionX-= .1;
        // }
        // else if (keyCode === 39) {
        //   this.playerONePositionX += .1;
        // }
        switch (e.key) {
          case 'ArrowUp':
            this.playerOnePosition.y -= playerSpeed;
           
            break;
          case 'ArrowDown':
            this.playerOnePosition.y += playerSpeed;
            break;
          case 'ArrowLeft':
            this.playerOnePosition.x -= playerSpeed;
            break;
          case 'ArrowRight':
            this.playerOnePosition.x += playerSpeed;
            break;
        
          default:
            break;
        }
       })
      
    }
    public characterOneMove() {
      window.addEventListener('keyup', (e) => {
        if (keyCode === 87) {
          this.playerTowPosition.y  -= playerSpeed;
                                               // spelare 2 går uppåt
        
        } else if (keyCode === 83) {
          this.playerTowPosition.y += playerSpeed;
        }                                    //spelare 2 går ner
        else if (keyCode === 65) {
          this.playerTowPosition.x -= playerSpeed;
                                             //ddww spelre 2 går vänster
          
        }
        else if (keyCode === 68) {
          this.playerTowPosition.x  += playerSpeed;
                                            //spelare 2 går höger
        }
       })
    }
    draw() {

        imageMode(CENTER);
        // Rabbit

        // imageMode(CENTER);
        // // Rabbit

        // image(rabbitFront, windowHeight / 2, windowWidth / 2);
        // image(rabbitBack, windowHeight / 2, windowWidth / 2);
        // image(rabbitRight, windowHeight / 2, windowWidth / 2);
        // image(rabbitLeft, windowHeight / 2, windowWidth / 2);
    

        // Pig

        // // Pig

        // image(pigFront, windowHeight / 2, windowWidth / 2);
        // image(pigBack, windowHeight / 2, windowWidth / 2);
        // image(pigRight, windowHeight / 2, windowWidth / 2);
        // image(pigRight, windowHeight / 2, windowWidth / 2);
    

        // Monkey

        // // Monkey

        // image(monkeyFront, windowHeight / 2, windowWidth / 2);
        // image(monkeyBack, windowHeight / 2, windowWidth / 2);
        // image(monkeyRight, windowHeight / 2, windowWidth / 2);
        // image(monkeyLeft, windowHeight / 2, windowWidth / 2);   
    

        // Turtle

        // // Turtle

        // image(turtleFront, windowHeight / 2, windowWidth / 2);
        // image(turtleBack, windowHeight / 2, windowWidth / 2);
        // image(turtleRight, windowHeight / 2, windowWidth / 2);
        // image(turtleLeft, windowHeight / 2, windowWidth / 2);


        // 
        image(monkeyFront, this.playerOnePosition.x, this.playerOnePosition.y, 70, 60)
        image(turtleFront,  this.playerTowPosition.x, this.playerTowPosition.y)
        this.characterOneMove();
        this.characterTowMove();

       

     }

    // update() {

    // }
}
    


