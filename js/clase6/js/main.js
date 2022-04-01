"use strict";

/* hoisting */
var user = 'caress';
var btnOn = false;
var index = 0;
var colors = ["deeppink", "green", "blue", "blueviolet", "orange", "red", '' ];
var div2 = document.getElementsByTagName("div")[1];

function heehee() {
  console.log("Bienvenido: " + user);
}

function cambiarColor() {  

	console.log('index: ' + index);
	console.log('color: ' + colors[index]);
	/* scope */
  

  div2.style.backgroundColor = colors[index];
  div2.style.boxShadow = "0 0 14px 3px " + colors[index];
  div2.style.textShadow = "0 0 30px " + colors[index];

	if (index == colors.length - 1) {
    index = 0;
  } else {
    index++;
  }

}


/* heehee(); */
