interface Images {
  monkeyBig: p5.Image;
  pigBig: p5.Image;
  rabbitBig: p5.Image;
  turtleBig: p5.Image;
  rabbitFront: p5.Image;
  pigFront: p5.Image;
  monkeyFront: p5.Image;
  turtleFront: p5.Image;
}

interface Entites {
    redHeart: p5.Image;
    greenHeart: p5.Image;
    shield: p5.Image;
    speed: p5.Image;
    banana: p5.Image;
    barricade: p5.Image;
}
interface Controls {
    left: number;
    right: number;
    up: number;
    down: number;
    shoot: number;
}

interface Sound {
    gunFireSound: p5.SoundFile;
    powerupSound: p5.SoundFile;
    drainLifeSound: p5.SoundFile;
    collisionSound: p5.SoundFile;
    breakBarricadeSound: p5.SoundFile;
}
  
  interface Music {
    startMenuSound: p5.SoundFile;
    gameOverSound: p5.SoundFile;
    inGameSound: p5.SoundFile;
  }
     
    