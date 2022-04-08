/* funciones */
var usuarios = [];
var noUsuarios = 0;


function clearInput(input){
  input.value = '';
}

function createText(text){
  var container = document.getElementsByClassName('texto')[0];
  var element = document.createElement('p');
  element.innerHTML = text;

  container.appendChild(element);
}

function saveInfo(info){

  usuarios[noUsuarios] = info;
  noUsuarios++;
  console.log(usuarios);

}

function getInfo(input){
  return input.value;  
}

function init() {
  var user = document.getElementById('user');
  var pass = document.getElementById('pass');

  var usuarioFinal = [];

  usuarioFinal[0] = getInfo(user);
  usuarioFinal[1] = getInfo(pass);

  saveInfo(usuarioFinal);

  /* nombre = prompt('nombre');
  contraseña = prompt('pass'); */

  console.log(usuarioFinal);
}



/* function mensaje(nombre){
  var bienvenida = 'Bienvenido ' + nombre;
  return bienvenida;
}

var nuevoMensaje = mensaje('asd');
var nuevoMensaje2 = mensaje('paasdasdlo');
var nuevoMensaje3 = mensaje('asdasd'); */
