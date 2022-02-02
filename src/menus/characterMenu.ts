type CharacterNameLabel = "" | "rabbit" | "pig" | "turtle" | "monkey";
class CharacterMenu {
    public activeCharacterName: CharacterNameLabel;
    public activeCharacterName2: CharacterNameLabel;
    private gameState: GameState;
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
   

    constructor(gameState: GameState) {
        this.activeCharacterName = "";
        this.activeCharacterName2 = "";
        this.gameState = gameState;

        /** CREATING DIV TO HOLD EVERYTHING */
        this.mainDiv = document.createElement("div");
        this.mainDiv.className = "main-div-character";

        const playersDiv = document.createElement("div");
        playersDiv.className = "playersDiv";

        /** H2 HEADER AND ARROW BACK*/
        const mainMenu = document.createElement("img");
        mainMenu.setAttribute("src", "./assets/images/Vector.png");
        mainMenu.className = "startMenu";
        mainMenu.addEventListener('click', () => this.openStartMenu());

        const headerText = document.createElement("h2");
        headerText.className = "header-text";
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
        this.pig.className = 'img';
        this.pig.src = "./assets/images/gameCharacters/pigFront.png";
        this.pig.addEventListener("click", () => {
        this.setCharacterName("pig");
        this.chooseCharacterSound();
    });

        const divTurtle = document.createElement("div");
        divTurtle.className = "div-animals";
        this.turtle = document.createElement("img");
        this.turtle.className = 'img';
        this.turtle.src = "./assets/images/gameCharacters/turtleFront.png";
        this.turtle.addEventListener("click", () => {
            this.setCharacterName("turtle");
            this.chooseCharacterSound();

});

        const divMonkey = document.createElement("div");
        divMonkey.className = "div-animals";
        this.monkey = document.createElement("img");
        this.monkey.className = 'img';
        this.monkey.src = "./assets/images/gameCharacters/monkeyFront.png";
        this.monkey.addEventListener("click", () => {
            this.setCharacterName("monkey");
            this.chooseCharacterSound();
        });

        const divRabbit = document.createElement("div");
        divRabbit.className = "div-animals";
        this.rabbit = document.createElement("img");
        this.rabbit.className = 'img';
        this.rabbit.src = "./assets/images/gameCharacters/rabbitFront.png";
        this.rabbit.addEventListener("click", () => {
            this.setCharacterName("rabbit");
            this.chooseCharacterSound();
        });

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
        this.pig2.src = "./assets/images/gameCharacters/pigFront.png";
        this.pig2.className = 'img';
        this.pig2.addEventListener("click", () => {
            this.setCharacterName2("pig")
            this.chooseCharacterSound()
        });

        const divTurtle2 = document.createElement("div");
        divTurtle2.className = "div-animals";
        this.turtle2 = document.createElement("img");
        this.turtle2.src = "./assets/images/gameCharacters/turtleFront.png";
        this.turtle2.className = 'img';
        this.turtle2.addEventListener("click", () =>{
            this.setCharacterName2("turtle")
            this.chooseCharacterSound()
        });

        const divMonkey2 = document.createElement("div");
        divMonkey2.className = "div-animals";
        this.monkey2 = document.createElement("img");
        this.monkey2.src = "./assets/images/gameCharacters/monkeyFront.png";
        this.monkey2.className = 'img';
        this.monkey2.addEventListener("click", () =>{
            this.setCharacterName2("monkey")
            this.chooseCharacterSound()

        });


        const divRabbit2 = document.createElement("div");
        divRabbit2.className = "div-animals";
        this.rabbit2 = document.createElement("img");
        this.rabbit2.src = "./assets/images/gameCharacters/rabbitFront.png";
        this.rabbit2.className = 'img';
        this.rabbit2.addEventListener("click", () => {
            this.setCharacterName2("rabbit")
            this.chooseCharacterSound()
        });

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
    }

    public getActiveCharacterName() { return this.activeCharacterName }
    public getActiveCharacterName2() { return this.activeCharacterName2 }

     /** APPEND .mainDiv HERE */
    public openCharacterMenu() {
        document.body.append(this.mainDiv);
    }
    public chooseCharacterSound() {
        sound.playerSelect.play();

    }
    public setCharacterName = (name: CharacterNameLabel) => {
        this.activeCharacterName = name;

        if (name === "monkey") {
            this.monkey.style.opacity = '1';
            this.rabbit.style.opacity = ".4";
            this.turtle.style.opacity = ".4";
            this.pig.style.opacity = ".4";
        } else if (name === "pig") {
            this.pig.style.opacity = '1';
            this.rabbit.style.opacity = ".4";
            this.turtle.style.opacity = ".4";
            this.monkey.style.opacity = ".4";
        } else if (name === "turtle") {
            this.turtle.style.opacity = '1';
            this.rabbit.style.opacity = ".4";
            this.monkey.style.opacity = ".4";
            this.pig.style.opacity = ".4";
        } else if (name === "rabbit") {
            this.rabbit.style.opacity = "1";
            this.monkey.style.opacity = ".4";
            this.turtle.style.opacity = ".4";
            this.pig.style.opacity = ".4";
        }
        this.activateButton();  
    }

    public setCharacterName2 = (name: CharacterNameLabel) => {
        this.activeCharacterName2 = name;

        if (name === "monkey") {
            this.monkey2.style.opacity = '1';
            this.rabbit2.style.opacity = ".4";
            this.turtle2.style.opacity = ".4";
            this.pig2.style.opacity = ".4";
        } else if (name === "pig") {
            this.pig2.style.opacity = '1';
            this.rabbit2.style.opacity = ".4";
            this.turtle2.style.opacity = ".4";
            this.monkey2.style.opacity = ".4";
        } else if (name === "turtle") {
            this.turtle2.style.opacity = '1';
            this.rabbit2.style.opacity = ".4";
            this.monkey2.style.opacity = ".4";
            this.pig2.style.opacity = ".4";
        } else if (name === "rabbit") {
            this.rabbit2.style.opacity = '1';
            this.monkey2.style.opacity = ".4";
            this.turtle2.style.opacity = ".4";
            this.pig2.style.opacity = ".4";
        }
        this.activateButton();
    }

    public activateButton() {
        if (this.activeCharacterName != "" && this.activeCharacterName2 != "") {
            this.startGameButton.classList.remove("unactive");
        }
    }
    
    public startGame() {
        this.mainDiv.remove();
        this.gameState.setGameState("Running");
        music.startMenuSound.stop();
        music.inGameSound.setVolume(.4);
        music.inGameSound.loop();
    }

    public goBack() {
        this.gameState.setGameState("Start");
        this.mainDiv.remove();
    }

    public openStartMenu() {
       this.gameState.setGameState("Start");
       this.mainDiv.remove();
    }

}




