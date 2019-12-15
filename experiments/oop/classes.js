/*
Encapsulation - creating objects that are enclosed so that properties and methods are hidden from the outside
Inheritance - inheriting features from other (parent) objects so that code can be reused 
*/

// encapsulate all functionality for a baseball player
class BaseballPlayer {
  constructor(name, position, team) {
    this.name = name;
    this.team = team;
    this.position = position;
    this.homersLast3Years = [];
    this.avgHomers = 0;
  }

  playerInfo() {
    return `${this.name} plays ${this.position} for the ${this.team}`;
  }

  addPlayerHomers(homeRuns) {
    [...this.homersLast3Years, homeRuns];
    this.homersLast3Years.push(homeRuns);
  }

  getAvgHomers() {
    if (this.homersLast3Years.length > 0 && this.homersLast3Years.length <= 3) {
      const totalHomers = this.homersLast3Years.reduce((acc, cum) => acc + cum);
      this.avgHomers = (totalHomers / 3).toFixed(1);
    } else {
      return `Too many years entered`;
    }
    return `${this.name} averaged ${this.avgHomers} homers the last 3 years`;
  }
}

const gardner = new BaseballPlayer("Brett Gardner", "left field", "Yankees");
gardner.addPlayerHomers(28);
gardner.addPlayerHomers(15);
gardner.addPlayerHomers(22);
gardner.addPlayerHomers(22);

console.log(gardner.playerInfo());
console.log(gardner.getAvgHomers());

// inherits from the BaseballPlayer class
class BaseballPlayerTrivia extends BaseballPlayer {
  constructor(name, team, position) {
    super(name, team, position);
  }
  // overriding this method from the parent class
  playerInfo() {
    return `${this.name}`;
  }

  fullPlayerInfo() {
    return `${super.playerInfo()}`; // calls playerInfo() from parent class
  }

  showFavFood(favFood) {
    return `${this.playerInfo()}'s favorite food is ${favFood}`;
  }

  showCollege(collegeName) {
    return `${this.playerInfo()} played college baseball at ${collegeName}`;
  }
}

const judge = new BaseballPlayerTrivia("Aaron Judge", "right field", "Yankees");
judge.addPlayerHomers(50);
judge.addPlayerHomers(47);
judge.addPlayerHomers(58);

console.log(judge.playerInfo());
console.log(judge.getAvgHomers());
console.log(judge.showFavFood("pizza"));
console.log(judge.showCollege("Fresno State"));
console.log(judge.fullPlayerInfo());
