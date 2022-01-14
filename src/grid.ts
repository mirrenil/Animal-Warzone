class Grid {
    private size: p5.Vector
    private selectedCell: p5.Vector;
  
    constructor(size: p5.Vector) {
      this.size = size;
      this.selectedCell = createVector(2, 5);
    }
    
    private checkForCellSelection() {
      // const mousePos = createVector(mouseX, mouseY);
      if (mouseIsPressed) {
        for (let x = 0; x < this.size.x; x++) {
          for (let y = 0; y < this.size.y; y++) {
            const cellSize = createVector(width / this.size.x, height / this.size.y);
            const cellPosition = createVector(x * cellSize.x, y * cellSize.y)
            if (
              mouseX > cellPosition.x &&
              mouseX < cellPosition.x + cellSize.x &&
              mouseY > cellPosition.y &&
              mouseY < cellPosition.y + cellSize.y
            ) {
              this.selectedCell = createVector(x, y);
            }
          }
        }
      }
    }
  
    public update() {
      this.checkForCellSelection()
    }
  
    public draw() {
      const cellSize = createVector(width / this.size.x, height / this.size.y);
      
      push()
      noFill();
      strokeWeight(4);
      stroke('white');
  
      for (let x = 0; x < this.size.x; x++) {
        for (let y = 0; y < this.size.y; y++) {
          push()
          if (x === this.selectedCell.x && y === this.selectedCell.y) {
            fill('yellow')
          }
          rect(x * cellSize.x, y * cellSize.y, cellSize.x, cellSize.y)
          pop()
        }
      }
  
      pop()
    }
    
  }