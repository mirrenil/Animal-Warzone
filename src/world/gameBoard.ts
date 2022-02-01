
class GameBoard {
    public gameState: GameState;
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
            activeCharacterName2,
            this.getCharacterImage(activeCharacterName2),
            width * .3 + 600,
            height * .5 - 30,
            createVector(80, 80),
            {

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
            activeCharacterName,
            this.getCharacterImage(activeCharacterName),
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

        this.entities.push(this.playerOne, this.playerTwo);

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

        for (const entity1 of this.entities) {
            for (const entity2 of this.entities) {
                if (entity1 === entity2) continue;

                if (entity1.x < entity2.x + entity2.size.x &&
                    entity1.x + entity1.size.x > entity2.x &&
                    entity1.y < entity2.y + entity2.size.y &&
                    entity1.size.y + entity1.y > entity2.y) {
                    if (entity1 instanceof Character) {

                        if (entity2 instanceof Character) {
                            entity1.x -= entity1.velocity.x;
                            entity1.y -= entity1.velocity.y;
                            sound.collisionSound.play();
                        }
                   
                        if (entity2 instanceof GunFire) { 
                            if (entity2.playerNum !== entity1.playerNum ) {
                                    this.entities.splice(this.entities.indexOf(entity2), 1);
                                    sound.drainLifeSound.play();
                                    if (!entity1.isShielding) {
                                        entity1.totalLives =  entity1.totalLives -1;
                                        console.log(entity1.totalLives);
                                        sound.drainLifeSound.play();
                                    }

                                    if (entity1.totalLives === 0) {
                                        entity1.isLosing = true;
                                        this.gameState.setGameState('GameOver');
                                    }
                                }   
                        }
                        if (entity2 instanceof Shield) {
                            if (!entity1.isShielding) {
                                this.entities.splice(this.entities.indexOf(entity2), 1);
                                entity1.isShielding =  true;
                                sound.powerupSound.play();
                            } 
                        }
                        if (entity2 instanceof Speed){
                            if (!entity1.isSpeeding) {
                                this.entities.splice(this.entities.indexOf(entity2), 1);
                                entity1.isSpeeding =  true; 
                                sound.powerupSound.play();
                            } 
                        }
                        if (entity2 instanceof ExtraLife) {
                            this.entities.splice(this.entities.indexOf(entity2), 1);
                            entity1.totalLives =  entity1.totalLives + 1;
                            sound.powerupSound.play();
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

                    if (entity1 instanceof Barricade) {
                        // console.log(entity1);
                        // console.log(entity2);

                        //     if (entity1.x > width || entity1.x < 0 || entity1.y > height || entity1.y < 0) {
                        //     this.entities.splice(this.entities.indexOf(entity1), 1);
                        //     console.log('ssss');
                            
                        // }
                        if (entity2 instanceof GunFire) {
                            const index1 = this.entities.indexOf(entity1);
                            const index2 = this.entities.indexOf(entity2);
                            this.entities.splice(index2, 1);                            
                            entity1.damageTaken = entity1.damageTaken + 1;
                            console.log(this.entities);
                            console.log(index1, entity1);
                            console.log(index2, entity2);
                            sound.breakBarricadeSound.play();
                            
                            if (entity1.damageTaken === 2) {
                                this.entities.splice(index1, 1);
                                sound.breakBarricadeSound.play();
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
            if (entity instanceof Character) continue;
            entity.update();
        }
        this.checkCollision();

    }


    public draw() {
        for (const entity of this.entities) {
            entity.draw();
        }

    }

    
}
