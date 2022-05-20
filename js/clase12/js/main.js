var idPokemon = 1;
var items = 20;

function initPokemons(){
    for (let index = 1; index <= items; index++) {
        getPokemon();  
        idPokemon++;     
    }
}

function getPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/' + idPokemon)
    .then(response => response.json())
    .then(data => crearPokemon(data))
}




function crearPokemon(perro){
    /* console.log(perro); */

    var container = document.getElementsByTagName('main')[0];
    var element = document.createElement('div');
    element.innerHTML = `
    <div class="contImg"> <img src="${perro.sprites.front_default} "> </div>
    <div class="info"> 
        <span> ${perro.id} </span>- ${perro.name}
        <div class="type"> ${perro.types[0].type.name} </div>
    </div>    
    `;

    container.appendChild(element);
}