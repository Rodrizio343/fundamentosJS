//funciones anónimas
const saludar = function() {
    console.log("Hola")
};

//se usa const por que la funcion no va a cambiar

//Funciones con nombres
function saludar2() {
    console.log("Hola mundo")
};


//Algunas funciones pueden llevar parametros
function saludarPersonas(nombre,apellido) {
    if(nombre && apellido){
        console.log(`Hola soy ${nombre} ${apellido}`)
    } else {
        console.log(`Faltaron parametros`)
    }
}

//Ambito de las funciones o scope

let nombre = "Rodrigo"; 

function imprimirNombreMayuscula() {
    //n es una variable local
    let n = nombre.toUpperCase();
    //console.log(n)
    return n;
    //el return siempre va al final, si se pone antes no ejecuta el resto de la función
}

//Si inntento visualizar el valor de n en consola no podre hacerlo, dado que n es una variable LOCAL
//dentro de la función.


let numero = 12

function sumar(){
    if(numero<=10){
        return;
    } else {
        return numero;
    }
}