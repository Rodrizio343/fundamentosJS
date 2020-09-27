//se indica que la clase se va a importar con la palabra reservada import, indicando la clase que se va a importar
//y la direccion, En el archivo index se debe indicar que el type del script es un 'module'

import {Administrador, Usuarios} from './modulos/clases.js'

import{saludar} from './modulos/funciones.js'

let rodrigo = new Usuarios('Rodrigo','rodrigozoot94@gmail.com','rodrzio343')

console.log(rodrigo)

let zoe = new Administrador('Zoe','zoevalent@gmail.com','17','12345')

console.log(zoe)

console.log(saludar(zoe.nombre))