class Square {
  constructor() {
    this.type = '';
  }
  // static validTypes = ['O', 'X']
  // static verifyFillType(type = String) {
  //   return Square.validTypes.includes(type);
  // }
  fill(type = 'O') {
    this.type = type;
  }
}

module.exports = {
  create() {
    return new Square();
  }
};