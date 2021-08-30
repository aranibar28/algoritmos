function ejercicio1() {
  let a = parseFloat(prompt("Ingresar el primer número: "));
  let b = parseFloat(prompt("Ingresar el segundo número: "));
  suma = a + b;
  console.log(`El resultado es ${suma}`);
  alert(`El resultado es ${suma}`);
}

function ejercicio2() {
  let examen1 = parseFloat(prompt("Ingresar nota del examen 1: "));
  let examen2 = parseFloat(prompt("Ingresar nota del examen 2: "));
  let examen3 = parseFloat(prompt("Ingresar nota del examen 3: "));
  let examen4 = parseFloat(prompt("Ingresar nota del examen 4: "));
  promedio = (examen1 + examen2 + examen3 + examen4) / 4;
  console.log(`El promedio es ${promedio}`);
  alert(`El promedio es ${promedio}`);
}

function ejercicio3() {
  let altura = parseFloat(prompt("Ingresar el altura del triangulo: "));
  let base = parseFloat(prompt("Ingresar la base del triangulo: "));
  area = (base * altura) / 2;
  console.log(`El área del triángulo es ${area}`);
  alert(`El área del triángulo es ${area}`);
}

function ejercicio4() {
  let altura = parseFloat(prompt("Ingresar el altura del rectángulo: "));
  let base = parseFloat(prompt("Ingresar la base del rectángulo: "));
  area = base * altura;
  console.log(`El área del rectángulo es ${area}`);
  alert(`El área del rectángulo es ${area}`);
}

function ejercicio5() {
  let radio = parseFloat(prompt("Ingresar el radio del circulo: "));
  area = Math.pow(radio, 2) * 3.1416;
  console.log(`El área del circulo es ${area}`);
  alert(`El área del circulo es ${area}`);
}

function ejercicio6() {
  let horasTrabajadas = parseFloat(prompt("Ingresar las horas trabajadas: "));
  let salarioxH = parseFloat(prompt("Ingresar el salario por hora: "));
  sueldo = horasTrabajadas * salarioxH;
  console.log(`El sueldo del trabajador es ${sueldo}`);
  alert(`El sueldo del trabajador es ${sueldo}`);
}

function ejercicio7() {
  let metro = parseFloat(prompt("Ingresar la cantidad en metros: "));
  pulgada = metro * 0.0254;
  console.log(`El modista debe pedir ${pulgada} pulgadas`);
  alert(`El modista debe pedir ${pulgada} pulgadas`);
}

function ejercicio8() {
  let soles = parseFloat(prompt("Ingresar la cantidad en soles: "));
  dolares = soles / 4.1;
  console.log(`La cantidad de ${soles} soles es equivalente ${dolares.toFixed(2)} dolares`);
  alert(`La cantidad de ${soles} soles es equivalente ${dolares.toFixed(2)} dolares`
  );
}

function ejercicio9() {
  let fecha = parseFloat(
    prompt("Ingresar el año que nacio del entrevistado: ")
  );
  edad = 2021 - fecha;
  console.log(`El trabajador tiene ${edad} años`);
  alert(`El trabajador tiene ${edad} años`);
}

function ejercicio10() {
  let nom1 = prompt("Persona 1 - Nombre: ");
  let age1 = parseFloat(prompt("Persona 1 - Edad: "));
  let nom2 = prompt("Persona 2 - Nombre: ");
  let age2 = parseFloat(prompt("Persona 2 - Edad: "));
  let nom3 = prompt("Persona 3 - Nombre: ");
  let age3 = parseFloat(prompt("Persona 3 - Edad: "));

  if ((age1 < age2) & (age1 < age3)) {
    alert(`La persona de menor edad es ${nom1} con ${age1} años.`);
  } else if ((age2 < age1) & (age2 < age3)) {
    alert(`La persona de menor edad es  ${nom2} con ${age2} años.`);
  } else if ((age3 < age1) & (age3 < age2)) {
    alert(`La persona de menor edad es  ${nom3} con ${age3} años.`);
  }
}

function ejercicio11() {
  let antiguedad = parseFloat(prompt("Ingresar los años de antiguedad: "));

  if ((antiguedad > 0) & (antiguedad <= 5)) bono = antiguedad * 100;
  else if (antiguedad > 5) bono = 1000;
  else bono = 0;

  alert(`El bono del trabajador es ${bono} dolares.`);
}

function ejercicio12() {
  salario = 1500;

  for (let i = 1; i <= 6; i++) {
    salario = salario + salario * 0.1;
    alert(`El salario en el año ${i} es ${salario.toFixed(2)}`);
    console.log(`El salario en el año ${i} es ${salario.toFixed(2)}`);
  }
  alert(`El salario Final es despues de 6 años es ${salario.toFixed(2)}`);
}

function ejercicio13() {
  let n = parseFloat(prompt("Ingresar la cantidad de alumnos a evaluar: "));
  let aprobados = 0;
  let desaprobados = 0;
  for (let i = 1; i <= n; i++) {
    let notas = parseFloat(prompt(`Ingresar las notas del alumno ${i}`));

    if (notas >= 12) {
      aprobados = aprobados + 1;
    } else {
      desaprobados = desaprobados + 1;
    }
  }
  alert(
    `Alumnos aprobados = ${aprobados} vs Alumnos desaprobados = ${desaprobados}`
  );
}

function ejercicio14() {
  let rojo = 0;
  let blanco = 0;
  let verde = 0;
  let n = parseFloat(prompt("Ingresa el valor de focos"));
  for (let i = 1; i <= n; i++) {
    let color = parseFloat(prompt(`Foco #${i} ---> || 1 = rojo || 2 = blanco || 3 = verde ||`));
    switch (color) {
      case 1:
        rojo = rojo + 1;
        break;
      case 2:
        blanco = blanco + 1;
        break;
      case 3:
        verde = verde + 1;
        break;
      default:
        0;
        break;
    }
  }

  alert(`Rojos = ${rojo} || Blanco = ${blanco} || Verde = ${verde}`);
}

function ejercicio15() {
  let edad = parseFloat(prompt("Ingresar edad: "));
  if (edad >= 18) {
    alert("Usted es mayor de edad y puede votar.");
  } else {
    alert("Usted NO puede votar.");
  }
}
