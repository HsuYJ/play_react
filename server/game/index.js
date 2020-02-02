const Board = require('./src/board');

class Game {
  constructor() {
    this.board = Board.create();
    this.players = [];
    this.step = Game.steps[0];
    this.stepIndex = 0;
  }
  goStep(step = String) {
    let steps = Game.steps;
    let nextStepIndex = steps.indexOf(step);

    if (nextStepIndex === -1) {
      console.warn(`prrameter "step" should be one of steps: [${Steps.join(', ')}], but the input is ${step}`);
      return false;
    }

    let { stepIndex } = this;
    let isNextStep = stepIndex + 1;

    this.step = step;

    switch (step) {
      case 'waitForPlayerJoin': {
        this.reset();
        break;
      }
      case 'playing': {
        // do nothing
        break;
      }
      case 'result': {
        break;
      }
    }
  }
  playerJoin(playerId = String) {
    let { step } = this;

    if (step !== 'waitForPlayerJoin') {
      console.warn(`player ${playerId} join at the wrong step ${step}`);
      return;
    }

    let playerAmount = this.players.push(playerId);

    if (playerAmount === 2) {
      this.goStep('playing');
    }
  }
  start(firstSide = 'O') {

  }
  waitForFill(side = 'O') {

  }
  fill({ side = 'O', position = [0, 0] }) {

  }
  switchSide() {

  }
  reset() {
    this.board.reset();
    this.players = [];
    this.step = Game.steps[0];
    this.stepIndex = 0;
  }
}
Game.steps = [
  'waitForPlayerJoin',
  'playing',
  'result',
];

module.exports = {
  create() {
    return new Game();
  }
};