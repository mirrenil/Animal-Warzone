class  CharacterMenu {
    // private menuState: MenuState;
    // private width: Number;
    // private height: Number;
    // private appearance: p5.Image;
    // private startGameButton: any;
    // private goBackButton: any;
    // private name: string;

    // constructor(menuState: MenuState, width: Number, appearance: p5.Image, startGameButton: any, goBackButton: any, name: string) {
    //     this.menuState = 'character';
    // }

    // public chooseCharacter() {

    // }

    // public startGame() {
    
    // }

    // public goBack() {

    // }

    // public update() {

    // }

    public draw() {
        imageMode(CENTER);
        // Rabbit
        image(rabbitFront, windowHeight / 2, windowWidth / 2);
        image(rabbitBack, windowHeight / 2, windowWidth / 2);
        image(rabbitRight, windowHeight / 2, windowWidth / 2);
        image(rabbitLeft, windowHeight / 2, windowWidth / 2);
    
        // Pig
        image(pigFront, windowHeight / 2, windowWidth / 2);
        image(pigBack, windowHeight / 2, windowWidth / 2);
        image(pigRight, windowHeight / 2, windowWidth / 2);
        image(pigRight, windowHeight / 2, windowWidth / 2);
    
        // Monkey
        image(monkeyFront, windowHeight / 2, windowWidth / 2);
        image(monkeyBack, windowHeight / 2, windowWidth / 2);
        image(monkeyRight, windowHeight / 2, windowWidth / 2);
        image(monkeyLeft, windowHeight / 2, windowWidth / 2);   
    
        // Turtle
        image(turtleFront, windowHeight / 2, windowWidth / 2);
        image(turtleBack, windowHeight / 2, windowWidth / 2);
        image(turtleRight, windowHeight / 2, windowWidth / 2);
        image(turtleLeft, windowHeight / 2, windowWidth / 2);
    
    // }
}