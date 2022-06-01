
/* const animals = [
    'Perro',
    'Gato',
    'Delfin',
    'Perico',
    'Vaca'
];

const animals2 = {
    name3:'Delfin',
    name4:'Perico',
    name5:'Vaca',
    name1:'Perro',
    name2:'Gato',
    
} */

const user = 'caress';
const user2 = 'caress aksjdha aksdjhasdk kajsdha';
/* for (let index = 0; index < animals.length; index++) {
    
    console.log(animals[index]);
} */

/* for (const key in animals) {
    console.log(key, animals2[key]);
} */

/* for (const iterator of user2) {
    console.log(iterator);
} */

/* let animals = {
    perro: 'pugberto',

}

animals.gato = 'michi'; */


let perro = {
    patas: 4,
    tipo: 'terrestre',
    color: 'blanco',
    name: 'perro'
}

let gato = {
    patas: 4,
    tipo: 'terrestre',
    color: 'gris',
    name: 'gato'
}

/* function Animal2(patas,tipo,color,name){
    let animal = {};
    animal.patas = patas;
    animal.tipo = tipo;
    animal.color = color;
    animal.name = name;
    return animal
}

let pajaro = Animal2(4,'ave', 'negro','pajaro');
console.log(pajaro); */

function Animal(coins,tipo,color,name){
    
    this.coitextns = coins;
    this.tipo = tipo;
    this.color = color;
    this.name = name;
    this.sound = function(){
        console.log('hee hee');
    }
    this.getCoins = () => this.coins;
    
    this.setCoins = (val) => this.coins = val;
    
}

let pez = new Animal(10,'acuat','azul','pez');

console.log(pez);

let allTodos = [];
allTodos.push(pez);