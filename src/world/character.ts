let banana: p5.Image;
let characterMoL: p5.Image;
let characterMoR: p5.Image;
let currentDirection: string;
let bullets: any[] = [];
let bullet: p5.Image;

class Character {
  private appearance: p5.Image;
  private speed: number;
  private controls: Controls
  private size: p5.Vector;
  private position: p5.Vector;
  // private width: number;
  // private height: number;

  // private playerOnePositionX = 100;
  // private playerOnePositionY = 450;
  // private positionX = 500;
  // private positionY = 450;

  constructor(appearance: p5.Image, position: p5.Vector, size: p5.Vector, controls: Controls) {
    this.appearance = appearance;
    this.controls = controls;
    this.size = size;
    this.position = position;
    this.speed = 15;
  }
  
  private move() {
    if (keyIsDown(this.controls.up)) {
      this.position.y = this.position.y - this.speed;
      currentDirection = 'up';
    }

    if (keyIsDown(this.controls.down)) {
      this.position.y = this.position.y + this.speed;
      currentDirection = 'down';
    }

    if (keyIsDown(this.controls.left)) {
      this.position.x = this.position.x - this.speed;
      currentDirection = 'left';
    }

    if (keyIsDown(this.controls.right)) {
      this.position.x = this.position.x + this.speed;
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

  public update() {
    this.move();
    
    if (this.position.x < 40) {
      this.position.x = this.position.x + this.speed;
    }
  
    if (this.position.x > width - 40) {
      this.position.x = this.position.x - this.speed;
    }
  
    if (this.position.y < 35) {
      this.position.y = this.position.y +this.speed;
    }
  
    if (this.position.y > height - 35) {
      this.position.y = this.position.y - this.speed;
    }
    if (this.position.x < 40) {
      this.position.x = this.position.x + this.speed;
    }
  
    if (this.position.x > width - 40) {
      this.position.x = this.position.x - this.speed;
    }
  
    if (this.position.y < 35) {
      this.position.y = this.position.y + this.speed;
    }
  
    if (this.position.y > height - 35) {
      this.position.y = this.position.y - this.speed;
    }
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

  public draw() {
    imageMode(CENTER)
    image(this.appearance, this.position.x, this.position.y)
  }
}