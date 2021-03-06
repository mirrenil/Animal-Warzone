class GameBoard {
    public gameState: GameState;
    private worldMap: WorldMap;
    private entities: Entity[];
    public playerOne: Character;
    public playerTwo: Character;

    constructor(gameState: GameState, activeCharacterName: CharacterNameLabel,
        activeCharacterName2: CharacterNameLabel) {     
        this.gameState = gameState;

        // Barricade
        this.worldMap = new WorldMap(
            entites.barricade,
            50,
            50,
        );
        this.entities = this.worldMap.getEntities();
       
        // Character playerOne
        this.playerOne = new Character(
            1,
            activeCharacterName,
            this.getCharacterImage(activeCharacterName),
            width * .1 - 40,
            height * .5 - 30,
            createVector(80, 80),
            {
                left: 65,
                right: 68,
                up: 87,
                down: 83,
                shoot: 32,
            }
        );
        
        // Character playerTwo
        this.playerTwo = new Character(
            2,
            activeCharacterName2,
            this.getCharacterImage(activeCharacterName2),
            width * .85 + 40,
            height * .5 - 30,
            createVector(80, 80),
            {
                left: LEFT_ARROW,
                right: RIGHT_ARROW,
                down: DOWN_ARROW,
                up: UP_ARROW,
                shoot: ENTER,
            }
        );
        this.entities.push(this.playerOne, this.playerTwo);
    }

    private getCharacterImage(name: CharacterNameLabel) {
        switch (name) {
            case "turtle":  return images.turtleFront;
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

                    // Collision between the characters and the rest of the entities
                    if (entity1 instanceof Character) {
                        // Collision between the characters
                        if (entity2 instanceof Character) {
                            entity1.x -= entity1.velocity.x;
                            entity1.y -= entity1.velocity.y;
                            sound.collisionSound.play();
                        }
                        // Collision between the characters and gunfire
                        if (entity2 instanceof GunFire) { 
                            if (entity2.playerNum !== entity1.playerNum ) {
                                    sound.shieldHit.play();
                                    this.entities.splice(this.entities.indexOf(entity2), 1);
                                    if (!entity1.isShielding) {
                                        entity1.totalLives =  entity1.totalLives -1;
                                        sound.drainLifeSound.play();
                                        sound.shieldHit.stop();
                                    }
                                    // if either player has 0 lives changes game state to game over
                                    if (entity1.totalLives === 0) {
                                        entity1.isLosing = true;
                                        this.gameState.setGameState('GameOver');
                                    }
                                }   
                        }
                        // Collision between the characters and Shields
                        if (entity2 instanceof Shield) {
                            if (!entity1.isShielding) {
                                this.entities.splice(this.entities.indexOf(entity2), 1);
                                entity1.isShielding =  true;
                                sound.powerupSound.play();
                                setTimeout(() => {
                                    entity1.isShielding = false; 
                                   }, 15000);
                            } 
                        }
                        // Collision between the characters and Speeds
                        if (entity2 instanceof Speed){
                            if (!entity1.isSpeeding) {
                                entity1.isSpeeding =  true;
                                this.entities.splice(this.entities.indexOf(entity2), 1);
                                sound.powerupSound.play();
                                setTimeout(() => {
                                    entity1.isSpeeding = false; 
                                    
                                   }, 10000);
                            } 
                        }
                        // Collision between the characters and ExtraLife
                        if (entity2 instanceof ExtraLife) {
                            this.entities.splice(this.entities.indexOf(entity2), 1);
                            entity1.totalLives =  entity1.totalLives + 1;
                            sound.extraBonus.play();
                        }
                        // Collision between the characters and Barricade
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
                        }
                    }
                    // Collision between the Barricade and the rest of the entities
                    if (entity1 instanceof Barricade) {
                         // Collision between the Barricade and GunFire
                        if (entity2 instanceof GunFire) {
                            const index1 = this.entities.indexOf(entity1);
                            const index2 = this.entities.indexOf(entity2);
                            this.entities.splice(index2, 1);                            
                            entity1.damageTaken = entity1.damageTaken + 1;
                            sound.breakBarricadeSound.play();
                            
                            // destroying the barricade after tow hits
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
