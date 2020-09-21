// // let persona = {
// //     Nombre: "Rodrigo",
// //     Altura: 1.68,
// //     Sexo: "Masculino"
// // }

// // function Persona(nombre,altura,sexo){
// //     this.nombre=nombre
// //     this.altura=altura
// //     this.sexo=sexo
// // }

// //En las nuevas versiones los prototipos dse reemplazaron por las clases y constructores

// class Persona{
//     constructor(nombre,altura,sexo){
//         this.nombre=nombre
//         this.altura=altura
//         this.sexo=sexo
//         //Al crear las clases, las instancias heredan todas las propiedades de la misma. Si bien es posible
//         //agregar propiedades a una instacia mediante nombre.propiedad=valor, no es el sentido del uso de clases.
//     }
//     //A continuación del constructor van los metodos de la clase
//     saludar(){
//         //dentro de una función pueden ir otras funciones de ser necesario
//         console.log(`Hola, soy ${this.nombre}`);
//     }
// }

// let fabrizio = new Persona("Fabrizio", 1.68, "Masculino")
// let zoe = new Persona("Zoe", 1.53, "Femenino")


// //para heredar propiedades de una clase padre a una sub clase se utiliza extends
// class Desarrollador extends Persona{
//     constructor(nombre,altura,sexo){
//         super(nombre,altura,sexo);
//     }
//     saludar(){
//         console.log(`Hola, soy ${this.nombre} y soy desarrolador/a`)
//     }
// }

// let rodrigo = new Desarrollador("Rodrigo", 1,68, "Masculino")

class Usuario{
    constructor(nombre,email,password,estado=true) {
        this.nombre=nombre
        this.email=email
        this.password=password
        this.estado=estado
    }

    get ficha(){
        console.log("-----------------------")
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Email: ${this.email}`)
        console.log(`Activo: ${this.estado}`)
        console.log(`Experiencia: ${this.experiencia}`)
    }
}

let rodrigo = new Usuario("Rodrigo Ezequiel Martínez","rodrigozoot94@gmail.com","rodrizio343")
let fabrizio = new Usuario("Fabrizio Martínez","gato@perruno.com","todobien")

class Administrador extends Usuario{
    constructor(nombre,email,password,estado=true,experiencia) {
        super(nombre, email, password, estado, experiencia);
            this.experiencia = experiencia
    }

    cambiarEstado(usuario){
        return (usuario.estado = !usuario.estado);
    }
}

let chompiras = new Administrador("Chompi","chompi@example.com","pass",true,"2 años")


