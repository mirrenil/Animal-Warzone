type CharacterNameLabel = "" | "rabbit" | "pig" | "turtle" | "monkey";
type CharacterNameLabel2 = "" | "rabbit" | "pig" | "turtle" | "monkey";

interface CharacterName {
    activeCharacterName: CharacterNameLabel;
    setCharacterName: (state: CharacterNameLabel) => void;
}

interface CharacterName2 {
    activeCharacterName2: CharacterNameLabel2;
    setCharacterName2: (state: CharacterNameLabel2) => void;
}
class CharacterMenu implements CharacterName, CharacterName2 {
    // public activeCharacterStateP2: CharacterName;
    // public activeCharacterName: CharacterNameLabel;
    public characterName: CharacterName;
    public characterName2: CharacterName2;
    public activeCharacterName: CharacterNameLabel;
    public activeCharacterName2: CharacterNameLabel2; 
    public playerOne: any;
    public playerTwo: any;
    public gameState: GameState;
    private mainDiv: HTMLDivElement;
    private characterImg: HTMLDivElement;
    private monkey: HTMLImageElement;
    private rabbit: HTMLImageElement;
    private pig: HTMLImageElement;
    private turtle: HTMLImageElement;
    private monkey2: HTMLImageElement;
    private rabbit2: HTMLImageElement;
    private pig2: HTMLImageElement;
    private turtle2: HTMLImageElement;
    private startGameButton: HTMLButtonElement;
   

