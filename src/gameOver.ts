class GameOver {
    // private menuState: MenuState;
    // private width: Number;
    // private height: Number;
    // public characters: p5.Image;


    // constructor(width: Number, height: Number, appearance: p5.Image, mainMenuButton: any, startGameButton: any) {
    //     this.menuState = 'gameOver';
    // }

    public startGame() {

    }

    public quit() {

    }

    public draw() {

    }

    private gameOverMenu: any | undefined;
    // private gameOverTitle: HTMLDivElement | undefined;
    
    // public charactersDiv: HTMLDivElement;
   
    // public playAgainBtn: HTMLButtonElement;
    // public mainMenuBtn: HTMLButtonElement;

    
    constructor(private buttonsDiv: HTMLDivElement) {       
        this.gameOverMenu = document.createElement('body');
        this.gameOverMenu.className = 'body';

        // const gameOverTitle = document.createElement('div');
        // gameOverTitle.className = 'gameOverTitle flex evenly';
        // this.gameOverMenu.append('div');

        // const winner = document.createElement('span');
        // winner.className = 'gameOverTitle';
        // winner.textContent = 'WINNER';
        // this.gameOverTitle.append('span');

        // const loser = document.createElement('span');
        // winner.className = 'gameOverTitle';
        // loser.textContent = 'LOSER';
        // this.gameOverTitle.append('span');

        // this.charactersDiv = document.createElement('div');
        // this.charactersDiv.className = 'characters';
        
        // const pig = document.createElement('img');
        // pig.src = '../documents/gameCharacters/monkeyFront.png';
        // this.charactersDiv.append('pig');

        // const monkey = document.createElement('img');
        // monkey.src = '../documents/gameCharacters/monkeyFront.png';
        // this.charactersDiv.append('monkey');

        // const turtle = document.createElement('img');
        // turtle.src = '/documents/gameCharacters/turtleFront.png';
        // this.charactersDiv.append('turtle');
        
        // const rabbit = document.createElement('img');
        // rabbit.src = '/documents/gameCharacters/rabbitFront.png';
        // this.charactersDiv.append('rabbit');


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
        // mainMenuBtn.addEventListener('click');
        
    }
    public openGameOverMenu() {
        document.body.append(this.gameOverMenu);
    }
}
    // public closeGameOverMenu() {
    //     this.closeGameOverMenu.remove();
    // }

