//Cuadro con un input

/*let nombre = prompt("Ingrese su nombre")
if (nombre === null){
    console.log("Debe ingresar un valor")
} else {
    console.log(`El nombre ingresado es ${nombre}`);
}*/

//

//let numero = parseInt(prompt("Ingrese un numero"))
//let numero1 = parseInt(prompt("Ingrese otro numero"))

//console.log(numero + numero1)

//tarea
//ingresar dos numeros
//validar que sean numeros
//si algunos de los campos queda vacio
//igualar el campo 0

//devolver en un alert el valor
//de los numeros restados

let numero1 = parseInt(prompt("ingrese un numero"))
let numero2 = parseInt(prompt("ingrse otro numero"))

if (numero1 ===''){
    numero1=0
} else if (numero2===''){
    numero2=0
} else if (isNaN(numero1) || isNaN(numero2)){
    console.log("Alguno de los valores no es numero")
} else {
    alert(numero1-numero2)
}