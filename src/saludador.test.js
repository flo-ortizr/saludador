import saludar from "./saludador.js";

describe("Saludar", () => {
  it("deberia saludar con el nombre correcto", () => {
    const resultado = saludar("Pedro", "M", 35, "es");

    expect(resultado).toContain("Pedro");
  });

  it("deberia saludar formalmente (Sr.) a un hombre mayor de 30 en español", () => {
    const resultado = saludar("Carlos", "M", 40, "es");
    expect(resultado).toContain("Sr. Carlos");
  });

  it("deberia saludar formalmente (Sra.) a una mujer mayor de 30 en español", () => {
    const resultado = saludar("Maria", "F", 40, "es");
    expect(resultado).toContain("Sra. Maria");
  });

  it("deberia saludar informalmente (estimado) a un joven en español", () => {
    const resultado = saludar("Hans", "M", 20, "es");
    expect(resultado).toContain("estimado Hans");
  });

  it("deberia saludar en ingles con Mr. a hombre mayor", () => {
    const resultado = saludar("John", "M", 40, "en");
    expect(resultado).toContain("Mr. John");
  });

  it("deberia saludar en ingles con Mrs. a mujer mayor", () => {
    const resultado = saludar("Mary", "F", 40, "en");
    expect(resultado).toContain("Mrs. Mary");
  });
});