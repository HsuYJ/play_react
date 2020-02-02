// const IndexToXY = (() => {
//   let indexToXY = Array(9).fill(null);

//   indexToXY.forEach((value, index) => {
//     indexToXY[index] = [
//       index % 3,
//       index / 3 >> 0
//     ];
//   });

//   return indexToXY;
// })();

const WinTemplates = [
  [0, 1, 2],
  [0, 4, 8],
  [3, 4, 5],
  [6, 4, 2],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];
const WinTemplateAmount = WinTemplates.length;


class Board {
  constructor() {
    this.squares = [
      '', '', '',
      '', '', '',
      '', '', ''
    ];
    this.filledAmount = { O: 0, X: 0 };
    this.lastFill = { type: void 0, index: void 0 };
    this.history = [];
  }
  reset() {
    let { squares, filledAmount, lastFill, history } = this;

    squares.forEach((type, index, squares) => squares[index] = '');

    for (let ii in filledAmount) {
      filledAmount[ii] = 0;
    }

    for (let ii in lastFill) {
      lastFill[ii] = void 0;
    }

    for (let ii = 0, iil = history.length; ii < iil; ii++) {
      history.pop();
    }
  }
  fill(type = String, index = Number) {
    let { squares } = this;

    if (squares[index]) { return false; } // the square is already occupied

    this.recordHistory(type, index);

    return squares[index] = type;
  }
  recordHistory(type = String, index = Number) {
    let { squares, history, lastFill } = this;

    lastFill.type = type;
    lastFill.index = index;
    history.push(squares.slice());
  }
  checkWin() {
    let { squares, lastFill } = this;
    let { type, index } = lastFill;

    loop_ii:
    for (let ii = 0; ii < WinTemplateAmount; ii++) {
      let template = WinTemplates[ii];

      if (template.includes(index)) {
        for (let jj = 0; jj < 3; jj++) {
          let filledType = squares[template[jj]];
          console.log('checking tempalte', `[${template.join(', ')}]`, jj);
          if (filledType !== type) {
            continue loop_ii;
          }
        }
        console.log('Win template is', `[${template.join(', ')}]`);
        return type;
      }
    }
  }
}

module.exports = {
  create() {
    return new Board();
  }
};

const board = new Board();

board.fill('O', 0);
board.fill('O', 1);
board.fill('O', 2);

console.log('Winner is', board.checkWin());