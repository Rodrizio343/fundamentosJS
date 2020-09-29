// const saludar = function(){
//     return 'Hola Mundo'
// }

//funciones flecha

const saludar = () => 'Hola Mundo'

let mensaje = saludar()

const saludar2 = (nombre) => `Hola ${nombre}`;

console.log(saludar2('Rodrigo'))

const getUser = () => ({
    uid: 12344,
    user: 'rodizio.343'
})