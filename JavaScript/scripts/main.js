function ejercicio1() {
  let a = parseFloat(prompt("Ingresar el primer número: "));
  let b = parseFloat(prompt("Ingresar el segundo número: "));
  suma = a + b;
  console.log(`El resultado es: ${(suma)}`);
  alert(`El resultado es: ${(suma)}`);
}

function ejercicio2() {
  let examen1 = parseFloat(prompt("Ingresar nota del examen 1: "));
  let examen2 = parseFloat(prompt("Ingresar nota del examen 2: "));
  let examen3 = parseFloat(prompt("Ingresar nota del examen 3: "));
  let examen4 = parseFloat(prompt("Ingresar nota del examen 4: "));
  promedio = (examen1 + examen2 + examen3 + examen4) / 4;
  console.log("El promedio es: ", promedio);
  alert("El promedio es: " + promedio);
}

function ejercicio3() {
  let altura = parseFloat(prompt("Ingresar el altura del triangulo: "));
  let base = parseFloat(prompt("Ingresar la base del triangulo: "));
  area = (base * altura) / 2;
  console.log("El área del triángulo es: ", area);
  alert("El área del triángulo es: " + area);
}
