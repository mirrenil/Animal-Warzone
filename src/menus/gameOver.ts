class GameOverMenu {
    private gameState: GameState;
    private gameOverDiv: HTMLDivElement;
     
    private gameOverWinner: HTMLDivElement;
    private gameOverLoser: HTMLDivElement;
    private winnersDiv: HTMLDivElement;
    private losersDiv: HTMLDivElement;
    private winner: HTMLSpanElement;
    private loser: HTMLSpanElement;
    private buttonsDiv: HTMLDivElement;
    private playAgainBtn: HTMLButtonElement;
    private mainMenuBtn: HTMLButtonElement;
    private pig: HTMLImageElement;
    private monkey: HTMLImageElement;
    private turtle: HTMLImageElement;
    private rabbit: HTMLImageElement;

     //public buttonsDiv: HTMLDivElement;
     
    // private width: Number;
    // private height: Number;
    // public characters: p5.Image;

    
     constructor(gameState: GameState ) { 
        this.gameState = gameState;


        /** CREATING DIVS AND SPAN */

        this.gameOverDiv = document.createElement('div');
        this.gameOverDiv.className = 'flex evenly';

        this.gameOverWinner = document.createElement('div');
        this.gameOverWinner.className = 'gameOverTitle flex column align padding-right padding-top';
        this.gameOverDiv.append(this.gameOverWinner);

        this.winner = document.createElement('span');
        this.winner.textContent = 'WINNER';
        this.gameOverWinner.append(this.winner);

        this.gameOverLoser = document.createElement('div');
        this.gameOverLoser.className = 'gameOverTitle flex column padding-top';
        this.gameOverDiv.append(this.gameOverLoser);

        this.loser = document.createElement('span');
        this.loser.textContent = 'LOSER';
        this.gameOverLoser.append(this.loser);

        
        /** CHARACTER WINNER */

        this.winnersDiv = document.createElement('div');
        this.winnersDiv.className = 'characters padding-top align padding-left';
        this.gameOverWinner.append(this.winnersDiv)
        
        this.pig = document.createElement('img');
        this.pig.src = '../documents/gameCharacters/monkeyFront.png';
        this.winnersDiv.append(this.pig);

        this.monkey = document.createElement('img');
        this.monkey.src = '../documents/gameCharacters/monkeyFront.png';
        this.winnersDiv.append(this.monkey);

        this.turtle = document.createElement('img');
        this.turtle.src = '/documents/gameCharacters/turtleFront.png';
        this.winnersDiv.append(this.turtle);
        
        this.rabbit = document.createElement('img');
        this.rabbit.src = '/documents/gameCharacters/rabbitFront.png';
        this.winnersDiv.append(this.rabbit);


        /** CHARACTER LOSER */

        this.losersDiv = document.createElement('div');
        this.losersDiv.className = 'characters padding-top align padding-left';
        this.gameOverDiv.append(this.losersDiv)
        
        this.pig = document.createElement('img');
        this.pig.src = '../documents/gameCharacters/monkeyFront.png';
        this.losersDiv.append(this.pig);

        this.monkey = document.createElement('img');
        this.monkey.src = '../documents/gameCharacters/monkeyFront.png';
        this.losersDiv.append(this.monkey);

        this.turtle = document.createElement('img');
        this.turtle.src = '/documents/gameCharacters/turtleFront.png';
        this.losersDiv.append(this.turtle);
        
        this.rabbit = document.createElement('img');
        this.rabbit.src = '/documents/gameCharacters/rabbitFront.png';
        this.losersDiv.append(this.rabbit);
        
        /** BUTTONS */

        this.buttonsDiv = document.createElement('div');
        this.buttonsDiv.className = "flex column center align";
        document.body.append(this.buttonsDiv);

        this.playAgainBtn = document.createElement('button');
        this.playAgainBtn.textContent = 'PLAY AGAIN';
        this.buttonsDiv.append(this.playAgainBtn);
        this.playAgainBtn.addEventListener('click', () => this.startNewGame());

        this.mainMenuBtn = document.createElement('button');
        this.mainMenuBtn.textContent = 'MAIN MENU';
        this.buttonsDiv.append(this.mainMenuBtn);
        this.mainMenuBtn.addEventListener('click', () => this.goToMainMenu());
    }
    
    // public openGameOverMenu() {
    //     document.body.append(this.gameOverMenu);
    // }

    // public closeGameOverMenu() {
    //     this.closeGameOverMenu.remove();
    // }


    public startNewGame() {
        this.gameState.setGameState('Character');
        this.gameOverDiv.remove();
    }

    public goToMainMenu() {
        this.gameState.setGameState('Start');
        this.gameOverDiv.remove();
    }
    
    public draw() {
    imageMode(CENTER);
    image(monkeyBig, windowHeight / 2, windowWidth / 2);
    image(pigBig, windowHeight / 2, windowWidth / 2);
    image(rabbitBig, windowHeight / 2, windowWidth / 2);
    image(turtleBig, windowHeight / 2, windowWidth / 2);
    }
}