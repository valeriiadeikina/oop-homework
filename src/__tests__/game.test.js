import Character from "../Character";
import Magician from "../Magician";

let hero;

beforeEach(() => {
  hero = new Magician("OOP", "Magician");
});

test("проверка соответствия объекта", () => {
  expect(hero).toEqual({
    name: "OOP",
    _type: "Magician",
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});

test("проверка повышения уровня", () => {
  hero.levelUp();
  expect(hero.level).toBe(2);
});

test("проверка урона", () => {
  hero.damage(10);
  expect(hero.health).toBe(94);
});

test("проверка короткого имени при создании родителя", () => {
  expect(() => new Character("M", "Magician")).toThrow("wrong name");
});

test("проверка длинного имени при создании родителя", () => {
  expect(() => new Character("MegaSuperKiller", "Magician")).toThrow(
    "wrong name"
  );
});

test("проверка вывода ошибки если введенный тип неверный при создании родителя", () => {
  expect(() => new Character("MagaKiller", "Human")).toThrow("wrong type");
});

test("проверка типа при создании родителя", () => {
  let hero = new Character("MagaKiller", "Undead");
  expect(hero.type).toBe("Undead");
});

test("проверка вывода ошибки если здоровье персонажа меньше нуля", () => {
  let hero = new Character("MagaKiller", "Undead");
  hero.health = 0;

  expect(() => hero.levelUp()).toThrow("you are dead");
});
