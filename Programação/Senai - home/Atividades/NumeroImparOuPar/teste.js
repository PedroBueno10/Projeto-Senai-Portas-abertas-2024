for (var i = 0; i<=999999; i ++) {
var numero = prompt('Digite um numero e descubra se ele é ímpar ou par')

function analise (num) {
  if (numero  % 2 == 0) {
    return 'Numero par'
  } else {
    return 'Numero impar'
  }
}

alert(analise(numero));
}