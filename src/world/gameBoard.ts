
// let rectX1: number = 600;
// let rectY1: number = 300;
// let rectWidth: number = 100;
// let rectHeight: number = 100;
// let move = 5;

class GameBoard {
    public gameState: GameState;
    private PlayersLife: PlayersLife;
    // private life: Life;

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
            this.getCharacterImage(activeCharacterName),
            // createVector(150, height * .5 - 30), 
            // createVector(10, 10),
            // createVector(150, height * .5 - 30), //this.worldMap.getPlayerOnePosition()
            width * .3 +200,
            height * .5 - 30,
            createVector(80, 80),{

                left: LEFT_ARROW,
                right: RIGHT_ARROW,
                down: DOWN_ARROW,
                up: UP_ARROW,
                shoot: ENTER,
                pause: 27,
            }
        );

        // this.playerOne = new Character(
        //     this.getCharacterImage(activeCharacterName2),
        //     // createVector(width - 150, height * .5 - 30),
        //     width * .3,
        //     height * .5 - 30,
        //     createVector(80, 80),
        //     {
        //         left: LEFT_ARROW,
        //         right: RIGHT_ARROW,
        //         up: UP_ARROW,
        //         down: DOWN_ARROW,
        //         shoot: ENTER,
        //         pause: 27,
        //     }
        // );

        this.playerTwo = new Character(
            this.getCharacterImage(activeCharacterName2),
            // createVector(width - 150, height * .5 - 30),
            width * .3,
            height * .5 - 30,
            createVector(80, 80),
            {
                left: 65,
                right: 68,
                up: 87,
                down: 83,
                shoot: 32,
                pause: 27,
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
                            // if (entity1.currentDirection === 'right') {
                            //     entity2.x = entity1.x - entity2.size.x;
                            // } else if (entity1.currentDirection === 'left') {
                            //     entity1.x = entity2.x + entity2.size.x;
                            // } else if (entity1.currentDirection === 'up') {
                            //     entity1.y = entity2.y + entity2.size.y;
                            // } else if (entity1.currentDirection === 'down') {
                            //     entity1.y = entity2.y - entity1.size.y;
                            // }                                     // kulan
                            
                            // console.log('gunfire hit Character');
                            
                        }
                        if (entity2 instanceof Shield) {
                            // reaktion
                        }
                        if (entity2 instanceof ExtraLife) {
                            console.log('Character passed ExtraLife');

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
                        // console.log('barricade', entity1, entity2);
                        }  
                    }
                        if (entity1 instanceof GunFire) {
                            if (entity2 instanceof Barricade) {
                                console.log('träffa item')
                                this.entities.splice(this.entities.indexOf(entity2), 1) 
                                // this.entities.splice(this.entities.indexOf(entity1), 1) 
                                // if (entity1.currentDirection === 'right') {
                                //     entity1.x = entity2.x - entity1.size.x;
                                // } else if (entity1.currentDirection === 'left') {
                                //     entity1.x = entity2.x + entity2.size.x;
                                // } else if (entity1.currentDirection === 'up') {
                                //     entity1.y = entity2.y + entity2.size.y;
                                // } else if (entity1.currentDirection === 'down') {
                                //     entity1.y = entity2.y - entity1.size.y;
                                // }
                            }
                            if (entity2 instanceof Character) {
                               
                            }
                        
                        }
              
            }
        }
    }
}

   

    public update(){
        this.playerOne.update();
        this.playerTwo.update();
        
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
        this.PlayersLife.draw();
        for (const entity of this.entities) {
            entity.draw();
        }

        // this.barricade.update();
        // this.gameState.setGameState('Running');
        // this.barricade.update();
        // for (const entity of this.entities) {
        //     entity.update();
        // }

    }

    public isPaused() {
        if(keyIsDown(27)){
        console.log('Paused');
        }
    }

    public openGame() {

    }


    public pauseGame(){
        this.gameState.setGameState('Paused');
        
    }
}
