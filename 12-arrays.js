//diferente a los objetos, los arreglos se realzan entre corchetes y en su interior tienen elementos
//let arreglo=[1,"Rodrigo",56, false, "Hola", true]
//console.log(arreglo.length)

//console.log(arreglo[arreglo.length-1])

let alumnos = ["Chespi","Miguel","Jim","Droopy"]

for (let i=0; i<alumnos.length; i++){
    console.log("Hola " + alumnos[i]);
}


//asi se puede agregar un elemento al arreglo
alumnos.push("Fabrizio");   

//cambiar un elemento del arreglo, indicado su posición
alumnos[0] = "Viejo";

//eliminar ultimo elemento del arreglo
alumnos.pop()

//agregar un elemento en la primera posición del arreglo
alumnos.unshift("Chespi")

//eliminar primer elemento del arreglo
alumnos.shift()

//Reemplazar elemeto en una posición especifica. El primer parametro indica la posición que se va a reemplazar
//el segundo indica la cantidad de posiciones que se vana a reemplazar y la tercera el nuevo valor del eleemento
alumnos.splice(2,1,"Luciano")

alumnos.push("Chespi")

alumnos.splice(1,2,"Jim","Sebita")

//Splice si aclarar todos los argumentos provocan que se borren todos los elementos del arreglo

//Averiguar posicion de un elemento en un arreglo grande
alumnos.indexOf("Chespi")

//Ordenar los elementos del arreglo en orden alfabét    ico
alumnos.sort()



