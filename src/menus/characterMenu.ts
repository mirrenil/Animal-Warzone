class  CharacterMenu {
    private menuState: MenuState;
    private mainDiv: HTMLDivElement;
    private headerText: HTMLHeadingElement;
    private playerOneDiv: HTMLDivElement;
    private playerTwoDiv: HTMLDivElement;
    private playerOneText: HTMLHeadingElement;
    private playerTwoText: HTMLHeadingElement;
    private characterImg: HTMLDivElement;
    private divPig: HTMLDivElement;
    private divTurtle: HTMLDivElement;
    private divMonkey: HTMLDivElement;
    private divRabbit: HTMLDivElement;

    private playerOnepig: HTMLImageElement;
    private playerOnerabbit: HTMLImageElement;
    private playerOneturtle: HTMLImageElement;
    private playerOnemonkey: HTMLImageElement;
    private playerTwopig: HTMLImageElement;
    private playerTworabbit: HTMLImageElement;
    private playerTwoturtle: HTMLImageElement;
    private playerTwomonkey: HTMLImageElement;

    constructor(menuState: MenuState) {
        this.menuState = 'Character';

       /** CREATING DIV TO HOLD EVERYTHING */
        this.mainDiv = document.createElement('div');
        this.mainDiv.className = '';

       /** H2 HEADER */
        this.headerText = document.createElement('h2');
        this.headerText.textContent = 'Choose your character';

         /** PLAYER 1 */
        this.playerOneDiv = document.createElement('div');
        this.playerOneDiv.className = 'player1';

        this.playerOneText = document.createElement('h3');
        this.playerOneText.textContent = 'Player 1';

        this.characterImg = document.createElement('div');
        this.divPig = document.createElement('div');
        //this.input = document.createElement('input');

        this.divTurtle = document.createElement('div');
        this.divMonkey = document.createElement('div');
        this.divRabbit = document.createElement('div');

        /** PLAYER 2 */
        this.playerTwoDiv = document.createElement('div');
        this.playerTwoDiv.className = 'player2';

        this.playerTwoText = document.createElement('h3');
        this.playerTwoText.textContent = 'Player 2';

        /** APPEND EVERYTHING HERE */

     }

    public chooseCharacter() {

    }

    // public startGame() {
    
    // }

    // public goBack() {

    // }

    // public update() {

    // }

    // public draw() {

    // }
}