    constructor(
        gameState: GameState,
        characterName: CharacterName,
        characterName2: CharacterName2,
        activeCharacterName: CharacterNameLabel,
        activeCharacterName2: CharacterNameLabel2,
        playerOne: Character, playerTwo: Character,
    ) {
        //this.activeCharacterName = '';
        //this.activeCharacterNameP2 = '';
        this.characterName = characterName;
        this.activeCharacterName = activeCharacterName;
        this.characterName2 = characterName2;
        this.activeCharacterName2 = activeCharacterName2;
        this.gameState = gameState;
        // this.player1Character = player1Character;

        /** CREATING DIV TO HOLD EVERYTHING */
        this.mainDiv = document.createElement("div");
        this.mainDiv.className = "mainDiv";

        const playersDiv = document.createElement("div");
        playersDiv.className = "playersDiv";

        /** H2 HEADER AND ARROW BACK*/
        const mainMenu = document.createElement("img");
        mainMenu.setAttribute("src", "./assets/images/Vector.png");
        mainMenu.className = "startMenu";
        mainMenu.addEventListener('click', () => this.openStartMenu());

        const headerText = document.createElement("h2");
        headerText.className = "h2";
        headerText.textContent = "Choose your character";

        /** PLAYER 1 */
        const playerOneDiv = document.createElement("div");
        playerOneDiv.className = "player1";

        const playerOneText = document.createElement("h3");
        playerOneText.className = "h3";
        playerOneText.textContent = "Player 1";

        this.characterImg = document.createElement("div");
        this.characterImg.className = "choose-characters";

        const leftTop = document.createElement("div");
        leftTop.className = "left-top";

        const leftBottom = document.createElement("div");
        leftBottom.className = "left-bottom";

        const divPig = document.createElement("div");
        divPig.className = "div-animals";
        this.pig = document.createElement("img");
        this.pig.src = "/documents/gameCharacters/pigFront.png";
        this.pig.addEventListener("click", () => this.setCharacterName("pig"));

        const divTurtle = document.createElement("div");
        divTurtle.className = "div-animals";
        this.turtle = document.createElement("img");
        this.turtle.src = "/documents/gameCharacters/turtleFront.png";
        this.turtle.addEventListener("click", () =>
            this.setCharacterName("turtle")
        );

        const divMonkey = document.createElement("div");
        divMonkey.className = "div-animals";
        this.monkey = document.createElement("img");
        this.monkey.src = "/documents/gameCharacters/monkeyFront.png";
        this.monkey.addEventListener("click", () =>
            this.setCharacterName("monkey")
        );

        const divRabbit = document.createElement("div");
        divRabbit.className = "div-animals";
        this.rabbit = document.createElement("img");
        this.rabbit.src = "/documents/gameCharacters/rabbitFront.png";
        this.rabbit.addEventListener("click", () =>
            this.setCharacterName("rabbit")
        );

        /** INSERT VERTICAL LINE IN CSS HERE */
        const verticalLine = document.createElement("div");
        verticalLine.className = "vertical";

        /** PLAYER 2 */
        const playerTwoDiv = document.createElement("div");
        playerTwoDiv.className = "player2";

        const playerTwoText = document.createElement("h3");
        playerTwoText.className = "h3";
        playerTwoText.textContent = "Player 2";

        const characterImg2 = document.createElement("div");
        characterImg2.className = "choose-characters";

        const rightTop = document.createElement("div");
        rightTop.className = "right-top";

        const rightBottom = document.createElement("div");
        rightBottom.className = "right-bottom";

        const divPig2 = document.createElement("div");
        this.pig2 = document.createElement("img");
        this.pig2.src = "/documents/gameCharacters/pigFront.png";
        this.pig2.addEventListener("click", () => this.setCharacterName2("pig"));

        const divTurtle2 = document.createElement("div");
        divTurtle2.className = "div-animals";
        this.turtle2 = document.createElement("img");
        this.turtle2.src = "/documents/gameCharacters/turtleFront.png";
        this.turtle2.addEventListener("click", () =>
            this.setCharacterName2("turtle")
        );

        const divMonkey2 = document.createElement("div");
        divMonkey2.className = "div-animals";
        this.monkey2 = document.createElement("img");
        this.monkey2.src = "/documents/gameCharacters/monkeyFront.png";
        this.monkey2.addEventListener("click", () =>
            this.setCharacterName2("monkey")
        );

        const divRabbit2 = document.createElement("div");
        divRabbit2.className = "div-animals";
        this.rabbit2 = document.createElement("img");
        this.rabbit2.src = "/documents/gameCharacters/rabbitFront.png";
        this.rabbit2.addEventListener("click", () =>
            this.setCharacterName2("rabbit")
        );

        /** BUTTON */
        const buttonDiv = document.createElement("div");
        buttonDiv.className = "btn-div";
        this.startGameButton = document.createElement("button");
        this.startGameButton.className = "unactive btn";
        this.startGameButton.textContent = "Start Game";
        this.startGameButton.addEventListener('click', () => this.startGame());

        /** APPEND */
        this.mainDiv.append(headerText, mainMenu, playersDiv, buttonDiv);
        playersDiv.append(
            playerOneDiv,
            playerOneText,
            verticalLine,
            playerTwoDiv,
            playerTwoText
        );
        playerOneDiv.append(playerOneText, this.characterImg);
        playerTwoDiv.append(playerTwoText, characterImg2);
        this.characterImg.append(leftTop, leftBottom);
        leftTop.append(divPig, divRabbit);
        leftBottom.append(divTurtle, divMonkey);
        characterImg2.append(rightTop, rightBottom);
        rightTop.append(divPig2, divRabbit2);
        rightBottom.append(divTurtle2, divMonkey2);
        divPig.append(this.pig);
        divRabbit.append(this.rabbit);
        divTurtle.append(this.turtle);
        divMonkey.append(this.monkey);
        divPig2.append(this.pig2);
        divRabbit2.append(this.rabbit2);
        divTurtle2.append(this.turtle2);
        divMonkey2.append(this.monkey2);
        buttonDiv.append(this.startGameButton);

        // this.openCharacterMenu();
    }

    /** APPEND.mainDiv HERE */
    public openCharacterMenu() {
        document.body.append(this.mainDiv);
    }

