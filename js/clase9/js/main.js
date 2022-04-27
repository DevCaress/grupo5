
/* function msg(user){
    var msg2 =  'Hee hee ' + user;
    return msg2;
}

var mensaje1 = msg('caress');

console.log(mensaje1); */



/* -------------------- */

var allUsers = [];

function getDataInput(input){
    return input.value
}

function createUser(){
    var newUser = [];
    var inputs = document.getElementsByTagName('input');
    
    for (let index = 0; index < inputs.length; index++) {
        newUser.push( getDataInput(inputs[index]) )       
    }    
    return newUser;
}

function saveAll(){
    /* allUsers[0] = createUser(); */
    allUsers.push(createUser());
    console.log(allUsers);
}