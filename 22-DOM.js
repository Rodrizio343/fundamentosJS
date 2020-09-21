// nodo.className = "nombre de clase"

// Asi posible aplicar un estilo ya creado a un nodo mediante el DOM

// clonar elementos

// document.body.appendChild(nodo.cloneNode(true))

// //Hace una copia exacta del nodo

// document.body.appendChild(nodo.cloneNode(false))

// //Clona solo la etiqueta, sin contenido

// document.body.insertBefore(elementoAPosicionar, elementoDeReferencia)

// //posicionar un nodo en algun lugar en especifico

// document.body.removeChild(elementoAEliminar)

// //para eliminar un elemnto en particular
        
// document.body.replaceChild(elementoNuevo,elementoAReemplazar)

// //para reemplazar un nodo por otro

//Programacion orientada a eventos

//addEventListener 'escucha' el evento todoel tiempo y ejecuta la funcion

let coordX = document.getElementById('coordX')
document.addEventListener('mousemove',function(e){
    coordX.innerText=e.x
});

let coordY = document.getElementById('coordY')
document.addEventListener('mousemove',function(e){
    coordY.innerText=e.y
});


function cambiarColor(){
    document.body.bgColor='lightgreen';
}