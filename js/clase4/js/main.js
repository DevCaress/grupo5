/* Arrays o arreglos */
/* Null - Undefined */
var edad = 24;
var nombre = 'Caress';
var casado = false;
var telefono = 1232131231;
var hijos = false;

/* Jamas hacerlo
var cuandoMurioMiBisAbue = undefined; */


/* var num40 = perro; */

var frutas = [
    'manzana', 
    'pera', 
    'naranja', 
    'platano'
];
console.log(frutas);

frutas = ['tora', 'kiwi'];
console.log(frutas);

/* frutas = ['toronja', 'kiwi'];
console.log(frutas); */

frutas[0] = 'toronja';
console.log(frutas);

frutas[2] = 'coco';
frutas[3] = 'piña';

console.log(frutas);


/* 
var edad = 24;
var nombre = 'Caress';
var casado = false;
var telefono = 1232131231;
var hijos = false; 
*/

/* console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]); */

/* iterador, iterator */
/* iterar */
/* for, forof, forin, foreach, map, while, dowhile,  */

/* var index = 0; */


for (var index = 0; index < 4; index++ ){
    console.log(frutas[index]);
    /* index++; */
}

var imagenes = [
    'img/DC (2).png',
    'img/dc.png',
    'img/dc_2.png',
    'img/hallowin.png',
    'img/NDC (2).png',
    'img/ndc-hallowin.png',
    'img/ndc.png',
    'img/hallowin.png',
    'img/NDC (2).png',
    'img/ndc-hallowin.png',
    'img/ndc.png',
];

for (var index = 0; index < imagenes.length; index++ ){
    document.write('<img src="' + imagenes[index] +  '">');
}