// ---- GLOBAL VARIABLES ----//
let arrows: p5.Image;
let wasd: p5.Image;
let enter: p5.Image;
let space: p5.Image;
let esc: p5.Image;
class InstructionsMenu {
    // private information: string;
    // private appearance: p5.Image;

    // constructor(information: string, appearance: p5.Image) {

    // }

    public goBack() {

     }

     public draw() {
        imageMode(CENTER);
        image(arrows, windowHeight / 2, windowWidth / 2);
        
        image(wasd, windowHeight / 2, windowWidth / 2);
     
        image(enter, windowHeight / 2, windowWidth / 2);
       
        image(space, windowHeight / 2, windowWidth / 2);

        image(esc, windowHeight / 2, windowWidth / 2);
    }
}