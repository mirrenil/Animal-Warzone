class PausedMenu {
    private gameState: GameState;
    private pausedMenuDiv: HTMLDivElement;
    // private gamepaused: boolean;
    // private continueGameButton: any;
    // private exitGameButton: any;
  
    // constructor(gamepaused: boolean, continueGameButton:any){
  
    // }
    // public isPaused(){
  
    // }
    constructor(gameState: GameState){
      this.gameState = gameState;
      this.pausedMenuDiv = document.createElement("div");
      this.pausedMenuDiv.className = "pauseMenu";
  
      const pauseMenuTitles = document.createElement("h1");
      pauseMenuTitles.innerText = "Paused";
      this.pausedMenuDiv.appendChild(pauseMenuTitles)
  
      const pauseMenuButtonsDiv = document.createElement("div");
      pauseMenuButtonsDiv.className = "pauseMenuButtons"
      const ResumeMenuButton = document.createElement("button");
      ResumeMenuButton.className = "resumeMenuButton";
      ResumeMenuButton.innerText = "Resume";
      const quitMenuButton = document.createElement("button");
      quitMenuButton.className = "resumeMenuButton";
      quitMenuButton.innerText = "Quit";
      pauseMenuButtonsDiv.append(quitMenuButton, ResumeMenuButton)
      this.pausedMenuDiv.append(pauseMenuButtonsDiv)
  
      ResumeMenuButton.addEventListener('click',() => this.handleResumeGame);
      quitMenuButton.addEventListener('click', () => this.closeMenu);
      this.openPauseMenu();
      }
      private handleResumeGame() {
        this.gameState.setGameState("Running");
        this.closeMenu();
        
    }
    public openPauseMenu(){
      document.body.appendChild(this.pausedMenuDiv);
      console.log('daaaa22')
    }
    private closeMenu() {
      this.pausedMenuDiv.remove();
  }
  
  
   // public draw(){
  
    // }
  }
  