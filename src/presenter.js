import saludar from "./saludador";

const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const idiomaInput = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  const nombre = nombreInput.value;
  const genero = generoInput.value;  
  const edad = Number.parseInt(edadInput.value);
  const idioma = idiomaInput.value;

  div.innerHTML = "<p>" + saludar(nombre, genero, edad, idioma) + "</p>";
});