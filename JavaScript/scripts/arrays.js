function arrays() {
  let numbers = [0, 1, 2, 3, 4, 5];
  let names = ["gerson", "rolando", "aranibar", "concha"];
  let mix = [9, "gerson", true, null, undefined];
  let arrays = [0, ["gerson", [0, 1]]];

  console.log("numbers", numbers);
  console.log("names", names);
  console.log("mix", mix);
  console.log("numbers", numbers[4]);
  console.log(arrays[1][1]);
  //modificando arrays por indice
  numbers[0] = 20;
  console.log(numbers);
}

function bucles() {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let alumnos = [
    {
      name: "gerson",
      age: 23,
      sexo: "m",
      materias: ["matematica", "lenguaje", "ciencias"],
    },
    {
      name: "sebastian",
      age: 34,
      sexo: "m",
      materias: ["matematica", "lenguaje", "ciencias"],
    },
    {
      name: "camila",
      age: 32,
      sexo: "f",
      materias: ["matematica", "lenguaje", "ciencias"],
    },
  ];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) console.log(numbers[i] + " es par");
  }

  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].age < 30) {
      console.log("alumnos menores de 30: ", alumnos[i]);
    }
  }
}

bucles();
