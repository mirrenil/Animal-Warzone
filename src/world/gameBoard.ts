
let rectX1: number = 600;
let rectY1: number = 300;
let rectWidth: number = 100;
let rectHeight: number = 100;
let move = 5;


class GameBoard {
    private gameState: GameState;
    private life: Life;
    private worldMap: WorldMap;
    private entities: Entity[];
    private playerOne: Character;
    private playerTwo: Character;

    constructor(gameState: GameState) {
        this.gameState = gameState;
        this.life = new Life(createVector(10, 10));
        this.worldMap = new WorldMap();
        this.entities = this.worldMap.getEntities();
        this.playerOne = new Character(
            turtleFront,
            createVector(150, height * .5 - 30),
            createVector(10, 10),
            {
                left: LEFT_ARROW,
                right: RIGHT_ARROW,
                down: DOWN_ARROW,
                up: UP_ARROW,
            }
        );
        this.playerTwo = new Character(
            monkeyFront,
            createVector(width - 150, height * .5 - 30),
            createVector(10, 10),
            {
                left: 65,
                right: 68,
                up: 87,
                down: 83,
            }
        );
    }

    // private windowBounderies() {
    //     if(rectX1 < 0) {
    //         rectX1 = rectX1 + move;
    //     }

    //     if(rectX1 > width) {
    //         rectX1 = rectX1 - move;
    //     }

    //     if(rectY1 < 0) {
    //        rectY1 = rectY1 + move;
    //     }

    //     if(rectY1 > height) {
    //        rectY1 =rectY1 - move;
    //     }
    // }

    // private checkCollisions() {


    // }

    // public keyPressed() {
    //     if (keyCode == 38 && keyIsPressed) {
    //         rectX1 = rectX1 - move;
    //     }

    //     if (keyCode == 40 && keyIsPressed) {
    //        rectY1 = rectY1 + move;
    //     }

    //     if (keyCode == 37 && keyIsPressed) {
    //         rectX1 = rectX1 - move;
    //     }

    //     if (keyCode ==  39 && keyIsPressed) {
    //         rectX1 = rectX1 + move;
    //     }
    // }

    public update() {
        // this.barricade.update();
        this.playerOne.update();
        this.playerTwo.update();
    }

    public draw() {
        
        this.playerOne.draw();
        this.playerTwo.draw();
        
        this.life.draw();

        // this.gameState.setGameState('Running');
        // // keyPressed();
        // // this.windowBounderies();
        // rectMode(CENTER);
        // noStroke();
        // fill(255);


    }
  

    public initGameBoard(activeCharacterName: CharacterNameLabel, activeCharacterName2: CharacterNameLabel2) {
       
    }
    
    public openGame() {

    }
}
