class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10 || typeof value !== "string") {
      throw new Error("wrong name");
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set type(value) {
    if (value == "Bowman") {
      this.attack = 25;
      this.defence = 25;
    } else if (value == "Swordsman") {
      this.attack = 40;
      this.defence = 10;
    } else if (value == "Magician") {
      this.attack = 10;
      this.defence = 40;
    } else if (value == "Daemon") {
      this.attack = 10;
      this.defence = 40;
    } else if (value == "Undead") {
      this.attack = 25;
      this.defence = 25;
    } else if (value == "Zombie") {
      this.attack = 40;
      this.defence = 10;
    } else {
      throw new Error("wrong type");
    }
    this._type = value;
  }

  get type() {
    return this._type;
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack *= 1.2;
      this.health = 100;
    } else {
      throw new Error("you are dead");
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

// const unit = new Character("O2", "Magician");
// console.log(unit);

export default Character;
