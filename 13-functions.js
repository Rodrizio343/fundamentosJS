//La estructura base de la función es la siguiente:

//unction nombreFuncion(parametros){
//    codigo
//}

//Llamar a la función es basicamente ponerla en accíon a darle los vaors que pide

//nombreFuncion(valores)

//function saludar(nombre,apellido){
//    alert(`Hola como estas ${nombre} ${apellido}`)
//}

//saludar("Rodrigo", "Martínez");

//let valor = 0

//function sumar(numero){
//    return valor = numero + 5
//}

//funciones anonimas
//const saludar = function(){
//    console.log("hola")
//}

//saludar()

let num1 = parseInt(prompt("Introduce un número:"))

let num2 = parseInt(prompt("Introduce otro número:"))

function sumar(num1,num2){
    console.log( `La suma entre ${num1} y ${num2} es igual a ${num1 + num2}`)
}

function resta(num1,num2){
    console.log( `La resta entre ${num1} y ${num2} es igual a ${num1 - num2}`)
}

function multiplicar(num1,num2){
    console.log( `La multiplicación entre ${num1} y ${num2} es igual a ${num1 * num2}`)
}

function dividir(num1,num2){
    console.log( `La división entre ${num1} y ${num2} es igual a ${num1 / num2}`)
}


function resultado(num1,num2){
    sumar(num1,num2)
    resta(num1,num2)
    multiplicar(num1,num2)
    dividir(num1,num2)
}

function validar(){
    if(isNaN(num1) || isNaN (num2)){
        alert("No ingreso un número")
    } else {
        resultado(num1,num2)
    }
}

validar(num1,num2)



//tarea
//recibir los valores a traves de un prompt
//evaluar que los valores recibidos sean numeros
//y si no lo son avisar con un alerta