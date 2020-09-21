//for (let i=0; i<=10; i++){
 //   console.log(i)
//}


//lleva 3 declaraciones, la primera para declarar una variable index (i),
//la segunda es la condicion para que se ejecute el programa; 
//la tercera es la instruccion para que se produzca el loop

//la variable i se puede declarar incluso fuera del for, especificando de todas maneras el ; en la condicion for

let tabla = parseInt(prompt("ingrese el numero de la tabla a calcular"))

for (let i=1; i<=10; i++){
    console.log(`${tabla} x ${i} = ${i*tabla}`)
}

//controlar que se ingrese un num,
//si no ingreso un numero devolver un msj de error
