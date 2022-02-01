//---- GLOBAL VARIABLES ----//
let game: Game;
let images: Images;
let entites: Entites;
let isPaused: boolean = false;
let sound: Sound;
let music: Music;


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  sound = {

    gunFireSound: loadSound('/assets/music/gunFireSound.wav'),
    powerupSound: loadSound('/assets/music//powerup.wav'),
    drainLifeSound: loadSound('/assets/music//takingDamage.wav'),
    collisionSound: loadSound('/assets/music/collision.wav'),
    breakBarricadeSound: loadSound('/assets/music/breakBarricade.wav'),
    shieldHit: loadSound('/assets/music/shieldHit.wav'),
  };
  
  music = {
    startMenuSound: loadSound('/assets/music/startMenu.wav'),
    gameOverSound: loadSound('/assets/music/gameOverMusic.wav'), 
    inGameSound: loadSound('/assets/music/inGameMusic.wav'),
  };
  
  images = {
    monkeyBig: loadImage("./assets/images/bigMonkey.png"),
    pigBig: loadImage("./assets/images/bigPig.png"),
    rabbitBig: loadImage("./assets/images/bigRabbit.png"),
    turtleBig: loadImage("./assets/images/bigTurtle.png"),
    rabbitFront: loadImage("./assets/images/gameCharacters/rabbitFront.png"),
    pigFront: loadImage("./assets/images/gameCharacters/pigFront.png"),
    monkeyFront: loadImage("./assets/images/gameCharacters/monkeyFront.png"),
    turtleFront: loadImage('./assets/images/gameCharacters/turtleFront.png'),
  };

  entites = {
    greenHeart: loadImage('./assets/images/life.png'),
    redHeart: loadImage("./assets/images/redheart.png"),
    shield: loadImage("./assets/images/shield.png"),
    speed: loadImage("./assets/images/speed.png"),
    banana: loadImage('./assets/images/banana.png'),
    barricade: loadImage("./assets/images/Group 67.png")
  };
  
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  // noCursor();
  
  game = new Game();
  

}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  game.update();
  game.draw();

}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
