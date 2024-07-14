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
}

export default Character;
