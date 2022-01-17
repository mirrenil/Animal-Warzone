interface MenuState {
  activeMenu?:'Start'|'Character'|'Paused'|'GameOver';
}

class Game implements MenuState {
    private grid: Grid;
    public activeMenu?: "Start" | "Character" | "Paused" | "GameOver";
    private startMenu: StartMenu;
  
    constructor() {
      this.grid = new Grid(createVector(10, 10))
      this.activeMenu = 'Start';
      this.startMenu = new StartMenu(this);
    }
  
    public update() {
      this.grid.update();
    }
  
    public draw() {
      background('blue');
      this.grid.draw();
    }
  }