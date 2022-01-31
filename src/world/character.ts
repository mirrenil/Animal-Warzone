//let banana: p5.Image;
// let characterMoL: p5.Image;
// let characterMoR: p5.Image;
// let currentDirection: string;
// let bullet: p5.Image;
// let bullets: any[] = [];

class Character extends Entity {
  private speed: number;
  public currentDirection: string;
  private controls: Controls;

  public totalLives: number;
  public playerNum: number;

  public isShielding: boolean;
  public isSpeeding: boolean;

  public gunFire1: boolean;
  public gunFire2: boolean;

  constructor( playerNum: number, appearance: p5.Image, x: number, y: number, size: p5.Vector, controls: Controls) {
    super(appearance, x, y, size, createVector(0,0), )
    this.speed = 1;
    this.controls = controls;
    this.totalLives = 4;
    this.playerNum = playerNum;
    this.currentDirection = '';
    this.isShielding = false;
    this.isSpeeding = false;

    this.gunFire1 = false;
    this.gunFire2 = false;
  
  }
  public gunFireThrottle () {
    console.log( this.gunFire1);
    
    if ((this.playerNum === 1 && !this.gunFire1) || (this.playerNum === 2 && !this.gunFire2))  {
      if (this.playerNum === 1) {
        this.gunFire1 = true;
      } else {
        this.gunFire2 = true;
      }
   
    const appearance = entites.banana; 

    const size = createVector(35, 35);
    const velocity = createVector(0, 0);
    if (this.currentDirection == 'up') {
      if (!this.isSpeeding) {
        velocity.y = -20;
      }else {
        velocity.y = -30;
      }
      console.log(velocity.y);
    } else if (this.currentDirection == 'down') {
      if (!this.isSpeeding) {
        velocity.y = 20;
      }else {
        velocity.y = 30;
      }
    } else if (this.currentDirection == 'right') {
      if (!this.isSpeeding) {
        velocity.x = 20;
      }else {
        velocity.x = 30;
      }
    } else if (this.currentDirection == 'left') {
      if (!this.isSpeeding) {
        velocity.x = -20;
      }else {
        velocity.x = -30;
      }
    }
    setTimeout(() => {
      if (this.playerNum === 1) {
        this.gunFire1 = false;
      } else {
        this.gunFire2 = false;
      }
    }, 500);
    return new GunFire(appearance, this.x,this.y, size, velocity,this.playerNum);
 }
  }
  public playersLives() {
    const imageX = 30
    const imageY = 30
    text(`player ${this.playerNum}`,this.playerNum === 1 ? 20 : width -150, 50);
    textSize(20)
    fill('white');
    
    for (let x = 0; x < this.totalLives; x++){
      image(entites.greenHeart, this.playerNum === 1 ? 20 + x * imageX : width - 20 - (x + 1) * imageX, 60, imageX, imageY);
    }
  // if (totalLives === 0) this.setActiveGameState ==== 'GameOver'
        

}
public playerShieldDraw() {
  if (this.isShielding === true) {
    const imageX = 30
    const imageY = 30
    image(entites.shield, this.playerNum === 1 ? 20: width - 20, 80, imageX, imageY);
  }

}
public playerSpeedDraw() {
  if (this.isSpeeding === true) {
    const imageX = 30
    const imageY = 30
    image(entites.speed, this.playerNum === 1 ? 40: width - 20, 80, imageX, imageY);
  }

}
public shield() {
  if (this.isShielding === true) {
    const imageX = 30
    const imageY = 30
    image(entites.shield, this.playerNum === 1 ? 20 + 100 : width - 20, 60, imageX, imageY);

     setTimeout(() => {
      this.isShielding = false; 
     }, 15000);
    
     
  }
}
public speedUp() {
  if (this.isSpeeding === true) {
    this.speed = 30;
     setTimeout(() => {
      this.isSpeeding = false; 
      
     }, 10000);
    
  } else {
    this.speed = 15;

  }
  
  
}
  private move() {
    this.velocity.x = 0;
    this.velocity.y = 0;
    if (keyIsDown(this.controls.up)) {
      // this.y = this.y - this.speed;
      this.currentDirection = 'up';
      this.velocity.y = -this.speed;
    } else if (keyIsDown(this.controls.down)) {
      // this.y = this.y + this.speed;
      this.currentDirection = 'down';
      this.velocity.y = this.speed;
    } else if (keyIsDown(this.controls.left)) {
      // this.x = this.x - this.speed;
      this.currentDirection = 'left';
      this.velocity.x = -this.speed;
    } else if (keyIsDown(this.controls.right)) {
      // this.x = this.x + this.speed;
      this.currentDirection = 'right';
      this.velocity.x = this.speed;
    }
  }

  public update() {
    this.move();
    super.update();
    this.shield();
    this.speedUp();
    //this.playerShoot();

    if (this.x < 0) {
      this.x = 0;
    }

    if (this.x > width - this.size.x) {
      this.x =  width - this.size.x;
    }

    if (this.y < 0) {
      this.y = 0;
    }

    if (this.y > height - this.size.y) {
      this.y = height - this.size.y;
    }
    if (keyIsDown(this.controls.shoot)) {
      return this.gunFireThrottle();      
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
    super.draw();
    this.playersLives();
    this.playerShieldDraw();
    this.playerSpeedDraw();
  }

}