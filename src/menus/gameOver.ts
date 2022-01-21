//---- GLOBAL VARIABLES ----//

let monkeyBig: p5.Image;
let pigBig: p5.Image;
let rabbitBig: p5.Image;
let turtleBig: p5.Image;
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
    private pigW: HTMLImageElement;
    private monkeyW: HTMLImageElement;
    private turtleW: HTMLImageElement;
    private rabbitW: HTMLImageElement;
    private pig: HTMLImageElement;
    private monkey: HTMLImageElement;
    private turtle: HTMLImageElement;
    private rabbit: HTMLImageElement;

     constructor(gameState: GameState ) { 
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
       
        
        this.pigW = document.createElement('img');
        this.pigW.className = 'winner blocked';
        this.pigW.src = '/assets/images/bigPig.png';
   

        this.monkeyW = document.createElement('img');
        this.monkeyW.className = 'winner blocked';
        this.monkeyW.src = '/assets/images/bigMonkey.png';
     

        this.turtleW = document.createElement('img');
        this.turtleW.className = 'winner blocked';
        this.turtleW.src = '/assets/images/bigTurtle.png';
       
        
        this.rabbitW = document.createElement('img');
        this.rabbitW.className = 'winner';
        this.rabbitW.src = '/assets/images/bigRabbit.png';
        


        /** CHARACTER LOSER */

        this.losersDiv = document.createElement('div');
        this.losersDiv.className = 'characters align ';
       
        
        this.pig = document.createElement('img');
        this.pig.className = 'loser blocked';
        this.pig.src = '/assets/images/bigPig.png';
   

        this.monkey = document.createElement('img');
        this.monkey.className = 'loser blocked';
        this.monkey.src = '/assets/images/bigMonkey.png';
     

        this.turtle = document.createElement('img');
        this.turtle.className = 'loser';
        this.turtle.src = '/assets/images/Bigturtle.png';

        
        this.rabbit = document.createElement('img');
        this.rabbit.className = 'loser blocked';
        this.rabbit.src = '/assets/images/bigRabbit.png'
       
        
        /** BUTTONS */

        this.buttonsDiv = document.createElement('div');
        this.buttonsDiv.className = "flex column center align";
        

        this.playAgainBtn = document.createElement('button');
        this.playAgainBtn.textContent = 'Play Again';
        this.playAgainBtn.className = 'btn';
        this.playAgainBtn.addEventListener('click', () => this.startNewGame());
        this.startNewGame();
        
        this.mainMenuBtn = document.createElement('button');
        this.mainMenuBtn.textContent = 'Main Menu';
        this.mainMenuBtn.className = 'btn';
        this.mainMenuBtn.addEventListener('click', () => this.goToMainMenu());
        

        /** APPEND TO MAINDIV */
       
        this.gameOverMainDiv.append(this.gameOverDiv, this.buttonsDiv);
        this.buttonsDiv.append(this.playAgainBtn, this.mainMenuBtn);
        // this.playAgainBtn.append(this.buttonsDiv);
        // this.mainMenuBtn.append(this.buttonsDiv);
        this.gameOverDiv.append(this.gameOverWinner, this.gameOverLoser);
        this.gameOverWinner.append(this.winner, this.winnersDiv);
        this.winnersDiv.append(this.pigW, this.rabbitW, this.monkeyW, this.turtleW);
        this.gameOverLoser.append(this.loser, this.losersDiv);
        this.losersDiv.append(this.pig, this.rabbit, this.monkey, this.turtle);
        
       
        
        
        this.openGameOverMenu();

    }
    
    public openGameOverMenu() {
       document.body.append(this.gameOverMainDiv);
    }

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
        
    // imageMode(CENTER);
    // image(monkeyBig, windowHeight / 2, windowWidth / 2);
    // image(pigBig, windowHeight / 2, windowWidth / 2);
    // image(rabbitBig, windowHeight / 2, windowWidth / 2);
    // image(turtleBig, windowHeight / 2, windowWidth / 2);
    }

    public update(){

    }

}
