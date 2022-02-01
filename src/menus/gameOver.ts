class GameOverMenu {
    private gameState: GameState;
    private gameOverMainDiv:  HTMLDivElement;
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
    private imageWinner: HTMLImageElement;
    private imageLoser: HTMLImageElement;
    

     constructor(gameState: GameState) { 
        this.gameState = gameState;
        /** CREATING DIVS AND SPAN */
        this.gameOverMainDiv = document.createElement('div');
        this.gameOverMainDiv.className = 'gameOverMainDiv';
        

        this.gameOverDiv = document.createElement('div');
        this.gameOverDiv.className = 'flex evenly';

        this.gameOverWinner = document.createElement('div');
        this.gameOverWinner.className = 'gameOverWinner flex column align padding-right padding-top';
        

        this.winner = document.createElement('span');
        this.winner.textContent = 'WINNER';
        

        this.gameOverLoser = document.createElement('div');
        this.gameOverLoser.className = 'gameOverLoser flex column padding-top';


        this.loser = document.createElement('span');
        this.loser.textContent = 'LOSER';

        
        /** CHARACTER WINNER */

        this.winnersDiv = document.createElement('div');
        this.winnersDiv.className = 'characters align';

        this.imageWinner = document.createElement('img');
        this.imageWinner.className = 'winner';
        this.imageWinner.src = '/assets/images/big.png';
   

        /** CHARACTER LOSER */

        this.losersDiv = document.createElement('div');
        this.losersDiv.className = 'characters align ';
       
        
        this.imageLoser = document.createElement('img');
        this.imageLoser.className = 'loser';
        this.imageLoser.src = '/assets/images/big.png';
        
        /** BUTTONS */

        this.buttonsDiv = document.createElement('div');
        this.buttonsDiv.className = "btn-div";
        

        this.playAgainBtn = document.createElement('button');
        this.playAgainBtn.textContent = 'Play Again';
        this.playAgainBtn.className = 'btn';
        this.playAgainBtn.addEventListener('click', () => this.startNewGame());
        
        this.mainMenuBtn = document.createElement('button');
        this.mainMenuBtn.textContent = 'Main Menu';
        this.mainMenuBtn.className = 'btn';
        this.mainMenuBtn.addEventListener('click', () => this.goToMainMenu());
        

        /** APPEND TO MAINDIV */
       
        this.gameOverMainDiv.append(this.gameOverDiv, this.buttonsDiv);
        this.buttonsDiv.append(this.playAgainBtn, this.mainMenuBtn);
        this.gameOverDiv.append(this.gameOverWinner, this.gameOverLoser);
        this.gameOverWinner.append(this.winner, this.winnersDiv);
        this.winnersDiv.append(this.imageWinner);
        this.gameOverLoser.append(this.loser, this.losersDiv);
        this.losersDiv.append(this.imageLoser);
        
        
        // this.openGameOverMenu();
    }

    public openGameOverMenu(player1: Character, player2: Character) {
        console.log(player1);
        
        if (player1.isLosing) {
            
            
            this.imageLoser.style.height = '200px';
            this.setLoser();
            this.imageWinner.style.height = '500px'
            this.setWinner();
            // console.log('append');
            
               
        } else if (player2.isLosing) {
            this.imageLoser.style.height = '200px';
            this.setLoser();
            this.imageWinner.style.height = '500px';
            this.setWinner();
        
        }

       document.body.append(this.gameOverMainDiv);
    }

    public setWinner(name: CharacterNameLabel) {
        this.imageWinner.src = '';
        if (name === "monkey") {
            images.monkeyBig
            
        } else if (name === "pig") {
            images.pigBig
            
        } else if (name === "turtle") {
            images.turtleBig
            
        } else if (name === "rabbit") {
            images.rabbitBig
        }
    }

    
    

    public setLoser(name: CharacterNameLabel) {
        this.imageLoser.src = '';
        if (name === "monkey") {
            images.monkeyBig;
            
        } else if (name === "pig") {
            images.pigBig;
            
        } else if (name === "turtle") {
            images.turtleBig;
            
        } else if (name === "rabbit") {
            images.rabbitBig;
        }
    }

    public startNewGame() {
        this.gameState.setGameState('Character');
        this.gameOverMainDiv.remove();
    }


    public goToMainMenu() {
        this.gameState.setGameState('Start');
        this.gameOverMainDiv.remove();
    }
    
    public draw() {
    
    }

    public update(){
 
    }
}