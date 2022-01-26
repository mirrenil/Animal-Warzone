
let rectX1: number = 600;
let rectY1: number = 300;
let rectWidth: number = 100;
let rectHeight: number = 100;
let move = 5;

class GameBoard {
    private gameState: GameState;
    private PlayersLifes: PlayersLifes;
    private worldMap: WorldMap;
    private entities: Entity[];
    private playerOne: Character;
    private playerTwo: Character;

    constructor(gameState: GameState) {
        this.gameState = gameState;
        this. PlayersLifes = new PlayersLifes(createVector(10, 10));
        this.worldMap = new WorldMap(
            barricade,
            50,
            50,
            createVector(10, 10)

        );
        this.entities = this.worldMap.getEntities();

        this.playerOne = new Character(
            turtleFront, 
            width - 150,
            height * .5 - 30,
            createVector(90, 80),
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
            150,
            height * .5 - 30,
            createVector(90, 80),
            {
                left: 65,
                right: 68,
                up: 87,
                down: 83,
                shoot: 32
            }
        );
    }



    // private checkCollision() {
    //     if(this.player1.position.x < this.player2.position.x + this.player2.size.x &&
    //       this.player1.position.x + this.player1.size.x > this.player2.position.x &&
    //       this.player1.position.y < this.player2.position.y + this.player2.size.y &&
    //       this.player1.size.y + this.player1.position.y > this.player2.position.y) {
    //           this.player1.speed = this.player1.speed * -1;
    //           this.player2.speed = this.player2.speed * -1;
    //       } else {
    //         this.player1.speed = 15;
    //         this.player2.speed = 15;
    //       }
    // }

    private checkCollision() {
        const allEntities = [...this.entities, this.playerOne, this.playerTwo];
        for (const entity1 of allEntities) {
            for (const entity2 of allEntities) {
                // console.log(allEntities);
                
                if (entity1 === entity2) continue;
                

                if (entity1.x < entity2.x + entity2.size.x && 
                    entity1.x + entity1.size.x > entity2.x && 
                    entity1.y < entity2.y + entity2.size.y && 
                    entity1.size.y + entity1.y > entity2.y) {
                    
                
                if (true) {
                    if (entity1 instanceof Character) {
                        if (entity2 instanceof Character) {
                            // this.playerOne.speed = this.playerOne.speed * -1;
                            // this.playerTwo.speed = this.playerOne.speed * -1;
                        } 
                        if (entity2 instanceof GunFire) {
                            // console.log('gunfire hit Character');

                        }
                        if (entity2 instanceof Shield) {
                            // reaktion
                        }
                        if (entity2 instanceof ExtraLife) {
                            // console.log('Character passed ExtraLife');

                        }
                        if (entity2 instanceof Barricade) {
                            
                        //    this.playerOne.speed = this.playerOne.speed * -1;
                            // this.playerTwo.speed = this.playerOne.speed * -1;
                            console.log('brricade')
                        } else {
                            // this.playerOne.speed = this.playerOne.speed;
                            // this.playerTwo.speed = this.playerOne.speed;
                        }
                    }
                    if (entity1 instanceof GunFire) {
                        if (entity2 instanceof Barricade) {
                            // const index = this.entities.indexOf(Barricade, 0);
                            // if (index > -1) {
                            // this.entities.splice(index, 1);
                            // }
                            // this.entities.pop();
                            console.log('gunfire hit barricade');
                        }
                       
                    }
                }
            }
        }
    }
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
        this. PlayersLifes.draw();
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
    };

    public openGame() {

    }
}
