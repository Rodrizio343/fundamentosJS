/*let numero = 5

while (n=5) {
    console.log("estos es un while facil")
}*/

//mientras el valor sea el 

let vecesSumar = 10

let suma = 0

while (vecesSumar>0) {
    suma += 1;
    vecesSumar -=1;
    console.log("Suma: " + suma);
    console.log("Veces Suma: " + vecesSumar);
}

do{
    suma += 1;
    vecesSumar -=1;
    console.log("Suma: " + suma);
    console.log("Veces Suma: " + vecesSumar);
} while (vecesSumar>10);

//do/while permite ejecutar un bloque de codigo por lo menos una vez aún cuando la condición del while es FALSE
