import saludar from "./saludador";

const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  const nombre = nombreInput.value;  

  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});