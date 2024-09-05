const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

const raio = 15;
const velocidade = 3;

const telaLargura = 600;
const telaAltura = 400;

let x = 20;
let y = 20;
let direcao = 'direita';

function limpaTela(){
    pincel.clearRect(0, 0, telaLargura, telaAltura);
}

function atualizaTela() {
  limpaTela()
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
  
   if (direcao === 'direita') {
    pincel.fillStyle = 'blue';
  } else if (direcao === 'baixo') {
    pincel.fillStyle = 'yellow';
  } else if (direcao === 'esquerda') {
    pincel.fillStyle = 'green';
  } else if (direcao === 'cima') {
    pincel.fillStyle = 'red';
  }
  
  if (direcao === 'direita') {
    if (x + raio + velocidade <= telaLargura) {
      x += velocidade;
    } else {
      direcao = 'baixo';
      y += velocidade;
    }
  } else if (direcao === 'baixo') {
    if (y + raio + velocidade <= telaAltura) {
      y += velocidade;
    } else {
      direcao = 'esquerda';
      x -= velocidade;
    }
  } else if (direcao === 'esquerda') {
    if (x - raio - velocidade >= 0) {
      x -= velocidade;
    } else {
      direcao = 'cima';
      y -= velocidade;
    }
  } else if (direcao === 'cima') {
    if (y - raio - velocidade >= 0) {
      y -= velocidade;
    } else {
      direcao = 'direita';
      x += velocidade;
    }
  }

  requestAnimationFrame(atualizaTela);
}

atualizaTela();