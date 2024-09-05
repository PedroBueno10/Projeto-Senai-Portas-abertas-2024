  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');


  pincel.fillStyle = 'grey';
  pincel.fillRect(0, 0, 600, 400);

  let xAleatorio;
  let yAleatorio;

  var raio = 10;

  var pontos = 0;
  var clicado = true;
  var tempo = 2000;

  function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
  }

  function LimpaTela() {
    pincel.clearRect(0, 0,600, 400);
    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 600, 400);
  }

  function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio + 20, 'red');
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, raio, 'red');
  }
  
  function SorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
  }

  function autualizaTela() {

      if (pontos === 3) {
        tempo = tempo - 500;
  
        clearInterval(start);
        start = setInterval (autualizaTela, tempo);
      }
      if (pontos === 5) {
        tempo = tempo - 500;
  
        clearInterval(start);
        start = setInterval (autualizaTela, tempo);
      }
      if (pontos === 10) {
        tempo = tempo - 200;
  
        clearInterval(start);
        start = setInterval (autualizaTela, tempo);
      }

      if(pontos===20){
        alert('Parabéns você zerou o jogo!');
        tempo = 2000;
        pontos = 0;
        LimpaTela();

        autualizaTela();
        tempo = tempo;
        pontos = 0;
      }
      
  
      LimpaTela();
       xAleatorio = SorteiaPosicao(tela.width);
       yAleatorio = SorteiaPosicao(tela.height);
  
      if(xAleatorio >= 570){
          xAleatorio = 570-25;
       }
       if(yAleatorio >= 370){
          yAleatorio = 370-25;
       }
       if(xAleatorio <= 30){
          xAleatorio = 30+35;  
       }
       if(yAleatorio <= 30){
          yAleatorio = 30+35;
       }

   
   
     //console.log(`${xAleatorio}, ${yAleatorio}`)
    desenhaAlvo(xAleatorio, yAleatorio);
    clicado = false;
  }


  function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    if (x-xAleatorio < raio+18 && y-yAleatorio < raio+18 && x-xAleatorio > -(raio+18) && y-yAleatorio > -(raio+18) ) {
      
      console.log('Acertou miseravi');
      console.log(tempo);

      pontos++
      document.getElementsByTagName('h1')[0].innerHTML = pontos;
      desenhaCirculo(xAleatorio, yAleatorio, 40, 'grey');
    }
  }
  
  tela.onclick = dispara;
  var start = setInterval (autualizaTela, tempo);   
  