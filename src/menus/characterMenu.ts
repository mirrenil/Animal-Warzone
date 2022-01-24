let pig: p5.Image;
let rabbit: p5.Image;
let turtle: p5.Image;
let monkey: p5.Image;
let pig2: p5.Image;
let rabbit2: p5.Image;
let turtle2: p5.Image;
let monkey2: p5.Image;


type CharacterStateP1 =  '' | 'pig' | 'rabbit' | 'turtle' | 'monkey';
type CharacterStateP2 =  '' | 'pig2' | 'rabbit2' | 'turtle2' | 'monkey2';

interface CharacterState {
    setCharacterStateP1: (state: CharacterStateP1) => void;
    setCharacterStateP2: (state: CharacterStateP2) => void;
    
}
class CharacterMenu implements CharacterState {
    public activeCharacterStateP1: CharacterStateP1;
    public activeCharacterStateP2: CharacterStateP2;
    private gameState: GameState;
    private mainDiv: HTMLDivElement;
    // private monkey: p5.Image;

    constructor(gameState: GameState) {
        this.activeCharacterStateP1 = '';
        this.activeCharacterStateP2 = '';
        this.gameState = gameState;

       /** CREATING DIV TO HOLD EVERYTHING */
        this.mainDiv = document.createElement('div');
        this.mainDiv.className = '';

       /** H2 HEADER */
        const headerText = document.createElement('h2');
        headerText.textContent = 'Choose your character';

         /** PLAYER 1 */
        const playerOneDiv = document.createElement('div');
        playerOneDiv.className = 'player1';

        const playerOneText = document.createElement('h3');
        playerOneText.textContent = 'Player 1';

        const characterImg = document.createElement('div');
        
        const divPig = document.createElement('div');
        const pig = document.createElement('img');
        pig.src = '/documents/gameCharacters/pigFront.png';
        pig.addEventListener('click', () => this.chooseCharacterP1());
        
        const divTurtle = document.createElement('div');
      
        
        const turtle = document.createElement('img');
        turtle.src = '/documents/gameCharacters/turtleFront.png';
        turtle.addEventListener('click', () => this.chooseCharacterP1());

        const divMonkey = document.createElement('div');
        const monkeyButton = document.createElement('button');
        const monkey = document.createElement('img');
        monkey.src = '/documents/gameCharacters/monkeyFront.png';
        monkey.addEventListener('click', () => this.chooseCharacter());

        const divRabbit = document.createElement('div');
        const rabbit = document.createElement('img');
        rabbit.src = '/documents/gameCharacters/rabbitFront.png';
        rabbit.addEventListener('click', () => this.chooseCharacterP1());

        /** INSERT VERTICAL LINE IN CSS HERE */

        /** PLAYER 2 */
        const playerTwoDiv = document.createElement('div');
        playerTwoDiv.className = 'player2';

        const playerTwoText = document.createElement('h3');
        playerTwoText.textContent = 'Player 2';

        const characterImg2 = document.createElement('div');
        
        const divPig2 = document.createElement('div');
        const pig2 = document.createElement('img');
        pig2.src = '/documents/gameCharacters/pigFront.png';
        pig2.addEventListener('click', () => this.chooseCharacterP2())

        const divTurtle2 = document.createElement('div');
        const turtle2 = document.createElement('img');
        turtle2.src = '/documents/gameCharacters/turtleFront.png';
        turtle2.addEventListener('click', () => this.chooseCharacterP2());

        const divMonkey2 = document.createElement('div');
        const monkey2 = document.createElement('img');
        monkey2.src = '/documents/gameCharacters/monkeyFront.png';
        monkey2.addEventListener('click', () => this.chooseCharacterP2())

        const divRabbit2 = document.createElement('div');
        const rabbit2 = document.createElement('img');
        rabbit2.src = '/documents/gameCharacters/rabbitFront.png';
        rabbit2.addEventListener('click', () => this.chooseCharacterP2());


        /** BUTTON */
        const startGameButton = document.createElement('button');
        startGameButton.textContent = ('Start Game');
        startGameButton.addEventListener('click', () => this.startGame());
        
        /** APPEND */
        this.mainDiv.append(headerText, playerOneDiv, playerTwoDiv, startGameButton);
        playerOneDiv.append(playerOneText, characterImg);
        playerTwoDiv.append(playerTwoText, characterImg2);
        characterImg.append(divPig, divRabbit, divTurtle, divMonkey);
        characterImg2.append(divPig2, divRabbit2, divTurtle2, divMonkey2);
        divPig.append(pig);
        divRabbit.append(rabbit);
        divTurtle.append(turtle);
        divMonkey.append(monkeyButton);
        monkeyButton.append(monkey);
        divPig2.append(pig2);
        divRabbit2.append(rabbit2);
        divTurtle2.append(turtle2);
        divMonkey2.append(monkey2);
        
        this.openCharacterMenu();
    }
   
