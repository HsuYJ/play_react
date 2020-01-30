const ValidSides = ['O', 'X'];

function VerifySide(side = String) {
  return ValidSides.includes(side);
}

class Board {
  constructor() {
    this.value = [
      null, null, null,
      null, null, null,
      null, null, null
    ];
  }
  fill({ side = 'O', position = [0, 0] }) {
    
  }
}

class Game {
  constructor() {
    this.board = 
  }

  start(firstSide = 'O') {

  }
  waitForFill(side = 'O') {

  }
  fill({ side = 'O', position = [0, 0] }) {

  }
  switchSide() {

  }
}