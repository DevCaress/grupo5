/*  */

var info = '';
var notas = '';

function clearInput(){
  document.getElementById('entrada').value = '';
}

function getInfo(){

  var value = document.getElementById('file').value;
  var container = document.getElementsByClassName('cards')[0];

  var element = document.createElement('div');
  element.innerHTML = '<img src="'+ value +'">' 

  container.appendChild(element);

  console.log('value: ' + value);
  /* console.log('notas: ' + notas); */

  clearInput();
}

/* function getInfo(){

  var value = document.getElementById('entrada').value;
  var container = document.getElementsByClassName('cards')[0];
  notas = notas + '<div>'+  value + '</div>' ;

  container.innerHTML = notas;

  console.log('value: ' + value);
  console.log('notas: ' + notas);

  clearInput();
} */

