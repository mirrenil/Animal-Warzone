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

        /** CHARACTER LOSER */

        this.losersDiv = document.createElement('div');
        this.losersDiv.className = 'characters align ';
       
        
        this.imageLoser = document.createElement('img');
        this.imageLoser.className = 'loser';
       
        /** BUTTONS */

        this.buttonsDiv = document.createElement('div');
        this.buttonsDiv.className = 'btn-div';
        

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
        if (player1.isLosing) { 
            this.setLoser(player1);
            this.setWinner(player2);

        } else if (player2.isLosing) {
            this.setLoser(player2);
            this.setWinner(player1);
        }
        document.body.append(this.gameOverMainDiv);
        music.inGameSound.stop();
        music.gameOverSound.play();
    }

    public setWinner(winner: Character) {
        const name = winner.getName();
        this.imageWinner.src = this.getCharacterImageUrl(name);
    }

    public setLoser(loser: Character) {
        const name = loser.getName();
        this.imageLoser.src = this.getCharacterImageUrl(name);
    }
    
    private getCharacterImageUrl(name: CharacterNameLabel) {
        if (name === 'monkey') {
            return './assets/images/bigMonkey.png';
        } else if (name === 'pig') {
            return './assets/images/bigPig.png';
        } else if (name === 'turtle') {
            return './assets/images/bigTurtle.png';
        } else if (name === 'rabbit') {
            return './assets/images/bigRabbit.png';
        } else {
            return '';
        }
    }

    public startNewGame() {
        this.gameState.setGameState('Character');
        this.gameOverDiv.remove();
        music.gameOverSound.stop();
        this.gameOverMainDiv.remove();
        music.startMenuSound.play();
    }


    public goToMainMenu() {
        this.gameState.setGameState('Start');
        this.gameOverMainDiv.remove();
        music.gameOverSound.stop();
        music.startMenuSound.play();
    }
}