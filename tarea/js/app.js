// Importación por defecto y nombradas
import reporte from "./calculos.js";
import { curso, estudiantes } from "./datos.js";

// Spread de objeto ({ ...obj }) en reemplazo de Object.assign
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Spread de arreglo ([...arr]) en reemplazo de .concat()
const todos = [...estudiantes, nuevo];

// Impresión en consola
console.log(`Curso: ${curso}`);

const lista = document.querySelector("#reportes");

// Recorremos el arreglo de estudiantes
todos.forEach((estudiante) => {
  const res = reporte(estudiante);
  console.log(res);
  lista.innerHTML += `<li>${res}</li>`;
});
