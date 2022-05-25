/* var perro = 'gato';
const URL = 'https://nogara.dev/api/';
const APIKEY = '128736123891763';


perro = '';



console.log(perro);
console.log(URL); */

/* var num1 = 22;
console.log(num1);

let num3 = 33;
console.log(num3);

{
    var num2 = 11;
    let num4 = 44;
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
}

console.log(num2);
console.log(num4); */


/* arrow functions */

let sayHello = function(nombre){
    let msg = 'Hola ' + nombre + ' estas pendejo';
    return msg;
}


let daniel = sayHello('daniel');

let mensaje = equis => 'Hola ' + equis + ' estas pendejo';     

let perro = (equis1, equis2, ye1) => {
    console.log(equis1);
    console.log(equis2);
    console.log(ye1);
    return equis1, equis2, ye1;
}

let naye = mensaje('naye');



let createUser = (user = 'pedro',email,pass,news = true,addres = false) =>{
    let objUser = {};
    objUser.name = user;
    objUser.email = email;
    objUser.pass = pass;
    objUser.news = news;
    objUser.addres = addres;
    return objUser;
} 

let caress = createUser('daniel');

