class GameMap {
    private worldGrid: number[][];

    constructor() {
       

        this.worldGrid = [
            [0,0,3,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,3,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,3,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,3,0,0,2,0],
            [0,0,0,0,0,3,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,3,0,0,0,0,0,0,0],
            [0,0,3,3,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ]
    }

    public getNewGameBoard(): Entity[] {
        // kollar på vår grid och 
        // skapar alla entiteter som behövs
    }
  
}
