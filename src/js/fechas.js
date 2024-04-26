const fecha = new Date();

console.log(fecha);

// const juanjoBD= new Date(2005,8,1);
// console.log(juanjoBD);

// const juanjoBDString=new Date("09/01/2005");
// console.log(juanjoBDString);

const dia = fecha.getDate();
console.log(dia);

const month = fecha.getMonth();
console.log(month);

const fullYear = fecha.getFullYear();
console.log(fullYear);

const year = fecha.getYear();
console.log(year);

const diaSemana = fecha.getDate();
console.log(diaSemana);

const hora = fecha.getHours();
console.log(hora);

const minutos = fecha.getMinutes();
console.log(minutos);

const segundos = fecha.getSeconds();
console.log(segundos);

const ms = fecha.getMilliseconds()
console.log(ms);

// const usuario = new Date(prompt("Ingresa una fecha: ", "MM/DD/YY"));
// fechaUsuario = new Date(usuario)
// console.log(fechaUsuario);

console.log(fecha.getTime());

const dias5 = fecha.setDate(fecha.getDate() + 5)
console.log(new Date(dias5));;

const diasPrestamo = parseInt(prompt("Ingrese la cantidad de días del prestamo: "))
const fechaDevolucion = new Date();

fechaDevolucion.setDate(fechaDevolucion.getDate() + diasPrestamo)
console.log(fechaDevolucion);

const fechaBD = new Date(prompt("Ingrese su fecha de nacimiento: "))
const fechaActual = new Date();

const años = (fechaActual.getFullYear() - fechaBD.getFullYear())
const años2= Math.floor((fechaActual-fechaBD)/1000*3600*24)
console.log(años);
console.log(años2);

