//---- GLOBAL VARIABLES ----//
let animalWarzon: p5.Image;
class StartMenu {
    private gameState: GameState;
    public startMenuDivEl: HTMLDivElement;
    private startMenuPicture: HTMLImageElement;

    // private width: Number;
    // private height: Number;
    // private appearance: p5.Image;
    // private gameInstructions: Instructions;

    constructor(gameState: GameState) {
        this.gameState = gameState;

        this.startMenuDivEl = document.createElement('div');
        this.startMenuDivEl.className = 'startMenuContainer';

        this.startMenuPicture = document.createElement('img');
        this.startMenuPicture.src = "/assets/images/startMenuImg.png";

        const startMenuHeaderEl = document.createElement('h1');
        startMenuHeaderEl.className = 'startMenuTitle';
        startMenuHeaderEl.textContent = 'Animal Warzone';

        const newGameButtonEl = document.createElement('button');
        newGameButtonEl.addEventListener('click', () => this.startNewGame());
        newGameButtonEl.textContent = 'Starta'
        newGameButtonEl.className = 'btn'


        const instructionsButtonEl = document.createElement('button');
        instructionsButtonEl.addEventListener('click', () => this.showInstructionsMenu());
        instructionsButtonEl.textContent = 'Instruction'
        instructionsButtonEl.className = 'btn'

        this.startMenuDivEl.append(startMenuHeaderEl, this.startMenuPicture, newGameButtonEl, instructionsButtonEl)
        // this.openStartMenu();
    }


    public openStartMenu() {
        // console.log('open');
        document.body.append(this.startMenuDivEl);
    }


    public startNewGame() {
        this.gameState.setGameState("Running");
        this.startMenuDivEl.remove();
    }


    public showInstructionsMenu() {
        this.gameState.setGameState('Instructions');
        this.startMenuDivEl.remove(); // ta ev bort.
    }


    public draw() {
        
    }
}