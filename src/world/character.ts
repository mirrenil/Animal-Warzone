class Character extends Entity {
  private speed: number;
  public currentDirection: string;
  private controls: Controls;
  private name: CharacterNameLabel;

  public isLosing: boolean;
  public totalLives: number;
  public playerNum: number;

  public isShielding: boolean;
  public isSpeeding: boolean;

  public gunFire1: boolean;
  public gunFire2: boolean;

  constructor(playerNum: number, name: CharacterNameLabel, appearance: p5.Image, x: number, y: number, size: p5.Vector, controls: Controls) {
    super(appearance, x, y, size, createVector(0,0))
    this.name = name;
    this.speed = 1;
    this.controls = controls;
    this.isLosing = false;
    this.totalLives = 4;
    this.playerNum = playerNum;
    this.currentDirection = '';
    this.isShielding = false;
    this.isSpeeding = false;

    this.gunFire1 = false;
    this.gunFire2 = false;
  }

  public getName() {
    return this.name;
  }

  public gunFireThrottle () {
    if ((this.playerNum === 1 && !this.gunFire1) || (this.playerNum === 2 && !this.gunFire2))  {
      if (this.playerNum === 1) {
        this.gunFire1 = true;
        sound.gunFireSound.play();
      } else {
        this.gunFire2 = true;
        sound.gunFireSound.play();
      }
   
    const appearance = entites.banana; 

    const size = createVector(30, 30);
    const velocity = createVector(0, 0);
    if (this.currentDirection == 'up') {
      if (!this.isSpeeding) {
        velocity.y = -20;
      }else {
        velocity.y = -30;
      }
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
    text(`Player ${this.playerNum}`,this.playerNum === 1 ? 80 : width -150, 50);
    textSize(20)
    fill('white');
    
    for (let x = 0; x < this.totalLives; x++){
      image(entites.greenHeart, this.playerNum === 1 ? 60 + x * imageX : width - 60 - (x + 1) * imageX, 60, imageX, imageY);
    }
}
public playerShieldDraw() {
  if (this.isShielding === true) {
    const imageX = 30
    const imageY = 30
    image(entites.shield, this.playerNum === 1 ? 155: width - 75, 30, imageX, imageY);
  }

}
public playerSpeedDraw() {
  if (this.isSpeeding === true) {
    const imageX = 30
    const imageY = 30
    image(entites.speed, this.playerNum === 1 ? 180: width - 50, 30, imageX, imageY);
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
      this.currentDirection = 'up';
      this.velocity.y = -this.speed;
    } else if (keyIsDown(this.controls.down)) {
      this.currentDirection = 'down';
      this.velocity.y = this.speed;
    } else if (keyIsDown(this.controls.left)) {
      this.currentDirection = 'left';
      this.velocity.x = -this.speed;
    } else if (keyIsDown(this.controls.right)) {
      this.currentDirection = 'right';
      this.velocity.x = this.speed;
    }
  }

  public update() {
    this.move();
    super.update();
    this.shield();
    this.speedUp();

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
      if (this.currentDirection) {
        return this.gunFireThrottle(); 
      }
           
      }
    
  }

  public draw() {
    super.draw();
    this.playersLives();
    this.playerShieldDraw();
    this.playerSpeedDraw();
  }

}