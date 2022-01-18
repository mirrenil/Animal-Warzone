interface MenuState {
  activeMenu?:'Start'|'Character'|'Paused'|'GameOver';
}

class Game implements MenuState {
    // private grid: Grid;
    public activeMenu?: "Start" | "Character" | "Paused" | "GameOver";
    // private startMenu: StartMenu;
    // private characterMenu: CharacterMenu;
    // private pausedMenu: PausedMenu;
    private gameOverMenu: GameOverMenu;
    // private gameBoard: GameBoard;
  
    constructor() {
      // this.grid = new Grid(createVector(10, 10));
      this.activeMenu = 'Start'; 
      // this.startMenu = new StartMenu(this);
      // this.characterMenu = new CharacterMenu(this);
      this.gameOverMenu = new GameOverMenu(this);
    }
  
    public update() {
      // this.grid.update();
    }
  
    public draw() {
      background('blue');
      // this.grid.draw();
    }
  }