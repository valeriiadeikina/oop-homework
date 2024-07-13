import Character from "../Character";

let hero;

beforeEach(() => {
  hero = new Character("OOP", "Magician");
});

test("проверка соответствия объекта", () => {
  expect(hero).toEqual({
    _name: "OOP",
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
