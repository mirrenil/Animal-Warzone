let banana: p5.Image;
let characterMoL: p5.Image;
let characterMoR: p5.Image;
// let currentDirection: string;
let bullet: p5.Image;

class Character {
  private speed: number;
  public currentDirection: string;
  private controls: Controls;
  private appearance: p5.Image;
  private size: p5.Vector;
  private position: p5.Vector;
  // public position: p5.Vector;
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
    this.currentDirection = ''; 
  }

  private move() {
    if (keyIsDown(this.controls.up)) {
      this.position.y = this.position.y - this.speed;
      this.currentDirection = 'up';
      // this.velocity.y = -15
    }

    if (keyIsDown(this.controls.down)) {
      this.position.y = this.position.y + this.speed;
      this.currentDirection = 'down';
    }

    if (keyIsDown(this.controls.left)) {
      this.position.x = this.position.x - this.speed;
      this.currentDirection = 'left';
    }

    if (keyIsDown(this.controls.right)) {
      this.position.x = this.position.x + this.speed;
      this.currentDirection = 'right';
    }
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
    // for (let bullet of bullets) {
  
    //   if (this.currentDirection == 'up') {
    //     bullet.y = bullet.y - 2;
    //   } else if (this.currentDirection == 'down') {
    //     bullet.y = bullet.y + 2;
    //   } else if (this.currentDirection == 'right') {
    //     bullet.x = bullet.x + 2;
    //   } else if (this.currentDirection == 'left') {
    //     bullet.x = bullet.x - 2;
    //   }
    //   image(banana, bullet.x, bullet.y);
    // }
  }
  public draw() {
    imageMode(CENTER)
    image(this.appearance, this.position.x, this.position.y)
  }

}