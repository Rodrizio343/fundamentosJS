//Callback
//Son funciones que se ejecutan despues de algo o cuando algo sucede.

setTimeout(function(){
    console.log("Este mensaje aparace despues de 3 segundos")
}, 3000);


//un set time out recibe dos parametros, el callback que e suna funcion y el tiempo (en milisegundos) que
//tarda en ejecutarse el callback.

let numeros = [2, 8, 62, 3]

for (let i=0; i < numeros.length; i++){
    console.log(numeros[i])
}

let numerosXDos=numeros.map(function(n){
    return n*2
});

//el metodo map crea un nuevo arreglo con el resultado de la ejecución del callback para cada valor del arreglo

    //metodo find(): devuleve el primer elemento que cumple con las condiciones dle función que se especifica

    let nombres = ["Rodrigo", " Fabrizio", "Zoé"];

function buscarNombre(nombre) {
    let persona = nombres.find(function(item){
        return item === nombre;
    })
    console.log(persona)
}

//filter

const filtrarMasDiez = function (){
    let masQueDiez = numeros.filter(function(numeros){
        return numeros >= 10
    })
    console.log(masQueDiez)
}

// la diferencia fundamental entre find y filter es que find devuelve el primer valor de que cumple
//con la condición de la función, mientras que filter devuelve todos los elemento que cumplen con la función.

