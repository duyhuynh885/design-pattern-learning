// define a prototype object for fifa online

class FifaOnlinePlayer {
  constructor(name, team, position, goals) {
    this.name = name;
    this.team = team;
    this.position = position;
    this.goals = goals;
  }

  score() {
    this.goals++;
  }

  clone() {
    return new FifaOnlinePlayer(
      this.name,
      this.team,
      this.position,
      this.goals
    );
  }
}

// create a new fifa online player prototype

const prototype = new FifaOnlinePlayer("CR7", "Al Nassr", "FW", 0);

// create multiple intansce of fifaonline player
const cr7 = prototype.clone();
const m10 = prototype.clone();
m10.name = "Messi";
m10.team = "PSG";

cr7.score();
console.log(`${cr7.name} has recorded ${cr7.goals} this season`);
console.log(`${m10.name} has recorded ${m10.goals} this season`);
