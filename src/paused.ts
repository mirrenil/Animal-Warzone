class PausedMenu {
    private gameState: GameState;
    private menuDiv: HTMLDivElement;
    // private gamePaused: Boolean;
    // private continueGameButton: any;
    // private exitGameButton: any;

    // constructor(menuState: MenuState, gamePaused: Boolean, continueGameButton: any, exitGameButton: any) {
    //     this.menuState = 'paused';
    // }

    constructor(gameState: GameState) {
        this.gameState = gameState;
        
        this.menuDiv = document.createElement('div');
        this.menuDiv.className = "";
        
        const p = document.createElement('p');
        p.textContent = "Paused";
        this.menuDiv.append(p);

        const img = document.createElement('img');
        img.src = "./assets/images/BILD.png";

        const button = document.createElement('button');
        button.addEventListener('click', this.handleResumeGame);
    }

    private handleResumeGame() {
        this.gameState.setGameState("Running");
        this.closeMenu();
    }
    
    public openMenu() {
        document.body.append(this.menuDiv);
    }

    private closeMenu() {
        this.menuDiv.remove();
    }
}