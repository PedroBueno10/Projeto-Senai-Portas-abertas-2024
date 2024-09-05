    setTimeout(() => {
      console.log('testando')
      let on = true;

      while (on===true) {
        let n1 = parseFloat(prompt('Digite o Primeiro número'));
        var escolha = prompt('Qual operação deseja usar, utilizando sinais!(soma +, subtracao -, multiplicacao *, divisao /)')
        let n2 = parseFloat(prompt('Digite o Segundo número'));
    
        var start 
        var soma = n1 + n2;
        var subtracao = n1 - n2;
        var multiplicação = n1 * n2;
        var divisao = n1/n2;
    
          if (escolha != "+" && escolha != "-" && escolha != "*" && escolha != "/") {
          alert('coloque uma operação válida')
    
        } else if (escolha == '+') {
          alert(`Resultados: soma: ${soma}`)
        } 
          else if (escolha == '-') {
            alert(`Resultados: subtracao: ${subtracao}`)
          }
          else if (escolha == '*') {
            alert(`Resultados: multiplicação: ${multiplicação}`)
          }
          else if (escolha == '/') {
            alert(`Resultados: divisao: ${divisao}`)
        }
      }
    }, 1000*5)