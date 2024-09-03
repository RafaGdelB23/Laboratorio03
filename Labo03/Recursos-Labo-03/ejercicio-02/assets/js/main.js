const plus = (a, b) => {
  var sum = a + b;
    alert('El resultado de la suma es: ' + sum);
};
const subtract = (a, b) => {
  var rest = a - b;
  alert('El resultado de la resta es: ' + rest);
};
const multiply = (a, b) => {
  var mult = a * b;
  alert('El resultado de la multiplicación es: ' + mult);
};
const split = (a, b) => {
  var div = a / b;
  alert('El resultado de la división es: ' + div);
};

const requestNumber = () => {
  var a = parseInt(prompt("Ingrese un número: "));
  var b = parseInt(prompt("Ingrese otro número: "));
  return [a, b];
};

const selectOperation = (a, b) => {
  const opcion = prompt(
    "Ingrese la operación que le gustaría realizar:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"
  );
  switch (opcion) {
    case "1":
      resultado = plus(a, b);
      break;
    case "2":
      resultado = subtract(a, b);
      break;
    case "3":
      resultado = multiply(a, b);
      break;
    case "4":
      resultado = split(a, b);
      break;
    default:
      alert("Escoja una opción valida");
      return;
  }

};

const main = () => {
  const [a, b] = requestNumber();
  selectOperation(a, b);
};

main();
