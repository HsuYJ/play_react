const Players = new Map(); // Map[id: player]

class Player {
  constructor(id) {
    this.id = id;
  }
}

module.exports = {
  get(id = String) {
    return Players.get(id) || new Player(id);
  }
};