    /** APPEND MAINDIV HERE */
    public openCharacterMenu() {
        document.body.append(this.mainDiv);
    };

        public chooseCharacter() {
            // this.monkeyButton.classList.add('btn');
            // this.monkeyButton.className = 'btn'
        }
    // public chooseCharacterP1(e: p5.Image) {
    //     if (e === pig) {
    //         pig.resize(400, 400);
    //         rabbit.resize(200, 200);
    //         turtle.resize(200, 200);
    //         monkey.resize(200, 200);
        
    //         this.activeCharacterStateP1 = 'pig';
    //     } else if (e === rabbit) {
    //         rabbit.resize(400, 400);
    //         pig.resize(200,200);
    //         turtle.resize(200,200);
    //         monkey.resize(200,200);
    //         this.activeCharacterStateP1 = 'rabbit';
    //     } else if (e === turtle)  {
    //         turtle.resize(400, 400);
    //         pig.resize(200, 200);
    //         rabbit.resize(200, 200);
    //         monkey.resize(200, 200);
    //         this.activeCharacterStateP1 = 'turtle';
    //     } else if (e === monkey) {
    //         monkey.resize(400, 400);
    //         pig.resize(200, 200);
    //         rabbit.resize(200, 200);
    //         turtle.resize(200, 200);
    //         this.activeCharacterStateP1 = 'monkey';
    //         }
    //     }
    

    // public chooseCharacterP2(e:p5.Image) {
    //     if (e === pig2) {
    //         pig2.resize(400, 400);
    //         rabbit2.resize(200, 200);
    //         turtle2.resize(200, 200);
    //         monkey2.resize(200, 200);
    //         this.activeCharacterStateP2 = 'pig2';   
    //     } else if (e === rabbit2) {
    //         rabbit2.resize(400, 400);
    //         turtle2.resize(200, 200);
    //         pig2.resize(200, 200);
    //         monkey2.resize(200, 200);
    //         this.activeCharacterStateP2 = 'rabbit2'
    //     } else if (e === turtle2)  {
    //         turtle2.resize(400, 400);
    //         pig2.resize(200, 200);
    //         rabbit2.resize(200, 200);
    //         monkey2.resize(200, 200);
    //         this.activeCharacterStateP2 = 'turtle2'
    //     } else if (e === monkey2) {
    //         monkey2.resize(400, 400);
    //         pig2.resize(200, 200);
    //         rabbit2.resize(200, 200);
    //         turtle2.resize(200, 200);
    //         this.activeCharacterStateP2= 'monkey2';
    //         }
    //     }
     
     
    

    // public characterButton() {
    //     if(/* CHARACTERS FOR P1 AND P2 IS CHOSEN */) {
    //         startGameButton.classList.add('activeBtn');
    //     } 
    // } 

    public startGame() {
        if(this.activeCharacterStateP1 !== '' && this.activeCharacterStateP2 !== '') {
            this.gameState.setGameState('Running');
            this.mainDiv.remove();   
        } else {
            throw new Error('To continue both players must choose a character!');
        }
     }

    public goBack() {
        this.gameState.setGameState("Start");
        this.mainDiv.remove();
     }

    public update() {

    }

    public draw() {

    }
}
function e(e: any): any {
    throw new Error("Function not implemented.");
}

