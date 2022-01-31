
type GameStateLabel = 'Start' | 'Character' | 'Paused' | 'GameOver' | 'Running' | 'Instructions';

interface GameState {
    activeGameState: GameStateLabel;
    setGameState: (state: GameStateLabel) => void;
}



class Game implements GameState {
    public activeGameState: GameStateLabel;
    private startMenu: StartMenu;
    private characterMenu: CharacterMenu;

    private pausedMenu: PausedMenu;
    // private gameOverMenu: GameOverMenu;
    private gameBoard: GameBoard;
    public instructionsMenu: InstructionsMenu;

    public PauseMenu(){
        this.pausedMenu.openPauseMenu();
        if(!isPaused) {
            isPaused = true;
        } else {
            isPaused = false;
            this.pausedMenu.pausedMenuDiv.remove();
        }
    }

    constructor() {
        this.activeGameState = 'Start';
        this.pausedMenu = new PausedMenu(this);
        this.characterMenu = new CharacterMenu(this);
        this.startMenu = new StartMenu(this);
        this.gameBoard = new GameBoard(this, "", "");
        this.instructionsMenu = new InstructionsMenu(this);
        // this.gameOverMenu = new GameOverMenu(this);
        console.log(this.activeGameState);
        
    }

    
    public setGameState = (state: GameStateLabel) => {
        this.activeGameState = state;

        if (state === 'Start') {
            console.log(this.activeGameState);
            this.startMenu.openStartMenu();
        } else if (state === 'Paused') {

        } else if (state === 'Character') {
            this.characterMenu.openCharacterMenu();
        } else if (state === 'Running') {
            
                                
                    window.addEventListener('keydown', function (event){

                    switch(event.key){
                        case "PressEscape":
                        case "Escape":
                            game.PauseMenu();
                            break;

                            
                        
                    }});
            const character1 = this.characterMenu.getActiveCharacterName();
            const character2 = this.characterMenu.getActiveCharacterName2();
            
            this.gameBoard = new GameBoard(this, character1, character2);
        } else if (state === 'Instructions'){
            this.instructionsMenu.openInstructionsMenu();        
        } else if (state === 'GameOver') {
            // this.gameOverMenu.openGameOverMenu();
        }
    };

    public update() {
        if (this.activeGameState === 'Running') {
            if(!isPaused) {
                this.gameBoard.update();
            }
        }
    }

    public draw() {
        background('#21212F');
        if (this.activeGameState === 'Running' || this.activeGameState === 'Paused' ) {
            this.gameBoard.draw();
        }
    }

    public openGame() {

    }
}
