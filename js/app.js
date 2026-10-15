import bienvenida, { iva, calcularTotal, formatearMoneda } from "./utils.js";
console.log("Laboratorio 09 listo");
// ===== Ejercicio 2: let, const y arrow functions =====

// ES5
function sumaES5(a, b) {
  if (b === undefined) b = 0;
  return a + b;
}

// ES6+
const suma = (a, b = 0) => a + b;

console.log(sumaES5(2, 3), suma(2, 3), suma(2)); // Imprime: 5 5 2

const saludar = (nombre = "invitado") => `Hola, ${nombre}`;
const crearProducto = (nombre, precio) => ({ nombre, precio });

console.log(saludar(), saludar("Ana")); // Imprime: Hola, invitado Hola, Ana
console.log(crearProducto("Mouse", 45)); // Imprime: {nombre: 'Mouse', precio: 45}
const descuento = 0.1;
// descuento = 0.20;
// ===== Ejercicio 3: Desestructuración =====

// 1. Desestructuración de objetos con valor por defecto
const persona = { nombre: "Ana", edad: 22 };
const { nombre, edad, ciclo = "V" } = persona;
console.log(nombre, edad, ciclo); // Imprime: Ana 22 V

// 2. Desestructuración de arreglos por posición
const [primero, segundo] = [10, 20];
console.log(primero, segundo); // Imprime: 10 20

// 3. Desestructuración directamente en los parámetros de una función
const mostrar = ({ nombre, precio }) => `${nombre}: S/ ${precio}`;
console.log(mostrar({ nombre: "Teclado", precio: 89 })); // Imprime: Teclado: S/ 89

// ===== Ejercicio 4: Spread y rest =====

// 1. Spread en arreglos: expande elementos y crea una nueva copia
const base = [1, 2];
const copia = [...base, 3];
console.log(base, copia); // Imprime: [1, 2] [1, 2, 3]

// 2. Spread en objetos: copia propiedades y permite sobreescribir (precio)
const producto = { nombre: "Laptop", precio: 2500 };
const oferta = { ...producto, precio: 2300 };
console.log(oferta); // Imprime: {nombre: 'Laptop', precio: 2300}

// 3. Rest operator en parámetros: agrupa argumentos en un arreglo
const sumar = (...nums) => nums.reduce((t, n) => t + n, 0);
console.log(sumar(1, 2, 3, 4)); // Imprime: 10

// 4. Rest operator en desestructuración: agrupa los elementos restantes
const [ganador, ...otros] = ["Ana", "Luis", "Rosa"];
console.log(ganador, otros); // Imprime: Ana ['Luis', 'Rosa']
// ===== Ejercicio 5: Módulos =====
console.log(bienvenida("Ana")); // Bienvenido(a), Ana

const productos = [
  { nombre: "Mouse", precio: 45, cantidad: 2 },
  { nombre: "Teclado", precio: 189, cantidad: 1 },
];

const lista = document.querySelector("#lista");
productos.forEach(({ nombre, precio, cantidad }) => {
  const subtotal = formatearMoneda(calcularTotal(precio, cantidad));
  lista.innerHTML += `<li>${nombre} x${cantidad} = ${subtotal}</li>`;
});

const total = productos.reduce(
  (t, { precio, cantidad }) => t + calcularTotal(precio, cantidad),
  0
);
document.querySelector("#total").textContent = `Total con IGV (${
  iva * 100
}%): ${formatearMoneda(total)}`;
