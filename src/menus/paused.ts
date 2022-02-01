class PausedMenu {
    private gameState: GameState;
    public pausedMenuDiv: HTMLDivElement;

   
    constructor(gameState: GameState){
      this.gameState = gameState;
      
      this.pausedMenuDiv = document.createElement("div");
      this.pausedMenuDiv.className = "pausedMenuDiv";
  
      const pauseDiv = document.createElement('div');
      pauseDiv.className = 'pauseSmallDiv';

      const pauseMenuTitles = document.createElement("h2");
      pauseMenuTitles.className = 'pause-text';
      pauseMenuTitles.innerText = "Paused";
  
      const pauseMenuButtonsDiv = document.createElement("div");
      pauseMenuButtonsDiv.className = "button-div";

      const ResumeMenuButton = document.createElement("button");
      ResumeMenuButton.className = "btn";
      ResumeMenuButton.innerText = "Resume";
      const mainMenuButton = document.createElement("button");
      mainMenuButton.className = "btn";
      mainMenuButton.innerText = "Main Menu";
      pauseMenuButtonsDiv.append(mainMenuButton, ResumeMenuButton);
      pauseDiv.append(pauseMenuTitles, pauseMenuButtonsDiv);
      this.pausedMenuDiv.append(pauseDiv);
  
      ResumeMenuButton.addEventListener('click',() => this.handleResumeGame());
      mainMenuButton.addEventListener('click', () => this.closeMenu());
      }
      private handleResumeGame() {
        this.pausedMenuDiv.remove();
        isPaused = false;
    }
    public openPauseMenu(){
      document.body.append(this.pausedMenuDiv);
    }

    private closeMenu() {
      window.location.reload();
  }

  
  public draw() {

  }
}

