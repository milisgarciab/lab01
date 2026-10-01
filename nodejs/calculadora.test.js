const Calculadora = require("./calculadora");

describe("Calculadora", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculadora();
  });

  test("sumar", () => {
    expect(calc.sumar(2, 3)).toBe(5);
  });

  test("sumar negativos", () => {
    expect(calc.sumar(-2, -3)).toBe(-5);
  });

  test("restar", () => {
    expect(calc.restar(5, 3)).toBe(2);
  });

  test("multiplicar", () => {
    expect(calc.multiplicar(4, 3)).toBe(12);
  });

  test("multiplicar por cero", () => {
    expect(calc.multiplicar(7, 0)).toBe(0);
  });

  test("dividir", () => {
    expect(calc.dividir(10, 2)).toBe(5);
  });

  test("dividir entre cero lanza error", () => {
    expect(() => calc.dividir(10, 0)).toThrow("No se puede dividir entre cero");
  });
});