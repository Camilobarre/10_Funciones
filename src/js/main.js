// const hola= alert("Hola Mundo")

// const respuesta = confirm("¿Estás seguro?")

// console.log(respuesta);

console.group("Función Declarativa")
//Función Declarativa
function saludar(grupo) {
    console.log(`Hola ${grupo}, hoy es un gran día`);
}

saludar("enfermeras");
saludar("coders");
saludar("tombos")
saludar("tombos azules");

// function notificacionSaludar(nombre){
//     console.log(`Hola ${nombre}, esta es una notificación`);
// }

// function despedir(nombre){
//     console.log(`Nos vamos a despedir de ${nombre}`);

// }
// let coderName=prompt("Ingresa un nombre")
// notificacionSaludar(coderName)
// despedir(coderName)

function sumarDosNumeros(numero1, numero2) {
    let respuesta = numero1 + numero2;
    return respuesta
}

let total = sumarDosNumeros(2, 6)

console.log(total);


function login() {
    let nombreUsuario = prompt("Ingresa el nombre de usuario")
    let contraseña = prompt("Ingresa la contraseña")
    if (nombreUsuario === "admin" && contraseña === "12345") {
        console.log(`Hola ${nombreUsuario}`);
    } else {
        alert("Ingresaste un usuario o contraseña equivocada");
    }
}

login()

console.groupEnd();

function uno() {
    console.log("Esta es una función declarativa");
}

uno()

const dos = function () {
    console.log("ESta es una funcón expresiva");
}