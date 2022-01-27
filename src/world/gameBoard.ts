
// let rectX1: number = 600;
// let rectY1: number = 300;
// let rectWidth: number = 100;
// let rectHeight: number = 100;
// let move = 5;

class GameBoard {

    private gameState: GameState;
    private PlayersLife: PlayersLife;

    public gameState: GameState;
    private life: Life;

    private worldMap: WorldMap;
    private entities: Entity[];
    public playerOne: Character;
    public playerTwo: Character;

    constructor(gameState: GameState, activeCharacterName: CharacterNameLabel, 
         activeCharacterName2: CharacterNameLabel) {

        this.gameState = gameState;
        this. PlayersLife = new PlayersLife(createVector(10, 10));
        this.worldMap = new WorldMap(
            barricade,
            50,
            50,
            createVector(50, 50)

        );
        this.entities = this.worldMap.getEntities();

        this.playerOne = new Character(

            turtleFront, 
            width *0.3 + 200,
            height * .5 - 30,
            createVector(70, 60),

            this.getCharacterImage(activeCharacterName),
            createVector(150, height * .5 - 30), //this.worldMap.getPlayerOnePosition()
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
            width *0.3,
            height * .5 - 30,
            createVector(70, 60),

            this.getCharacterImage(activeCharacterName2),
            createVector(width - 150, height * .5 - 30),
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
                    
                    if (entity1 instanceof Character) {
                        
                        if (entity2 instanceof Character) {
                            // if (entity1.currentDirection === 'right') {
                            //     entity1.x = entity2.x - entity1.size.x;
                            // } else if (entity1.currentDirection === 'left') {
                            //     entity1.x = entity2.x + entity2.size.x;
                            // } else if (entity1.currentDirection === 'up') {
                            //     entity1.y = entity2.y + entity2.size.y;
                            // } else if (entity1.currentDirection === 'down') {
                            //     entity1.y = entity2.y - entity1.size.y;
                            // }
                           
                            // console.log('character', entity1.currentDirection, entity2.currentDirection);

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
                            if (entity1.currentDirection === 'right') {
                                entity1.x = entity2.x - entity1.size.x;
                            } else if (entity1.currentDirection === 'left') {
                                entity1.x = entity2.x + entity2.size.x;
                            } else if (entity1.currentDirection === 'up') {
                                entity1.y = entity2.y + entity2.size.y;
                            } else if (entity1.currentDirection === 'down') {
                                entity1.y = entity2.y - entity1.size.y;
                            }
                        console.log('barricade', entity1, entity2);
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
        this. PlayersLife.draw();
        for (const entity of this.entities) {
            entity.draw();
        }

        // this.barricade.update();
        // this.gameState.setGameState('Running');
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

        // // character test
        // rect(rectX1, rectY1, rectWidth, rectHeight);
    };

    public openGame() {

    }
}
