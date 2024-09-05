const tela = document.querySelector('canvas')
const ctx = tela.getContext('2d')
const timer = ms => new Promise(res => setTimeout(res, ms))

let x = 20;
let y = 20;
let raio = 15;

let corBolinha;
let direcao;

async function start() {
    for(x; x <= 600-raio-5; x++){
      await timer(1)
      limparTela()
    
      corBolinha = 'red'
      direcao = 'direita'
    
      desenhaBolinha(x,y,raio,'red')
    }
    for(y; y <= 400-raio-5; y++){
      await timer(1)
      limparTela()
    
      corBolinha = 'blue'
      direcao = 'baixo'
    
      desenhaBolinha(x,y,raio,'blue')
    }
    for(x; x >= 20; x--){
      await timer(1)
      limparTela()
    
      corBolinha = 'green'
      direcao = 'esquerda'

      desenhaBolinha(x,y,raio,'green')
    }
    for(y; y >= 20; y--){
      await timer(1)
      limparTela()
    
      corBolinha = 'yellow'
      direcao = 'direita'
    
      desenhaBolinha(x,y,raio,'yellow')
    }
}

    start()

function desenhaBolinha(x,y,raio,cor){
  ctx.fillStyle = cor
  ctx.beginPath()
  ctx.arc(x,y,raio,0,Math.PI*2)
  ctx.fill()
}

function limparTela(){
  console.log('aaaa')
  ctx.clearRect(0,0,600,400)
}

/*
  for(x = 20; x <= 580; x++) {
    setInterval(limpaTela,10)
    CorBolinha;
    desenhaCirculo(x, 20, 15, 0, 2 * 3.14)
   }
   for(y = 20; y <= 580; y++) {
    setInterval(limpaTela,10)
    CorBolinha;
    desenhaCirculo(580, y, 15, 0, 2 * 3.14)
   }
   for(x = 20; x <= 580; x--) {
    setInterval(limpaTela,10)
    CorBolinha;
    desenhaCirculo(x, 380, 15, 0, 2 * 3.14)
   }
   for(y = 20; y <= 580; y--) {
    setInterval(limpaTela,10)
    CorBolinha;
    desenhaCirculo(20, y, 15, 0, 2 * 3.14)
   }
   */