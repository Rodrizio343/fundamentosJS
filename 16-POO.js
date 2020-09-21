/*POO

Abstracción para crear modelos de objetos basados en el mundo real, es decir, programar pensando como
que todo las cosas son objetos, ej: una persona, que tiene partes y funciones.

Caracteristicas:
-Código reutilizable
-Facil entender y mantener
-Desarrollo sencillo*/

let persona = {
    nombre: "Rodrigo",
    apellido: "Martínez",
    edad: 26,
    saludar: function(){
        console.log(`Hola! Soy ${this.nombre} ${this.apellido}`);
        //se emplea la palabra reservada this, que indica que traiga el nombre y apellido de ESTE objeto
    }
}

//para ver los valores en consola: objero.atributo, objeto["atributo"]

//agregar en consola una propiedad a un objeto que ya ha sido creado:
//persona.nuevaPropiedad = valor
//tambíen se aplica para reescribir valores

//eliminar propieda o atributo
delete persona.edad

//for para iterar atributos de objetos
for(let p in persona){
    //la varaible p engloba todos los atributos del objeto
    //asi me demuestra los atributos del objeto
    //console.log(p)
    //asi se muestran los los atributos del objeto con sus valores
    console.log(`${p}: ${persona[p]}`)
}

//los objetos pueden emplear métodos, que no son otra cosa que funciones. Ej: saludar
//Si igualamos objetos ej: persona1 === persona2 con iguales valores, y despues le cambio un atributo
//ese atributo cambia para ambos objetos.
