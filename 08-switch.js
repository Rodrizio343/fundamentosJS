/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

/*let day;

let diaNumero =new Date().getDay();

switch(diaNumero) {
    case 0:
        day="Domingo";
        break;
    case 1:
        day="Lunes";
        break;
    case 2:
        day="Martes";
        break;
    case 3:
        day="Miércoles";
        break;
    case 4:
        day="Jueves";
        break;
    case 5:
        day="Viernes";
        break;
    case 6:
        day="Sábado";
        break;    
}*/

//Tarea
//Crear un switch que segun el comandoq ue ingrese
//se ejecute:
//comando:alert, console, print(document.whrite)


let ingreso =  prompt("Ingrse un comando")

switch (ingreso) {
    case "alert":
        alert("Esto es un alert")
        break;
    case "error":
        console.error("Esto es un error")
        break;
    case "print":
        document.write("Esto es un print")
        break;
    default:
        console.log("No es un comando")
        break;
}