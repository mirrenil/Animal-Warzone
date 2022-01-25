
type GameStateLabel = 'Start' | 'Character' | 'Paused' | 'GameOver' | 'Running' | 'Instructions';

interface GameState {
    activeGameState: GameStateLabel;
    setGameState: (state: GameStateLabel) => void;
}

class Game implements GameState {
    public activeGameState: GameStateLabel;
    private barricade: Barricade;
    private startMenu: StartMenu;
    private characterMenu: CharacterMenu;
    // private pausedMenu: PausedMenu;

    // private gameOverMenu: GameOverMenu;
    private gameBoard: GameBoard;
    public instructionsMenu: InstructionsMenu;

    constructor() {
        this.activeGameState = 'Start';
        // this.pausedMenu = new PausedMenu(this);
        
        this.characterMenu = new CharacterMenu(this);
        
        this.startMenu = new StartMenu(this);
        
        this.gameBoard = new GameBoard(this);
        
        this.barricade = new Barricade(createVector(10, 10));
        //  this.gameOverMenu = new GameOverMenu(this);
        this.instructionsMenu = new InstructionsMenu(this);
        
        this.setGameState('Character');
    }

    public setGameState = (state: GameStateLabel) => {
        this.activeGameState = state;

        if (state === 'Paused') {
            // this.pausedMenu.openPauseMenu();
        } else if (state === 'Start') {
            this.startMenu.openStartMenu();
        } else if (state === 'Character') {
            this.characterMenu.openCharacterMenu();
        } else if (state === 'Running') {
            this.gameBoard.initGameBoard(
                this.characterMenu.activeCharacterStateP1,
                this.characterMenu.activeCharacterStateP2,
            );
        } else if (state === 'Instructions'){
            this.instructionsMenu.openInstructionsMenu(); 
        } else if (state === 'GameOver') {
            // this.gameOverMenu.openGameOverMenu();
        }
    };

    public update() {
        if (this.activeGameState === 'Running') {
             this.gameBoard.update();
        }   else if(this.activeGameState === 'Character') {
            this.gameBoard.update();
        }   else if(this.activeGameState === 'GameOver') {
            this.gameBoard.update();
        }
        
    }

    public draw() {
      background('#21212F');
      this.barricade.draw();
      this.gameBoard.draw();




    }

    public openGame() {

    }
}

