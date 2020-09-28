let mascotas = ['perro', 'gato', 'canario']

// se especifica una constatante, en la que s ele asigna un nombre a cada valor dela array
//entonces los valores del array toman el nombre especificado en la constatnte, en sus respectivas ubicaciones
//si el numero de nombres es menor al numero de valores, los otros valores no se muestran

const [mascota1, mascota2, mascota3] = mascotas

    //Desestructuracion de objetos
    
    const persona = {
        nombre: 'Tony',
        edad: 45,
        clave: 'Ironman'
    }

    const{nombre,edad,clave}=persona

    function saludar(nombre){
        console.log(`Hola ${nombre}`)
    }

    saludar(nombre)


    const personajes = ['tapalin', 'gato con botas', 'superman']

    // const [p1,p2,p3] = personajes

    //para tomar solo un valor, las comas indican espacios vacios

    const [,p2,] = personajes