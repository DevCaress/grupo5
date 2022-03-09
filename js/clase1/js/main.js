var edad = 24;

var nombre;

nombre = 90;

var fondos = 100;

fondos = 150;

fondos = 120;

fondos = -100;

var nombre = "Carlos";

var whats = nombre;
var face = nombre;
var ig = nombre;
var tw = nombre;

/* console.log(nombre);
console.log(whats);
console.log(face);
console.log(ig);
console.log(tw); */

var casado = false;
var muerto = true;

if (casado) {
  console.log("Felicidades que duren mucho");
}

/* console.log(prompt('Cual es tu nombre?')); */

/* var name = prompt('Cual es tu nombre?');
console.log(name); */

/* var casado = confirm('Estas casado?');

if (casado) {
    console.log('Estas casado');
}

if (casado == false) {
    console.log('No estas casado');
} */

/* int num5 = 98.123;
float num15 = 123910293.9182379;
string name2 = 234123;
boolean casado2 = 'asdasd'; */

var num1 = 98;
var num2 = 87;
var num3 = -293847;

var suma = num1 + num2;
var resta = num2 - num1;
var division = num1 / num2;
var multi = num1 * num2;
var modulo = num1 % num2;

/* console.log(modulo); */

var dinero = 1000;
var pcGamer = 800;

/* > mayor que
< menor que 
== igual que */

if (dinero > pcGamer) {
  console.log("Te puedes comprar la PC");
}

if (dinero < pcGamer) {
  console.log("No me alcanza pa la PC");
}

if (dinero == pcGamer) {
  console.log("Te puedes comprar la PC x2");
}

/*  crear un algoritmo:
    - te va preguntar que edad tienes
    - si eres menor no te deja entrar al bar
    - si eres mayor si te deja entrar
 */

var menorEdad = prompt('Cual es tu edad');
var mayorEdad = 18;

if (menorEdad > mayorEdad) {
  console.log("Puedes entrar");
}

if (menorEdad == mayorEdad) {
    console.log("Puedes entrar");
}

if (menorEdad < mayorEdad) {
  console.log("No Puedes entrar");
}
