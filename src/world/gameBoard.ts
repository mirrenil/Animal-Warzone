
class GameBoard {
    public gameState: GameState;
    //private life: Life;
    private worldMap: WorldMap;
    private entities: Entity[];
    public playerOne: Character;
    public playerTwo: Character;

    constructor(gameState: GameState, activeCharacterName: CharacterNameLabel,
        activeCharacterName2: CharacterNameLabel) {

            
        this.gameState = gameState;
        this.worldMap = new WorldMap(
            entites.barricade,
            50,
            50,
            createVector(0, 0)

        );
        this.entities = this.worldMap.getEntities();
       

        this.playerTwo = new Character(
            2,
            this.getCharacterImage(activeCharacterName2),
            // createVector(150, height * .5 - 30), //this.worldMap.getPlayerOnePosition()
            width * .3 + 600,
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
       
        this.playerOne = new Character(
            1,
            this.getCharacterImage(activeCharacterName),
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
        switch (name) {
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
                if (entity1 === entity2) continue;

                if (entity1.x < entity2.x + entity2.size.x &&
                    entity1.x + entity1.size.x > entity2.x &&
                    entity1.y < entity2.y + entity2.size.y &&
                    entity1.size.y + entity1.y > entity2.y) {
                    if (entity1 instanceof Character) {

                        if (entity2 instanceof Character) {
                            entity1.x -= entity1.velocity.x;
                            entity1.y -= entity1.velocity.y;
                        }
                   
                        if (entity2 instanceof GunFire) { 
                            if (entity2.playerNum !== entity1.playerNum ) {
                                    this.entities.splice(this.entities.indexOf(entity2), 1);
                                    if (!entity1.isShielding) {
                                        entity1.totalLives =  entity1.totalLives -1;
                                    }
                                    if (entity1.totalLives === 0) {
                                        entity1.isLosing === true;
                                        this.gameState.setGameState('GameOver');
                                    }
                                }   
                        }
                        if (entity2 instanceof Shield) {
                            if (!entity1.isShielding) {
                                this.entities.splice(this.entities.indexOf(entity2), 1);
                                entity1.isShielding =  true;
                            }  
                        }
                        if (entity2 instanceof Speed){
                            if (!entity1.isSpeeding) {
                                this.entities.splice(this.entities.indexOf(entity2), 1);
                                entity1.isSpeeding =  true; 
                            } 
                        }
                        if (entity2 instanceof ExtraLife) {
                            this.entities.splice(this.entities.indexOf(entity2), 1);
                            entity1.totalLives =  entity1.totalLives + 1;
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
                            if (entity1.x > width || entity1.x < 0 || entity1.y > height || entity1.y < 0) {
                            this.entities.splice(this.entities.indexOf(entity1), 1);
                        }
                        
                        if (entity2 instanceof Barricade) {
                            this.entities.splice(this.entities.indexOf(entity1), 1); 
                            entity2.damageTaken = entity2.damageTaken + 1;
                            
                            if (entity2.damageTaken === 2) {
                                this.entities.splice(this.entities.indexOf(entity2), 1);
                            }
                        }
                    }
                }
            }
        }
    }

    public update() {
        const gunFireP1 = this.playerOne.update();
        if (gunFireP1) {
            this.entities.push((gunFireP1));
        }
        
        const gunFireP2 = this.playerTwo.update();
        if (gunFireP2) {
            this.entities.push(gunFireP2);
        }
        
        
        for (const entity of this.entities) {
            entity.update();
        }
        this.checkCollision();

    }


    public draw() {
        this.playerOne.draw();
        this.playerTwo.draw();
        for (const entity of this.entities) {
            entity.draw();
        }

    }

    public isPaused() {
        // if(e.keyCode == 77)
        
    } 
}
