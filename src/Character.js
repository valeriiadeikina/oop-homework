class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10 || typeof name !== "string") {
      throw new Error("wrong name");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  set type(value) {
    if (
      value == "Bowman" ||
      value == "Swordsman" ||
      value == "Magician" ||
      value == "Undead" ||
      value == "Zombie"
    ) {
      this._type = value;
    } else {
      throw new Error("wrong type");
    }
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

export default Character;
