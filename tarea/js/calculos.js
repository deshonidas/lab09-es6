// 1. Arrow function con operador rest (...notas) en lugar de arguments
export const promedio = (...notas) => {
  const suma = notas.reduce((acc, n) => acc + n, 0);
  return suma / notas.length;
};

// 2. Parámetro por defecto (minima = 13)
export const estado = (nota, minima = 13) => {
  return nota >= minima ? "Aprobado" : "Desaprobado";
};

// 3. Desestructuración ({ nombre, notas }) y spread operator (...notas)
const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  // Template literal
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

// Exportación por defecto (una por archivo)
export default reporte;
