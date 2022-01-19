class GameOverMenu {
     private gameState: GameOver;
     private gameOverMenu: any | undefined;
    // private width: Number;
    // private height: Number;
    // public characters: p5.Image;


    // constructor(width: Number, height: Number, appearance: p5.Image, mainMenuButton: any, startGameButton: any) {
         //this.menuState = 'gameOver';
    // }

    
    constructor(gameState = GameOver) { 
        this.gameOverMenu = new GameOverMenu(this); 

        this.gameOverMenu = document.createElement('body');
        this.gameOverMenu.className = 'body';

        const gameOverTitle = document.createElement('div');
        gameOverTitle.className = 'gameOverTitle flex evenly';
        this.gameOverMenu.append(gameOverTitle);

        const winner = document.createElement('span');
        winner.className = 'gameOverTitle';
        winner.textContent = 'WINNER';
        this.gameOverTitle.append(winner);

        const loser = document.createElement('span');
        winner.className = 'gameOverTitle';
        loser.textContent = 'LOSER';
        this.gameOverTitle.append(loser);

        this.charactersDiv = document.createElement('div');
        this.charactersDiv.className = 'characters';
        
        const pig = document.createElement('img');
        pig.src = '../documents/gameCharacters/monkeyFront.png';
        this.charactersDiv.append(pig);

        const monkey = document.createElement('img');
        monkey.src = '../documents/gameCharacters/monkeyFront.png';
        this.charactersDiv.append(monkey);

        const turtle = document.createElement('img');
        turtle.src = '/documents/gameCharacters/turtleFront.png';
        this.charactersDiv.append(turtle);
        
        const rabbit = document.createElement('img');
        rabbit.src = '/documents/gameCharacters/rabbitFront.png';
        this.charactersDiv.append(rabbit);


        this.buttonsDiv = document.createElement('div');
        this.buttonsDiv.className = "";
        this.gameOverMenu.append(buttonsDiv);

        const playAgainBtn = document.createElement('button');
        playAgainBtn.className = 'button a';
        playAgainBtn.textContent = 'PLAY AGAIN';
        this.buttonsDiv.append(playAgainBtn);
        // playAgainBtn.addEventListener('click');

        const mainMenuBtn = document.createElement('button');
        mainMenuBtn.className = 'button a';
        mainMenuBtn.textContent = 'MAIN MENU';
        this.buttonsDiv.append(mainMenuBtn);
        //mainMenuBtn.addEventListener('click', startMenu);
        
    }
    public openGameOverMenu() {
        document.body.append(this.gameOverMenu);
    }

    // public closeGameOverMenu() {
    //     this.closeGameOverMenu.remove();
    // }


    public startGame() {

    }

    public quit() {

    }

    public draw() {
    imageMode(CENTER);
    image(monkeyBig, windowHeight / 2, windowWidth / 2);
    image(pigBig, windowHeight / 2, windowWidth / 2);
    image(rabbitBig, windowHeight / 2, windowWidth / 2);
    image(turtleBig, windowHeight / 2, windowWidth / 2);

    }
}