//let banana: p5.Image;
let characterMoL: p5.Image;
let characterMoR: p5.Image;
// let currentDirection: string;
let bullet: p5.Image;
let bullets: any[] = [];

class Character {

  private speed: number;
  public currentDirection: string;
  private controls: Controls;
  public appearance: p5.Image;
  public size: p5.Vector;
  // public position: p5.Vector;
  public x: number;
  public y: number;
  // public shotLimit: number;
  // public coolDown: number;
  constructor(appearance: p5.Image, x: number, y: number, size: p5.Vector, controls: Controls) {

    this.appearance = appearance;
    this.controls = controls;
    this.size = size;
    this.x = x;
    this.y = y;
    this.speed = 15;
    // this.shotLimit = 1;
    // this.coolDown = 0;
    this.currentDirection = '';
  }

  private move() {
    if (keyIsDown(this.controls.up)) {
      this.y = this.y - this.speed;
      this.currentDirection = 'up';
      // this.velocity.y = -15
    } else if (keyIsDown(this.controls.down)) {
      this.y = this.y + this.speed;
      this.currentDirection = 'down';
    } else if (keyIsDown(this.controls.left)) {
      this.x = this.x - this.speed;
      this.currentDirection = 'left';
    } else if (keyIsDown(this.controls.right)) {
      this.x = this.x + this.speed;
      this.currentDirection = 'right';
    }
  }

  public update() {
    this.move();
    //this.playerShoot();

    if (this.x < 0) {
      this.x = this.x + this.speed;
    }

    if (this.x > width - 80) {
      this.x = this.x - this.speed;
    }

    if (this.y < 0) {
      this.y = this.y + this.speed;
    }

    if (this.y > height - 75) {
      this.y = this.y - this.speed;
    }
    if (keyIsDown(this.controls.shoot)) {
        const appearance = entites.banana; 
        const size = createVector(35, 35);
        const velocity = createVector(0, 0);
        if (this.currentDirection == 'up') {
          velocity.y = -15;
        } else if (this.currentDirection == 'down') {
          velocity.y = 15;
        } else if (this.currentDirection == 'right') {
          velocity.x = 15;
        } else if (this.currentDirection == 'left') {
          velocity.x = -15;
        }
        return new GunFire(appearance, this.x, this.y, size, velocity);
      }
    
    
  }

  // public playerShoot() {
  
  //   /* setTimeout(function(){
  //       alert("Hello World");
  //   },2000);*/
    
  //   //  setInterval(()  => {
  //   //  console.log('setTimeout');
  //   //  }, 1);
  // }
  
 


  public draw() {
    imageMode(CORNER)
    image(this.appearance, this.x, this.y, this.size.x, this.size.y);
  }

}