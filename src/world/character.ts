let monkeyFront: p5.Image;
let turtleFront: p5.Image;
let banana: p5.Image;
let characterMoL: p5.Image;
let characterMoR: p5.Image;
let currentDirection: string;
let bullet: p5.Image;

class Character extends Entity {
  public speed: number;
  private controls: Controls;
  // public position: p5.Vector;
  // private width: number;
  // private height: number;

  // private playerOnePositionX = 100;
  // private playerOnePositionY = 450;
  // private positionX = 500;
  // private positionY = 450;

  constructor(appearance: p5.Image, x: number, y: number, size: p5.Vector, controls: Controls) {
    super(appearance, x, y, size);
    this.speed = 15;
    this.controls = controls;
  }

  private move() {
    if (keyIsDown(this.controls.up)) {
      this.y = this.y - this.speed;
      currentDirection = 'up';
      // this.velocity.y = -15
    }

    if (keyIsDown(this.controls.down)) {
      this.y = this.y + this.speed;
      currentDirection = 'down';
    }

    if (keyIsDown(this.controls.left)) {
      this.x = this.x - this.speed;
      currentDirection = 'left';
    }

    if (keyIsDown(this.controls.right)) {
      this.x = this.x + this.speed;
      currentDirection = 'right';
    }
  }

  public update() {
    super.update();
    this.move();
    // this.position += this.speed;

    if (this.x < 40) {
      this.x = this.x + this.speed;
    }

    if (this.x > width - 40) {
      this.x = this.x - this.speed;
    }

    if (this.y < 35) {
      this.y = this.y + this.speed;
    }

    if (this.y > height - 35) {
      this.y = this.y - this.speed;
    }
    if (this.x < 40) {
      this.x = this.x + this.speed;
    }

    if (this.x > width - 40) {
      this.x = this.x - this.speed;
    }

    if (this.y < 35) {
      this.y = this.y + this.speed;
    }

    if (this.y > height - 35) {
      this.y = this.y - this.speed;
    }
    
    //bullet
    // for (let bullet of bulletsP1) {
    //   image(banana, bullet.x, bullet.y);
    //   if (currentDirection == 'up') {
    //     bullet.y = bullet.y - 2;
    //   } else if (currentDirection == 'down') {
    //     bullet.y = bullet.y + 2;
    //   } else if (currentDirection == 'right') {
    //     bullet.x = bullet.x + 2;
    //   } else if (currentDirection == 'left') {
    //     bullet.x = bullet.x - 2;
    //   }
    // }
  
    // for (let bullet of bulletsP2) {
    //   image(banana, bullet.x, bullet.y);
    //   if (currentDirection == 'up') {
    //     bullet.y = bullet.y - 2;
    //   } else if (currentDirection == 'down') {
    //     bullet.y = bullet.y + 2;
    //   } else if (currentDirection == 'right') {
    //     bullet.x = bullet.x + 2;
    //   } else if (currentDirection == 'left') {
    //     bullet.x = bullet.x - 2;
    //   }
    // }

    

    if (keyIsDown(this.controls.shoot)) {
      const appearance = banana;
      const size = createVector(35, 35);
      const velocity = createVector(0, 0);
      if (currentDirection == 'up') {
        velocity.y = -30;
      } else if (currentDirection == 'down') {
        velocity.y = 30;
      } else if (currentDirection == 'right') {
        velocity.x = 30;
      } else if (currentDirection == 'left') {
        velocity.x = -30;
      }
      return new GunFire(appearance, this.x, this.y, size, velocity);
    }
    
  }
}