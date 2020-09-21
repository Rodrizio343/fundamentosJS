//los prototype son como moldes, usados para crear objetos que hereden los atributos del objeto padre (prototipo)
//Los prototipos son funciones constructoras
//Por convención, los prototipo (o clases), se nombran con letra inicial en mayuscula

function Usuarios(nombre, apellido, sexo, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.sexo = sexo
    this.edad = edad
    this.altura = altura
}

//esta variable persona va a heredar las propiedades del prototipo, creando un nuevo objeto hijo con new
let rodrigo = new Usuarios("Rodrigo","Martínez","Masculino",26,1.68)
let zoe = new Usuarios("Zoé","Martínez","Femenino",17,1,56)

//Para crear un método para el prototipo, comun a todos los objetos, creo una funcion anonima:
Usuarios.prototype.saludar = function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`)
}

Usuarios.prototype.medir = function() {
    if(this.altura<1.80){
        console.log(`${this.nombre} ${this.apellido} es bajo`)
    } else {
        console.log(`${this.nombre} ${this.apellido} es alto`)  
    }
}