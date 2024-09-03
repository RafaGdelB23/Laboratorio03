
const plus = (a, b) => {
    var sum = a + b;
    return sum;
};
const subtract = (a, b) =>{
    var rest = a - b;
    return rest;
} ;
const multiply = (a, b) =>{
    var mult = a * b;
    return mult;
} ;
const split = (a, b) => {
    var div = a / b;
    return div;
};
const requestNumber = () => {
    var a = parseInt(prompt("Ingrese un número: "))
    var b = parseInt(prompt("Ingrese otro número: "))
    return a,b;
};

const selectOperation = () => {
    var opcion = prompt("Ingrese la operación que le gustaría realizar: ")
    switch(opcion){
        case '1':
            plus(sum);
            alert(plus);
            break;
        case '2':
            subtract(rest);
            alert(subtract);
            break;
        case '3':
            multiply(multiply);
            alert(multiply);
            break;
        case '4':
            split(split);
            alert(split);
            break;
        default:
            alert('Escoja una opción valida');
    }
};

const main = () => {
    requestNumber();
    selectOperation();
}

main();
