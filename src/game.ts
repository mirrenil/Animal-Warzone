
type GameStateLabel = 'Start' | 'Character' | 'Paused' | 'GameOver' | 'Running' | 'Instructions';

interface GameState {
    activeGameState: GameStateLabel;
    setGameState: (state: GameStateLabel) => void;
}

class Game implements GameState {
    public activeGameState: GameStateLabel;
    private startMenu: StartMenu;
    private characterMenu: CharacterMenu;

    // private pausedMenu: PausedMenu;

    // private gameOverMenu: GameOverMenu;
    private gameBoard: GameBoard;
    public instructionsMenu: InstructionsMenu;

    constructor() {

        // this.grid = new Grid(createVector(10, 10));

        this.activeGameState = 'Start';

        //this.setGameState('Start');

        // this.pausedMenu = new PausedMenu(this);

        
        this.characterMenu = new CharacterMenu(this);

        this.startMenu = new StartMenu(this);
        
        this.gameBoard = new GameBoard(this, "", "");

        
        //this.barricade = new Barricade(createVector(10, 10));

        // this.gameOverMenu = new GameOverMenu();
      
        this.instructionsMenu = new InstructionsMenu(this);
        
        
    }

    public setGameState = (state: GameStateLabel) => {
        this.activeGameState = state;

        if (state === 'Start') {
            this.startMenu.openStartMenu();
            console.trace(this.activeGameState);
        } else if (state === 'Paused') {
            // this.pausedMenu.openPauseMenu();
        } else if (state === 'Character') {
            this.characterMenu.openCharacterMenu();
        } else if (state === 'Running') {
            const character1 = this.characterMenu.getActiveCharacterName();
            const character2 = this.characterMenu.getActiveCharacterName2();
            console.log(character1, character2);
            this.gameBoard = new GameBoard(this, character1, character2);

        } else if (state === 'Instructions'){
            this.instructionsMenu.openInstructionsMenu(); 
        } else if (state === 'GameOver') {
            // this.gameOverMenu.openGameOverMenu();

        }
    };

    public update() {
        if (this.activeGameState === 'Running') {
            // this.gameBoard.update();
        }   else if(this.activeGameState === 'Character') {

        }   else if(this.activeGameState === 'GameOver') {

        }
    }

    public draw() {
        background('#21212F');
        if (this.activeGameState === 'Running') {
            //this.gameBoard.draw();
        }
    }

    public openGame() {

    }
}
