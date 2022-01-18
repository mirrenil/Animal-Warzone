class StartMenu {
    private gameState: GameState;
    private startMenuDivEl: HTMLDivElement;
    // private width: Number;
    // private height: Number;
    // private appearance: p5.Image;
    // private gameInstructions: Instructions;

    constructor(gameState: GameState) {
        this.gameState = gameState;

        this.startMenuDivEl = document.createElement('div');
        this.startMenuDivEl.className = 'startMenuContainer';
        this.startMenuDivEl.append('div');

        const startMenuHeaderEl = document.createElement('h1');
        startMenuHeaderEl.className = 'startMenuTitle';
        startMenuHeaderEl.textContent = 'Animal Warzone';
        this.startMenuDivEl.append('h1');

        const newGameButtonEl = document.createElement('button');
        newGameButtonEl.addEventListener('click', this.startNewGame);

        const instructionsButtonEl = document.createElement('button');
        instructionsButtonEl.addEventListener('click', this.showInstructionsMenu);
        this.startMenuDivEl.append('button'); //Skickar denna upp samtiga buttons eller bara den första ????
    }

    public startNewGame() {
        this.gameState.setGameState("Character");
        this.startMenuDivEl.remove();
    }

    public showInstructionsMenu() {
        this.gameState.setGameState('Instructions');
        this.startMenuDivEl.remove();
    }

    // public draw() {

    // }
}