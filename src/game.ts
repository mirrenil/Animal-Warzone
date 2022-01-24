
type GameStateLabel = 'Start' | 'Character' | 'Paused' | 'GameOver' | 'Running' | 'Instructions';

interface GameState {
    activeGameState: GameStateLabel;
    setGameState: (state: GameStateLabel) => void;
}

class Game implements GameState {
    public activeGameState: GameStateLabel;
    private startMenu: StartMenu;
    // private characterMenu: CharacterMenu;
    // private pausedMenu: PausedMenu;

    // private gameOverMenu: GameOverMenu;
    private gameBoard: GameBoard;
    public instructionsMenu: InstructionsMenu;


    constructor() {
        // this.grid = new Grid(createVector(10, 10));
        this.activeGameState = 'Start';
        // this.pausedMenu = new PausedMenu(this);

        //this.startMenu = new StartMenu(this);

        this.startMenu = new StartMenu(this);

        this.gameBoard = new GameBoard(this);
        //  this.gameOverMenu = new GameOverMenu(this);
        this.instructionsMenu = new InstructionsMenu(this);


        // this.characterMenu = new CharacterMenu(this);
    }

    public setGameState = (state: GameStateLabel) => {
        this.activeGameState = state;

        if (state === 'Paused') {
            // this.pausedMenu.openPauseMenu();
        } else if (state === 'Start') {
            this.startMenu.openStartMenu();
        } else if (state === 'Running') {
           // tror inte att något behöver göras här
        } else if (state === 'GameOver') {
            // this.gameOverMenu.openGameOverMenu();

        } else if (state === 'Instructions') {
            this.instructionsMenu.openInstructionsMenu();

        }
    };

    public update() {
        if (this.activeGameState === 'Running') {
            this.gameBoard.update();
        } else if (this.activeGameState === 'GameOver') {
            // this.gameBoard.update();
        }

    }

    public draw() {
        background('#21212F');
        this.gameBoard.draw();
    }

    public openGame() {

    }
}
