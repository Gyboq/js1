// 1
function verificarPar(numero) {
  if (numero % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
}

// 2
function compNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    console.log("El número " + numero1 + " es mayor a " + numero2);
  } else if (numero2 > numero1) {
    console.log("El número " + numero2 + " es mayor a " + numero1);
  } else {
    console.log("Ambos son iguales");
  }
}

// 3
function multiploDe5(numero) {
  if (numero % 5 === 0) {
    console.log("El número " + numero + " es múltiplo de 5");
  } else {
    console.log("El número " + numero + " no es múltiplo de 5");
  }
}

// 4
function imprimirNumeros(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

// 5
function imprimirPalabra(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}

// 6
function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const primerArray = [1, 2, 3];
// imprimirArray(primerArray);

// 7
function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

const segundoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// imprimirArray(segundoArray);

// 8
function multiplicarArray(array, numero) {
  for (let i = 0; i < array.length; i++) {
    const resultado = array[i] * numero;
    console.log(resultado);
  }
}
// multiplicarArray(segundoArray, 9);
