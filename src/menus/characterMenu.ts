type CharacterName =  '' | 'pig' | 'rabbit' | 'turtle' | 'monkey';
class CharacterMenu {
    public activeCharacterStateP1: CharacterName;
    public activeCharacterStateP2: CharacterName;
    private gameState: GameState;
    private mainDiv: HTMLDivElement;


    constructor(gameState: GameState) {
        this.activeCharacterStateP1 = '';
        this.activeCharacterStateP2 = '';
        this.gameState = gameState;

       /** CREATING DIV TO HOLD EVERYTHING */
        this.mainDiv = document.createElement('div');
        this.mainDiv.className = 'mainDiv';

        const playersDiv = document.createElement('div');
        playersDiv.className = 'playersDiv';

       /** H2 HEADER AND ARROW BACK*/
       const mainMenu = document.createElement('img');
       mainMenu.setAttribute('src', './assets/images/Vector.png');
       mainMenu.className = ('startMenu');
       mainMenu.addEventListener('click', () => this.openStartMenu());

        const headerText = document.createElement('h2');
        headerText.className = 'h2';
        headerText.textContent = 'Choose your character';

         /** PLAYER 1 */
        const playerOneDiv = document.createElement('div');
        playerOneDiv.className = 'player1';

        const playerOneText = document.createElement('h3');
        playerOneText.className = 'h3';
        playerOneText.textContent = 'Player 1';
        
        const characterImg = document.createElement('div');
        characterImg.className = 'choose-characters';
        
        const leftTop = document.createElement('div');
        leftTop.className = 'left-top';

        const leftBottom = document.createElement('div');
        leftBottom.className = 'left-bottom';

        const divPig = document.createElement('div');
        divPig.className = 'div-animals';
        const pig = document.createElement('img');
        pig.src = '/documents/gameCharacters/pigFront.png';
        pig.addEventListener('click', () => this.chooseCharacter('pig', 1));
        
        const divTurtle = document.createElement('div');
        divTurtle.className = 'div-animals';
        const turtle = document.createElement('img');
        turtle.src = '/documents/gameCharacters/turtleFront.png';
        turtle.addEventListener('click', () => this.chooseCharacter('turtle', 1));

        const divMonkey = document.createElement('div');
        divMonkey.className = 'div-animals';
       
        const monkey = document.createElement('img');
        monkey.src = '/documents/gameCharacters/monkeyFront.png';
        monkey.addEventListener('click', () => this.chooseCharacter('monkey', 1));

        const divRabbit = document.createElement('div');
        divRabbit.className = 'div-animals';
        const rabbit = document.createElement('img');
        rabbit.src = '/documents/gameCharacters/rabbitFront.png';
        rabbit.addEventListener('click', () => this.chooseCharacter('rabbit', 1));

        /** INSERT VERTICAL LINE IN CSS HERE */
        const verticalLine = document.createElement('div');
        verticalLine.className = 'vertical'

        /** PLAYER 2 */
        const playerTwoDiv = document.createElement('div');
        playerTwoDiv.className = 'player2';

        const playerTwoText = document.createElement('h3');
        playerTwoText.className = 'h3';
        playerTwoText.textContent = 'Player 2';

        const characterImg2 = document.createElement('div');
        characterImg2.className = 'choose-characters';

        const rightTop = document.createElement('div');
        rightTop.className = 'right-top';

        const rightBottom = document.createElement('div');
        rightBottom.className = 'right-bottom';
        
        const divPig2 = document.createElement('div');
        const pig2 = document.createElement('img');
        pig2.src = '/documents/gameCharacters/pigFront.png';
        pig2.addEventListener('click', () => this.chooseCharacter('pig', 2));

        const divTurtle2 = document.createElement('div');
        divTurtle2.className ='div-animals';
        const turtle2 = document.createElement('img');
        turtle2.src = '/documents/gameCharacters/turtleFront.png';
        turtle2.addEventListener('click', () => this.chooseCharacter('turtle', 2));

        const divMonkey2 = document.createElement('div');
        divMonkey2.className = 'div-animals';
        const monkey2 = document.createElement('img');
        monkey2.src = '/documents/gameCharacters/monkeyFront.png';
        monkey2.addEventListener('click', () => this.chooseCharacter('monkey', 2));

        const divRabbit2 = document.createElement('div');
        divRabbit2.className ='div-animals';
        const rabbit2 = document.createElement('img');
        rabbit2.src = '/documents/gameCharacters/rabbitFront.png';
        rabbit2.addEventListener('click', () => this.chooseCharacter('rabbit', 2));


        /** BUTTON */
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'btn-div';
        const startGameButton = document.createElement('button');
        startGameButton.className = 'btn';
        startGameButton.textContent = ('Start Game');
        startGameButton.addEventListener('click', () => this.startGame());
        
        /** APPEND */
        this.mainDiv.append(headerText, mainMenu, playersDiv, buttonDiv);
        playersDiv.append(playerOneDiv,playerOneText, verticalLine, playerTwoDiv, playerTwoText);
        playerOneDiv.append(playerOneText, characterImg);
        playerTwoDiv.append(playerTwoText, characterImg2);
        characterImg.append(leftTop, leftBottom);
        leftTop.append(divPig, divRabbit);
        leftBottom.append(divTurtle, divMonkey);
        characterImg2.append(rightTop, rightBottom);
        rightTop.append(divPig2, divRabbit2);
        rightBottom.append(divTurtle2, divMonkey2);
        divPig.append(pig);
        divRabbit.append(rabbit);
        divTurtle.append(turtle);
        divMonkey.append(monkey);
        divPig2.append(pig2);
        divRabbit2.append(rabbit2);
        divTurtle2.append(turtle2);
        divMonkey2.append(monkey2);
        buttonDiv.append(startGameButton);
       
        // this.openCharacterMenu();
    }
   
