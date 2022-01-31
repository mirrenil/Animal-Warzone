class GunFire extends Entity {
//   private gunSound: p5.SoundFile;

  public playerNum: number | undefined;


public constructor(appearance: p5.Image, x: number, y: number, size: p5.Vector, velocity: p5.Vector, playerNumber: number) {
  super(appearance, x, y, size, velocity);
  this.playerNum = playerNumber;

}

//   gunSpeed(){

//   }
}