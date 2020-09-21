//let nombre = "Daniel"
//let apellido = "perez"


let nombre = "Jose",
 apellido = "GONZALES"

//se pueden poner dos variables en una misma linea separadas por ,


let nombreEnMayuscula = nombre.toUpperCase()
let apellidoEnMinuscula = apellido.toLowerCase()

//se llama al metodo con la sintax variable.metodo()

let primeraLetra = nombre.charAt(2);

//este metodo nos devuelve la letra (o valor) especificado

let cantidadDeLetras = apellido.length;

//devuelve la cantidad de caracteres que tiene un string

//let nombreCompleto = "El nombre completo es: " nombre + " " + apellido

let nombreCompleto2 = `El nombre completo es: ${nombre} ${apellido}`;

// los templates string permiten usar variables dentro de strings

let str = apellido.substr(2,4)

//este metodo nos muestra el rango de caracteres indicados

//tarea 1

//traer la ultima letra del nombre

let ultimaLetra = nombre.charAt(nombre.length - 1)

//hacer que la primera letra del apellido este en mayuscula

let primera = apellido.charAt(0).toUpperCase()

//trae el resto del apellido

let resto = apellido.substr(1 , apellido.length - 1)

apellido = `${primera}${resto}`;