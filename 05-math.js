let edad = 36

//edad = edad + 1

edad += 1

//se puede hacer d elas dos formas

edad -=1

//

let peso = 78;

let sandwich = 1

peso += sandwich

let futbol = 3

//

let vino = 256.3;

let carrito = Math.round (vino*100*3)/100;

let carritoStr = carrito.toFixed(2)

//convirtiendo el valor en str es posibe ver los decimales completos,
//dentro de los parametros se especifica la cantidad de decimales que se desea despues de la coma

let carrito2 = parseFloat(carritoStr)

//parseFloat convierte un str en un valor numerico con decimales

let carrito3 = parseInt(carritoStr)

//parseInt permite convertir un str en un valor numerico entero

let n = 16

Math.pow(n,2)

//potencia

Math.sqrt(64)

//raiz cuadrada

console.log(Math.min(43, 46, 97, 2, 567, 9799))

//el valor minimo de una lista

console.log(Math.max(43, 46, 97, 2, 567, 9799))

//el valor maximo de una lista

let aleatorio = Math.random()*10;

let aleatorioInt = Math.round(aleatorio);