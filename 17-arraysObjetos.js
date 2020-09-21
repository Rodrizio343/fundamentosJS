//Arreglo de objetos

let productos = [
    {id:1, nombre: "leche", precio: 150, categoria: ["familiar", "comida"]},
    {id:2, nombre: "arroz", precio: 80, categoria: ["familiar", "comida"]},
    {id:3, nombre: "ventilador", precio: 15000, categoria: ["familiar", "comida"]},
    {id:4, nombre: "cafetera", precio: 20000, categoria: ["familiar", "comida"]},
]

// Al tener objetos dentro de un arreglo, puedo utilizar los metodos de arreglos con los objetos

productos.map(function (pro) {
    console.log(`Nombre: ${pro.nombre}`);
    console.log(`Precio: ${pro.precio}`);
    console.log(`Categorías: ${pro.categoria.join(", ")}`);
    console.log("-----------------------------------")
})

//join convierte el contenido de un atributo (arreglo en este caso) en un string, cuyos valores estan separados
//por un simbolo especificado entre los parentesis del metodo