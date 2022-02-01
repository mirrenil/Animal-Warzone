class StartMenu {
    private gameState: GameState;
    public startMenuDivEl: HTMLDivElement;
    private startMenuPicture: HTMLImageElement;

    constructor(gameState: GameState) {
        this.gameState = gameState;

        this.startMenuDivEl = document.createElement('div');
        this.startMenuDivEl.className = 'startMenuContainer';

        this.startMenuPicture = document.createElement('img');
        this.startMenuPicture.className = 'start-image';
        this.startMenuPicture.src = "/assets/images/startMenuImg.png";

        const startMenuHeaderEl = document.createElement('h1');
        startMenuHeaderEl.className = 'startMenuTitle';
        startMenuHeaderEl.textContent = 'Animal Warzone';

        const btnDiv = document.createElement('div');
        btnDiv.className = 'btn-divs';

        const newGameButtonEl = document.createElement('button');
        newGameButtonEl.addEventListener('click', () => this.startNewGame());
        newGameButtonEl.textContent = 'Start';
        newGameButtonEl.className = 'btn';


        const instructionsButtonEl = document.createElement('button');
        instructionsButtonEl.addEventListener('click', () => this.showInstructionsMenu());
        instructionsButtonEl.textContent = 'Instruction'
        instructionsButtonEl.className = 'btn'

        btnDiv.append(newGameButtonEl, instructionsButtonEl);

        /* APPEND TO STARTMENU */

        this.startMenuDivEl.append(startMenuHeaderEl, this.startMenuPicture, btnDiv);
        this.openStartMenu();
    }


    public openStartMenu() {
        document.body.append(this.startMenuDivEl);
    }
    

    public startNewGame() {
        this.gameState.setGameState("Character");
        this.startMenuDivEl.remove();
    }


    public showInstructionsMenu() {
        this.gameState.setGameState('Instructions');
        this.startMenuDivEl.remove(); 
    }
}