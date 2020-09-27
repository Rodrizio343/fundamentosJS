//se indica que la clase se va a exportar con la palabra reservada export

export class Usuarios{
    constructor(nombre,email,password){
        this.nombre=nombre
        this.email=email
        this.password=password
    }
}

export class Administrador{
    constructor(nombre,apellido,edad,dni){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.dni=dni
    }
}