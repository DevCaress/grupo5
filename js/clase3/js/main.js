/* || "OR"  "o" */

var num1 = 873;
var num2 = 672;
var num3 = 42;

/* if (num1 > num2 || num1 < num3 ) {
    console.log('hee hee');
} */

/* Crear algoritmo:
Solo puede entrar hombres 
mayores de edad con más de 40usd */

var generoCliente = "M";
var dinero = 40;
var edad = 18;

/* if (condition) {
    if (condition) {
        
    }
} */

/* else if 
elsif*/



/* if (aciertos >= 30 && aciertos <= 39) {
  console.log("6");
}else if (aciertos >= 40 && aciertos <= 49) {
  console.log("8");
} else if (aciertos >= 50) {
  console.log("10");
}else if (aciertos <= 29) {
  console.log("5");
}else{
    alert('Solo se aceptan números de entre 0 y 50');
} */

var aciertos = prompt("Escribir tu número de aciertos");

aciertos = parseFloat(aciertos);

console.log(aciertos);



switch (aciertos ) {
    case 'c': 
        console.log('hee hee');
        break;
    case 5:
        console.log('Reprobaste');
        break;
    case 30:
        console.log('Sacaste 6');
        break;
    case 40:
        console.log('Sacaste 8');
        break;  

    default:
        console.log('Intentalo otra vez');
        break;
}
