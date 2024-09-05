var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var xFinal = [20, 580, 580, 20];
var yFinal = [20, 380, 380, 20];
var i = 0;
var x = xFinal[i];
var y = yFinal[i];
var corBolinha;

function desenhaCirculo(x, y, raio,) {

  pincel.clearRect(0, 0, 600, 400);
  pincel.fillStyle = 'blue';
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function atualizaTela() {

  if (i === 0 ) {
    desenhaCirculo(x, y, 15);
    x++;
  }
  if (x === 580) {
    i++;
    desenhaCirculo(x, y, 15);
    corBolinha = 'red';
    y++;
  } 
  if (y === 380) {
    i++ + i++;
    desenhaCirculo(x, y, 15);
    corBolinha = 'green';
    x--;
  }
  if (x === 20) {
    i++ + i++ + i++;
    desenhaCirculo(x, y, 15);
    corBolinha = 'yellow';
    y--;
  }
  if (y === 19) {
    i;
    desenhaCirculo(x, y, 15);
    corBolinha = 'blue';
    x++;
  }
 
}

setInterval(atualizaTela, 10);

