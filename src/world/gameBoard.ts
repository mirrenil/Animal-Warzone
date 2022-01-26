
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
            150,
            height * .5 - 30,
            createVector(10, 10),
            {
                left: LEFT_ARROW,
                right: RIGHT_ARROW,
                down: DOWN_ARROW,
                up: UP_ARROW,
                shoot: ENTER,
            }
        );

        this.playerTwo = new Character(
            monkeyFront, 
            width - 150,
            height * .5 - 30,
            createVector(10, 10),
            {
                left: 65,
                right: 68,
                up: 87,
                down: 83,
                shoot: 32
            }
        );
    }

    private checkCollision() {
        const allEntities = [...this.entities, this.playerOne, this.playerTwo];
        for (const entity1 of allEntities) {
            for (const entity2 of allEntities) {
                if (entity1 === entity2) continue;

                // kolla om rektanglar överlappar
                // if (rect1.x < rect2.x + rect2.w &&
                //     rect1.x + rect1.w > rect2.x &&
                //     rect1.y < rect2.y + rect2.h &&
                //     rect1.h + rect1.y > rect2.y) {
                if (true) {
                    if (entity1 instanceof Character) {
                        if (entity2 instanceof Character) {
                            // reaktion
                        }
                        if (entity2 instanceof GunFire) {
                            // reaktion
                        }
                        if (entity2 instanceof Shield) {
                            // reaktion
                        }
                        if (entity2 instanceof Life) {
                            // reaktion
                        }
                        if (entity2 instanceof Barricade) {
                            // reaktion
                        }
                    }
                    if (entity1 instanceof GunFire) {
                        if (entity2 instanceof Barricade) {
                            // reaktion
                        }
                    }
                }
            }
        }

        // if (this.playerOne.x > this.playerTwo.x - monkeyFront.width && this.playerOne.x < this.playerTwo.x + monkeyFront.width && this.playerOne.y > this.playerTwo.y - monkeyFront.height && this.playerOne.y < this.playerTwo.y + monkeyFront.height) {
        //     this.playerOne.x -= 10;
        //     this.playerTwo.x += 10;
        //     // HUR FLYTTA KORREKT????????
        //     // this.playerOne.x -= this.playerOne.speed.x;
        // } else {
        //     move = 5;
        // }
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
        const gunFireP1 = this.playerOne.update();
        if (gunFireP1) {
            this.entities.push(gunFireP1);
            setTimeout(() => {
                this.entities.pop();
             }, 500);
        }

        const gunFireP2 = this.playerTwo.update();
        if(gunFireP2) {
            this.entities.push(gunFireP2);
            setTimeout(() => {
               this.entities.pop(); 
            }, 500);
        }
        
        for (const entity of this.entities) {
            entity.update();
        }

        this.checkCollision();
    }

    public draw() {
        this.playerOne.draw();
        this.playerTwo.draw();
        this.life.draw();
        
        for (const entity of this.entities) {
            entity.draw();
        }

        // this.barricade.update();
        // this.gameState.setGameState('Running');
        // // keyPressed();
        // // this.windowBounderies();
        // rectMode(CENTER);
        // noStroke();
        // fill(255);

        // // character test
        // rect(rectX1, rectY1, rectWidth, rectHeight);
    }

    public openGame() {

    }
}
