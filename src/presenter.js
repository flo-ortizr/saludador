import saludar from "./saludador";

const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  const nombre = nombreInput.value;
  const genero = generoInput.value;  
  const edad = Number.parseInt(edadInput.value);

  div.innerHTML = "<p>" + saludar(nombre, genero, edad) + "</p>";
});