    public setCharacterName = (name: CharacterNameLabel) => {
        this.activeCharacterName = "";

        if (name === "monkey") {
            this.playerOne = "/documents/gameCharacters/monkeyFront.png";
            this.rabbit.style.opacity = ".4";
            this.turtle.style.opacity = ".4";
            this.pig.style.opacity = ".4";
        } else if (name === "pig") {
            this.rabbit.style.opacity = ".4";
            this.turtle.style.opacity = ".4";
            this.monkey.style.opacity = ".4";
        } else if (name === "turtle") {
            this.rabbit.style.opacity = ".4";
            this.monkey.style.opacity = ".4";
            this.pig.style.opacity = ".4";
        } else if (name === "rabbit") {
            this.monkey.style.opacity = ".4";
            this.turtle.style.opacity = ".4";
            this.pig.style.opacity = ".4";
        }
        this.activateButton();
       
    }

    public setCharacterName2 = (name: CharacterNameLabel2) => {
        this.activeCharacterName2 = "";

        if (name === "monkey") {
            this.rabbit2.style.opacity = ".4";
            this.turtle2.style.opacity = ".4";
            this.pig2.style.opacity = ".4";
        } else if (name === "pig") {
            this.playerTwo = '/documents/gameCharacters/pigFront.png'
            this.rabbit2.style.opacity = ".4";
            this.turtle2.style.opacity = ".4";
            this.monkey2.style.opacity = ".4";
        } else if (name === "turtle") {
            this.rabbit2.style.opacity = ".4";
            this.monkey2.style.opacity = ".4";
            this.pig2.style.opacity = ".4";
        } else if (name === "rabbit") {
            this.monkey2.style.opacity = ".4";
            this.turtle2.style.opacity = ".4";
            this.pig2.style.opacity = ".4";
        }
        this.activateButton();
    }

    public activateButton() {
        if (this.activeCharacterName === "" && this.activeCharacterName2 === "") {
            this.startGameButton.classList.remove("unactive");
        }
    }
    
    public startGame() {
        this.mainDiv.remove();
        this.gameState.setGameState("Running");
    }

    public goBack() {
        this.gameState.setGameState("Start");
        this.mainDiv.remove();
    }

    public openStartMenu() {
        this.gameState.setGameState("Start");
        this.mainDiv.remove();
    }

    public update() { }

    public draw() { }
}

// function e(e: p5.Image): any {
//     throw new Error("Function not implemented.");
// }

// public chooseCharacter(selectedCharacter: CharacterName, player: number) {

// if (player === 1) {
//     this.activeCharacterName = selectedCharacter;
//     console.log(selectedCharacter);
// if (selectedCharacter = 'monkey') {
//   this.monkey.style.border = 'blue';
//   console.log(selectedCharacter);
// } else if (selectedCharacter = 'pig') {
//     this.rabbit.style.opacity = '.4'
//     this.turtle.style.opacity = '.4'
//     this.monkey.style.opacity = '.4'
// } else if (selectedCharacter = 'rabbit') {
//     this.pig.style.opacity = '.4'
//     this.turtle.style.opacity = '.4'
//     this.monkey.style.opacity = '.4'
// } else {
//     this.pig.style.opacity = '.4'
//     this.rabbit.style.opacity = '.4'
//     this.monkey.style.opacity = '.4'
// }

// } else if (player === 2) {
//     this.activeCharacterStateP2 = selectedCharacter;
//     if (selectedCharacter = 'pig') {
//       this.rabbit2.style.opacity = '.4'
//       this.turtle2.style.opacity = '.4'
//       this.monkey2.style.opacity = '.4'
//     } else if (selectedCharacter = 'monkey') {
//         this.rabbit2.style.opacity = '.4'
//         this.turtle2.style.opacity = '.4'
//         this.pig2.style.opacity = '.4'
//     } else if (selectedCharacter = 'rabbit') {
//         this.pig2.style.opacity = '.4'
//         this.turtle2.style.opacity = '.4'
//         this.monkey2.style.opacity = '.4'
//     } else if (selectedCharacter = 'turtle') {
//         this.pig2.style.opacity = '.4'
//         this.rabbit2.style.opacity = '.4'
//         this.monkey2.style.opacity = '.4'
//     }
