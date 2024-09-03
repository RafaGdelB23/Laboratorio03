const calculateFactorial = (numero) => {
    
    let result = 1;

    for (let i = 1; i <= numero; i++) {
        result*= i;
    }

    return result;
};

const requestNumber = () => {
    let numero = parseInt(prompt("Ingrese un número mayor a 0: "));
    if (numero < 0 || isNaN(numero)) {
        alert("Número inválido");
    }
    return numero;
};

const main = () => {
    const numero = requestNumber();
    if (numero != 0) {
        const result = calculateFactorial(numero);
        alert("El resultado es: " + result);
    }
};

main();
