
let rectX1: number = 600;
let rectY1: number = 300;
let rectWidth: number = 100;
let rectHeight: number = 100;
let move = 5;


class GameBoard {
    public gameState: GameState;
    private life: Life;
    private worldMap: WorldMap;
    private entities: Entity[];
    public playerOne: Character;
    public playerTwo: Character;

    constructor(gameState: GameState, activeCharacterName: CharacterNameLabel, 
         activeCharacterName2: CharacterNameLabel) {

        this.gameState = gameState;
        this.life = new Life(createVector(10, 10));
        this.worldMap = new WorldMap();
        this.entities = this.worldMap.getEntities();
        this.playerOne = new Character(
            this.getCharacterImage(activeCharacterName),
            createVector(150, height * .5 - 30), //this.worldMap.getPlayerOnePosition()
            createVector(10, 10),
            {
                left: LEFT_ARROW,
                right: RIGHT_ARROW,
                down: DOWN_ARROW,
                up: UP_ARROW,
            }
        );
        this.playerTwo = new Character(
            this.getCharacterImage(activeCharacterName2),
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

    private getCharacterImage(name: CharacterNameLabel) {
        switch(name) {
            case "turtle": return images.turtleFront;
            case "monkey": return images.monkeyFront;
            case "rabbit": return images.rabbitFront;
            case "pig": return images.pigFront;
            default: return images.pigFront;
        }
    }

   
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
        // for (const entity of this.entities) {
        //     entity.update();
        // }

        this.playerOne.update();
        this.playerTwo.update();
    }

    public draw() {
        // for (const entity of this.entities) {
        //     entity.draw();
        // }
        this.playerOne.draw();
        this.playerTwo.draw();

        //this.gameState.setGameState('Running');
        // // keyPressed();
        // // this.windowBounderies();
        // rectMode(CENTER);
        // noStroke();
        // fill(255);


    }
    
    public openGame() {

    }
}
