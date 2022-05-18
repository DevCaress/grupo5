
function clickEv(event){
    event.target.style.backgroundColor = 'black';
    event.preventDefault();
    console.log(event);

    /* if(event.target.nodeName == 'SPAN'){
        event.target.parentElement.style.backgroundColor = 'black';
    }else{
        event.target.style.backgroundColor = 'black';
    } */

    /* if(event.altKey){
        console.log('alt activado');
    }

    if(event.altKey && event.ctrlKey && event.shiftKey){
        console.log('Combo especial');
    } */
}

function dobleClick(event){
    event.target.style.backgroundColor = 'blue';
    event.preventDefault();
    console.log(event);
}

function clicDerecho(event){
    event.preventDefault();
    
    console.log(event);
}

var img = null;



function dragStart(event){
    /* img = event.target; */
    event.dataTransfer.setData('perro',event.target.id);
    console.log('drag Start');
}

/* function drag(){
    console.log('drag');
} */

function dragEnd(){
    console.log('drag End');
}

function dragOver(event){
    event.preventDefault();
}

function drop(event){
    /* event.target.appendChild(img); */

    var imgID = event.dataTransfer.getData('perro');
    var element = document.getElementById(imgID);

    if(event.target.dataset.gato == imgID ){
        event.target.appendChild(element);
    }

    console.log(event);
    console.log('drop');
}