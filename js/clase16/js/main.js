let allUsers = () => [];

const getDataLocal = () =>{
    let usersLocal = localStorage.getItem('userJson');
    allUsers = JSON.parse(usersLocal);
    console.log(usersLocal);
    console.log(usersLocal.length);
    createUI(JSON.parse(usersLocal));
}


const createUI = (usersLocal) => {

    const cont = document.getElementsByTagName('main')[0];
    cont.innerHTML = '';

    for (const user of usersLocal) {
        let element = document.createElement('div');
        element.innerHTML = `
            <p>Nombre: ${user.name}</p>
            <p>Pass: ${user.pass}</p>
        `;
        cont.appendChild(element);
    }

}

const saveDataLocal = () => {
    let data = JSON.stringify(allUsers);
    console.log(data);
    localStorage.setItem('userJson',data);
    getDataLocal();
    /* localStorage.setItem('userArray',allUsers); */

}

function User(name, pass){
    this.name = name;
    this.pass = pass;
}

const createUser = () =>{
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    let newUser = new User(user,pass);
    allUsers.push(newUser);
    saveDataLocal();
}


getDataLocal();