

    class InstructionsMenu {

    private gameState: GameState;
    public mainDiv: HTMLDivElement;
    
        public openInstructionsMenu(){
            document.body.append(this.mainDiv);
        }

    constructor(gameState: GameState) {
        this.gameState = gameState;
        
        
        this.mainDiv = document.createElement('div');
        this.mainDiv.className = 'main-div';

        //Header

        const header = document.createElement('div');
        header.className = 'header';

        const player1Header = document.createElement('h2');
        player1Header.className = ('player1');
        player1Header.textContent = 'Player 1';

        const player2Header = document.createElement('h2');
        player2Header.className = ('player2');
        player2Header.textContent = ('Player 2');

        const mainMenu = document.createElement('img');
        mainMenu.setAttribute('src', './assets/images/Vector.png');
        mainMenu.className = ('startMenu');
        mainMenu.addEventListener('click', () => this.openStartMenu());

        header.appendChild(player1Header);
        header.appendChild(player2Header);
        header.appendChild(mainMenu);

        //Main

        const main = document.createElement('div');
        main.className = ('main');

        const moveDiv = document.createElement('div');
        moveDiv.className = 'move';

        const imgWASD = document.createElement('img');
        imgWASD.setAttribute('src', './assets/images/WASD.png');
        imgWASD.className = ('WASD');

        const moveHeader = document.createElement('h3');
        moveHeader.className = ('moveH3');
        moveHeader.textContent = ('Move');

        const imgArrow = document.createElement('img');
        imgArrow.setAttribute('src', './assets/images/ArrowKeys.png');
        imgArrow.className = ('ArrowKeys');

        moveDiv.appendChild(imgWASD);
        moveDiv.appendChild(moveHeader);
        moveDiv.appendChild(imgArrow);

        const shootDiv = document.createElement('div');
        shootDiv.className = 'shoot';

        const imgSpace = document.createElement('img');
        imgSpace.setAttribute('src', './assets/images/Space.png');
        imgSpace.className = ('space-key');

        const shootHeader = document.createElement('h3');
        shootHeader.className = ('shootH3');
        shootHeader.setAttribute('style', 'style=margin:0; text-align: center;');
        shootHeader.textContent = ('Shoot');

        const imgEnter = document.createElement('img');
        imgEnter.setAttribute('src', './assets/images/Enter.png');
        imgEnter.className = ('enter-key');

        shootDiv.appendChild(imgSpace);
        shootDiv.appendChild(shootHeader);
        shootDiv.appendChild(imgEnter);

        const pauseDiv = document.createElement('div');
        pauseDiv.className = 'pause';

        const pauseHeader = document.createElement('h3');
        pauseHeader.className = ('pauseH3');
        pauseHeader.textContent = ('Pause');

        const imgEscape = document.createElement('img');
        imgEscape.setAttribute('src', './assets/images/Escape png 1.png');
        imgEscape.className = ('escape-key');

        pauseDiv.appendChild(pauseHeader);
        pauseDiv.appendChild(imgEscape);

        main.appendChild(moveDiv);
        main.appendChild(shootDiv);
        main.appendChild(pauseDiv);

        //footer

        const footer = document.createElement('div');
        footer.className = ('footer');

        const extraLifeDiv = document.createElement('div');
        extraLifeDiv.className = ('extra-life');

        const imgHeart = document.createElement('img');
        imgHeart.setAttribute('src', './assets/images/redheart.png');
        imgHeart.className = ('heart-img');

        const extraLifeHeader = document.createElement('h3');
        extraLifeHeader.textContent = ('Extra Life');

        extraLifeDiv.appendChild(imgHeart);
        extraLifeDiv.appendChild(extraLifeHeader);

        const speedUpDiv = document.createElement('div');
        speedUpDiv.className = ('speed-up');

        const imgSpeed = document.createElement('img');
        imgSpeed.setAttribute('src', './assets/images/The Flash Sign.png');
        imgSpeed.className = ('speed-img');

        const speedUpHeader = document.createElement('h3');
        speedUpHeader.textContent = ('Speed Up');

        speedUpDiv.appendChild(imgSpeed);
        speedUpDiv.appendChild(speedUpHeader);

        const shieldDiv = document.createElement('div');
        shieldDiv.className = ('shield');

        const imgShield = document.createElement('img');
        imgShield.setAttribute('src', './assets/images/Welder Shield.png');
        imgSpeed.className = ('speed-img');

        const shieldHeader = document.createElement('h3');
        shieldHeader.textContent = ('Shield');

        shieldDiv.appendChild(imgShield);
        shieldDiv.appendChild(shieldHeader);

        footer.appendChild(extraLifeDiv);
        footer.appendChild(speedUpDiv);
        footer.appendChild(shieldDiv);
        
        this.mainDiv.append(header, main, footer);
        
        
}
public openStartMenu(){
    this.gameState.setGameState("Start");
    // this.mainDiv.className = ('hide');
    this.mainDiv.remove();
}
}