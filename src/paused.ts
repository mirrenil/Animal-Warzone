class PausedMenu {
    private gameState: GameState;
    private pausedMenuDiv: HTMLDivElement;
    // private gamePaused: Boolean;
    // private continueGameButton: any;
    // private exitGameButton: any;

    // constructor(menuState: MenuState, gamePaused: Boolean, continueGameButton: any, exitGameButton: any) {
    //     this.menuState = 'paused';
    // }

    constructor(gameState: GameState) {
        this.gameState = gameState;
        
        this.pausedMenuDiv = document.createElement("div");
        this.pausedMenuDiv.className = "pauseMenu";
        
        const pauseMenuTitles = document.createElement("h1");
        pauseMenuTitles.innerText = "Paused";
        this.pausedMenuDiv.appendChild(pauseMenuTitles);

        // const img = document.createElement('img');
        // img.src = "./assets/images/BILD.png";

        const pauseMenuButtonsDiv = document.createElement("div");
        pauseMenuButtonsDiv.className = "pauseMenuButtons";
        const resumeMenuButton = document.createElement("button");
        resumeMenuButton.className = "resumeMenuButton";
        const quitMenuButton = document.createElement("button");
        quitMenuButton.className = "resumeMenuButton";
        pauseMenuButtonsDiv.appendChild(resumeMenuButton);
        pauseMenuButtonsDiv.appendChild(quitMenuButton);
        this.pausedMenuDiv.appendChild(pauseMenuButtonsDiv);
        resumeMenuButton.addEventListener('click', this.handleResumeGame);
    }

    private handleResumeGame() {
        this.gameState.setGameState("Running");
        this.closeMenu();
    }
    
    public openMenu() {
        document.body.appendChild(this.pausedMenuDiv);
    }

    private closeMenu() {
        this.pausedMenuDiv.remove();
    }
}