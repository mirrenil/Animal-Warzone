//---- GLOBAL VARIABLES ----//
let heart: p5.Image;
let player1: p5.TEXT;
let player2: p5.TEXT;


class PlayersLife extends Entity {
    // private size: p5.Vector;
    // private playerOneHeartsPosition = new p5.Vector()

    constructor(appearance: p5.Image, x: number, y: number, size: p5.Vector) {
        super(appearance, x, y, size);


    }

    public draw() {
        // const imageX = 30
        // const imageY = 30
        text('Player 1', width * .02 - 10, 50);
        textSize(20)
        fill('white');
        text('Player 2', width * .92 - 10, 50);
        textSize(20)
        fill('white');

        // imageMode(CENTER);

        // for (let x = 0; x < 4; x++) {
        //     image(heart, x * imageX + width * .02, 70, imageX, imageY);
        //     image(heart, x * imageX + width * .92, 70, imageX, imageY);
        // }


    }
}

