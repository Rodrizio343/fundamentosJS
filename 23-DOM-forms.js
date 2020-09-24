let personas = []

class Persona{
    constructor(nombre,email,elegir,terminos){
        this.nombre=nombre
        this.email=email
        this.elegir=elegir
        this.terminos=terminos
    }
}




let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let elegir = document.getElementById('elegir');
let terminos = document.getElementById('terminos');

function mostrar(event){//se llama como parametro a event, que permite que llama al mismo evento, permitiendo utlizar una serie
    //de metodos como el preventDefault()
    //para evitar que la pagina se refresque
    event.preventDefault()
    // console.log('nombre', nombre.value)
    // console.log('email', email.value)
    // console.log('elegir', email.elegir)
    // //traer datos de checkbox, se lo debe traer por el name
    // let sexo = document.querySelector('input[name=sexo]:checked');
    // //sería en un input con name=nombre, qeu verifica cual de los radios con el mismo name esta checked
    // //la variable sexo se define dentro de la función para evitar que, en el flujo de lectura,
    // //sexo tome el valor del check establecido por defecto, nunca leyendo la funcion hasta llegar al script
    // console.log('sexo', sexo.value)
    // //los checkbox por defecto tienen un value on, para saber si estan marcados o no se usa la propiedad checked
    // console.log('terminos', terminos.checked)

    let persona = new Persona(nombre.value,email.value,elegir.value,terminos.value)
    personas.push(persona)

    //para guardar en local Storage
    localStorage.setItem('Persona', JSON.stringify(personas))
}