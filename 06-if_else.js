let numero = 5;

if (numero >= 10) {
    console.log('el numero es mayor o igual que 10')
}

else {
    console.error('El nuemro no cumple la condición especificada')
}


let edad = 15;

let tutor = false;

if (edad>=18) {
    console.log('Puede entrar y disfrutar de la fiesta')
} else if (edad<18 && tutor==true) {
    console.log('Tienes un tutor, puedes pasar')
} else {
    console.error('Vuelva a la casa')
}

let chocolate = false;

let cafe = true;

if (chocolate || cafe) {
    console.warn('No puedo consumir el producto')
}

else {
    console.log('Puedo comer todo lo que quiera')
}