    /** APPEND.mainDiv HERE */
    public openCharacterMenu() {
        document.body.append(this.mainDiv);
    }
        
    public chooseCharacter(selectedCharacter: CharacterName, player: number) {
        if (player === 1) {
            this.activeCharacterStateP1 = selectedCharacter;
            // Lägg till styling på gubbarna
        } else if (player === 2) {
            this.activeCharacterStateP2 = selectedCharacter;
        }



        if (pigFront) {
           // VI VILL HA OPACITY
        } else if (rabbitFront) {
            // rabbit.resize(400, 400);
            // pig.resize(200,200);
            // turtle.resize(200,200);
            // monkey.resize(200,200);
            // this.activeCharacterStateP1 = 'rabbit';
        } else if (turtleFront)  {
            // turtle.resize(400, 400);
            // pig.resize(200, 200);
            // rabbit.resize(200, 200);
            // monkey.resize(200, 200);
           // this.activeCharacterStateP1 = 'turtle';
        } else if (monkeyFront) {
            // monkey.resize(400, 400);
            // pig.resize(200, 200);
            // rabbit.resize(200, 200);
            // turtle.resize(200, 200);
            // this.activeCharacterStateP1 = 'monkey';
        } else if (pigFront) {
            // pig.resize(400, 400);
            // rabbit.resize(200, 200);
            // turtle.resize(200, 200);
            // monkey.resize(200, 200);
            //this.activeCharacterStateP1 = 'pig';
        } else if (rabbitFront) {
            // rabbit.resize(400, 400);
            // pig.resize(200,200);
            // turtle.resize(200,200);
            // monkey.resize(200,200);
            // this.activeCharacterStateP1 = 'rabbit';
        } else if (turtleFront)  {
            // turtle.resize(400, 400);
            // pig.resize(200, 200);
            // rabbit.resize(200, 200);
            // monkey.resize(200, 200);
           // this.activeCharacterStateP1 = 'turtle';
        } else if (monkeyFront) {
            // monkey.resize(400, 400);
            // pig.resize(200, 200);
            // rabbit.resize(200, 200);
            // turtle.resize(200, 200);
            // this.activeCharacterStateP1 = 'monkey';
            }
        }
    

   
     
     

    
    // if(this.activeCharacterStateP1 !== '' && this.activeCharacterStateP2 !== *\) {
    //     this.gameState.setGameState('Running');
    //     this.mainDiv.remove();   
    // } else {
    //     throw new Error('To continue both players must choose a character!');
    // }

    public startGame() {
       this.gameState.setGameState('Running');
       this.mainDiv.remove();
     }

    public goBack() {
        this.gameState.setGameState('Start');
        this.mainDiv.remove();
     }

     public openStartMenu(){
        this.gameState.setGameState("Start");
        // this.mainDiv.className = ('hide');
        this.mainDiv.remove();
    }

    public update() {

    }

    public draw() {

    }
}

// function e(e: p5.Image): any {
//     throw new Error("Function not implemented.");
// }

