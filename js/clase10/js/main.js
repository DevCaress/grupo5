/* var alumnoArr = [
    'Pedro',
    'Lopez',
    29,
    true,
    ['spidi1, spidi2, spidi3']
];

var allAlumnos = [];

var alumnoObj1 = {
    name: 'Pedro',
    email: 'askldjhad@gmail.com',
    tel: 98127389123,
    color: 'azul',
};


var alumnoObj2 = {
    name: 'Manuel',
    color: 'azul',
    email: 'askldjhad@gmail.com',
    tel: 98127389123,
}; */

var allAlumnos = [];

function enviar(){

    var inputs = document.getElementsByTagName('input');

    var alumno = {};

    alumno.name = inputs[0].value;
    alumno.email = inputs[1].valu;
    alumno.tel = inputs[2].value;
    alumno.color = inputs[3].valu;
    alumno.pass = inputs[4].value;
    alumno.peliculas = ['asd', 'asdad', 'asdasd', 'asdasd'];
    alumno.padres = {
        mama: 'asdasd',
        papa:'aksdjhasdkjh'
    }

    allAlumnos.push(alumno);

    console.log(alumno);
    console.log(allAlumnos);

}



var facebook = [
    'user',
    'email',
    'cel',
    'nombre',
    'apellido',
    'amigos',
    'nacimiento',
    'foto de perfil',
    'foto de perfil de tus amigos',
    'conversaciones',
    'mensajes',
    'stickers',   
];

