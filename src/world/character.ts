

let monkeyFront: p5.Image;
let turtleFront: p5.Image;
let banana: p5.Image;
let characterMoL: p5.Image;
let characterMoR: p5.Image;
let currentDirection: string;
let playerSpeed = 25;
let bullets: any[] = [];
let bullet: p5.Image;

class Characters {
  private size: p5.Vector;
  // private width: number;
  // private height: number;
  // private appearance: p5.Image;
  private playerTowPosition = new p5.Vector()
  private playerOnePosition = new p5.Vector()

  // private playerOnePositionX = 100;
  // private playerOnePositionY = 450;
  // private playerTowPositionX = 500;
  // private playerTowPositionY = 450;

  constructor(size: p5.Vector) {
    this.size = size;
    this.playerOnePosition = createVector(150, height * .5 - 30)
    this.playerTowPosition = createVector(width - 150, height * .5 - 30)
  }
  public characterTowMove() {
    if (keyCode == UP_ARROW && keyIsPressed) {
      this.playerTowPosition.y = this.playerTowPosition.y - playerSpeed;
      currentDirection = 'up';
    }

    if (keyCode == DOWN_ARROW && keyIsPressed) {
      this.playerTowPosition.y = this.playerTowPosition.y + playerSpeed;
      currentDirection = 'down';
    }

    if (keyCode == LEFT_ARROW && keyIsPressed) {
      this.playerTowPosition.x = this.playerTowPosition.x - playerSpeed;
      currentDirection = 'left';
    }

    if (keyCode == RIGHT_ARROW && keyIsPressed) {
      this.playerTowPosition.x = this.playerTowPosition.x + playerSpeed;
      currentDirection = 'right';
    }


    // if(keyCode == ENTER && keyIsPressed) {
    //     let bullet = {
    //         x: rectX,
    //         y: rectY
    //     };
    //     bullets.push(bullet);
    // }
  }


  public characterOneMove() {
    if (keyCode === 87 && keyIsPressed) {
      currentDirection = 'up';
      this.playerOnePosition.y = this.playerOnePosition.y - playerSpeed;

    }
    if (keyCode === 83 && keyIsPressed) {
      this.playerOnePosition.y = this.playerOnePosition.y + playerSpeed;
      currentDirection = 'down';

    }
    if (keyCode === 65 && keyIsPressed) {
      this.playerOnePosition.x = this.playerOnePosition.x - playerSpeed;
      currentDirection = 'left';

    }
    if (keyCode === 68 && keyIsPressed) {
      this.playerOnePosition.x = this.playerOnePosition.x + playerSpeed;
      currentDirection = 'right';

    }
    if (keyCode === ENTER && keyIsPressed) {
      let bullet = {
        x: this.playerOnePosition.x,
        y: this.playerOnePosition.y,
      };
      bullets.push(bullet);
    }
  }
  public update() {

  }
  public draw() {
    imageMode(CENTER)
    image(monkeyFront, this.playerOnePosition.x, this.playerOnePosition.y)
    image(turtleFront, this.playerTowPosition.x, this.playerTowPosition.y)
    this.characterOneMove();
    this.characterTowMove();
    if (this.playerOnePosition.x < 40) {
      this.playerOnePosition.x = this.playerOnePosition.x + playerSpeed;
    }

    if (this.playerOnePosition.x > width - 40) {
      this.playerOnePosition.x = this.playerOnePosition.x - playerSpeed;
    }

    if (this.playerOnePosition.y < 35) {
      this.playerOnePosition.y = this.playerOnePosition.y + playerSpeed;
    }

    if (this.playerOnePosition.y > height - 35) {
      this.playerOnePosition.y = this.playerOnePosition.y - playerSpeed;
    }
    if (this.playerTowPosition.x < 40) {
      this.playerTowPosition.x = this.playerTowPosition.x + playerSpeed;
    }

    if (this.playerTowPosition.x > width - 40) {
      this.playerTowPosition.x = this.playerTowPosition.x - playerSpeed;
    }

    if (this.playerTowPosition.y < 35) {
      this.playerTowPosition.y = this.playerTowPosition.y + playerSpeed;
    }

    if (this.playerTowPosition.y > height - 35) {
      this.playerTowPosition.y = this.playerTowPosition.y - playerSpeed;
    }

    // between charctares 

    //bullet
    for (let bullet of bullets) {

      if (currentDirection == 'up') {
        bullet.y = bullet.y - 2;
      } else if (currentDirection == 'down') {
        bullet.y = bullet.y + 2;
      } else if (currentDirection == 'right') {
        bullet.x = bullet.x + 2;
      } else if (currentDirection == 'left') {
        bullet.x = bullet.x - 2;
      }
      image(banana, bullet.x, bullet.y);
    }

  }


}