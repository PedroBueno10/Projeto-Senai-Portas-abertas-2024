const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

numeros.forEach(numero => {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }
});
