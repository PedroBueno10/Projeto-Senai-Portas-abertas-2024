var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')
var raio = 15
var x = 20;
var y = 20;

pincel.fillStyle = 'lightgray'
pincel.fillRect(0,0,600,400)

function desenhaCirculo(x,y,raio) {
    setTimeout(() => {
        limparTela()

        pincel.fillStyle = 'blue'
        pincel.beginPath()
        pincel.arc(x,y,raio,0,Math.PI*2)
        pincel.fill()
    }, 10);
}   

function limparTela() {
    pincel.clearRect(0,0,600,400)
}
  
    for(x; x <= 600-raio-5; x++){
        desenhaCirculo(x,y,raio)
    }

    for(y; y <= 400-raio-5; y++){
        desenhaCirculo(x,y,raio)
    }

    for(x;x >= 20; x--){
        desenhaCirculo(x,y,raio)
    }
    for(y; y >= 20; y--){
        desenhaCirculo(x,y,raio)
    }


setInterval(atualizaTela, 10);