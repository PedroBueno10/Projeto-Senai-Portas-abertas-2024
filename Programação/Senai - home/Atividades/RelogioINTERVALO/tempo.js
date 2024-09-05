const horas = document.getElementsByClassName('horas')
const minutos = document.getElementsByClassName('minutos')
const segundos = document.getElementsByClassName('segundos')
const titulo = document.getElementsByClassName('relogio-intervalo-titulo')


const tituloFinal = document.getElementsByClassName('relogio-final-titulo')
const horasFinal = document.getElementsByClassName('horas-final')
const minutosFinal = document.getElementsByClassName('minutos-final')
const segundosFinal = document.getElementsByClassName('segundos-final')


const relogio = setInterval(() => {
    let data = new Date();
    

    let hr = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    let msInicio = data.getHours()*3600000+data.getMinutes()*60000+data.getSeconds()*1000; //Quantas horas se passaram desde a meia noite  (EM MS)

    
    //let rand = Math.round(Math.random() * 12);

    //Checar se não é segunda ou quarta, remover o relogio final e colocar a mensagem que hoje nao é ida de senai

    if(hr < 10){
        // Mostrar o tempo que falta pro cafe
        titulo[0].innerText = 'HORARIO PARA O CAFÉ';

        // 36000000 -> 10 horas, 0 minutos e 0 segundos
        let cafeFinal = 36000000-(data.getHours()*3600000+data.getMinutes()*60000+data.getSeconds()*1000)
        let cafeFormat = new Date(data.getTime()-msInicio + cafeFinal)

        let hrCafe = cafeFormat.getHours()
        let minCafe = cafeFormat.getMinutes()
        let segCafe = cafeFormat.getSeconds()


        if(hrCafe < 10) hrCafe = '0' + hrCafe;
        if(minCafe < 10) minCafe = '0' + minCafe;
        if(segCafe < 10) segCafe = '0' + segCafe;

        horas[0].innerText = hrCafe;
        minutos[0].innerText = minCafe;
        segundos[0].innerText = segCafe;
    }
    console.log(hr)
    console.log(hr < 12 && hr > 10)

    if(hr <= 12 && hr >= 10){
        // Mostrar o tempo que falta pro almoço
        titulo[0].innerHTML = 'HORARIO PARA O ALMOÇO';

        // 45000000 -> 12 horas, 30 minutos e 0 segundos
        let almocoFinal = 45000000-(data.getHours()*3600000+data.getMinutes()*60000+data.getSeconds()*1000)
        let almocoFormat = new Date(data.getTime()-msInicio + almocoFinal)
        

        let hrAlmoco = almocoFormat.getHours()
        let minAlmoco = almocoFormat.getMinutes()
        let segAlmoco = almocoFormat.getSeconds()


        if(hrAlmoco < 10) hrAlmoco = '0' + hrAlmoco;
        if(minAlmoco < 10) minAlmoco = '0' + minAlmoco;
        if(segAlmoco < 10) segAlmoco = '0' + segAlmoco;

        horas[0].innerText = hrAlmoco;
        minutos[0].innerText = minAlmoco;
        segundos[0].innerText = segAlmoco;
    }
    if(hr <= 15 && hr > 12 && hr > 10){
        // Mostrar o tempo que falta pro CAFE DA TARDE
        titulo[0].innerHTML = 'HORARIO PARA O CAFÉ DA TARDE';

        // 56400000 -> 15 horas, 40 minutos e 0 segundos  
        let cafeTardeFinal = 56400000-(data.getHours()*3600000+data.getMinutes()*60000+data.getSeconds()*1000)
        let cafeTardeFormat = new Date(data.getTime()-msInicio + cafeTardeFinal)

        let hrCafeTarde = cafeTardeFormat.getHours()
        let minCafeTarde = cafeTardeFormat.getMinutes()
        let segCafeTarde = cafeTardeFormat.getSeconds()


        if(hrCafeTarde < 10) hrCafeTarde = '0' + hrCafeTarde;
        if(minCafeTarde < 10) minCafeTarde = '0' + minCafeTarde;
        if(segCafeTarde < 10) segCafeTarde = '0' + segCafeTarde;

        horas[0].innerText = hrCafeTarde;
        minutos[0].innerText = minCafeTarde;
        segundos[0].innerText = segCafeTarde;
    }
    if(hr > 17 && min<=30){
        switch (data.toString().split(" ")[0]){
            case 'Sat':
                titulo[0].innerHTML = 'HOJE NÃO É DIA DE SENAI, VOLTE NOVAMENTE SEGUNDA :)';
                break;
            case 'Sun':
                titulo[0].innerHTML = 'HOJE NÃO É DIA DE SENAI, VOLTE NOVAMENTE AMANHÃ :)';
                break;
            case 'Mon':
                titulo[0].innerHTML = 'O DIA JA ACABOU, ENTRE NOVAMENTE QUARTA :)';
                break;
            case 'Tue':
                titulo[0].innerHTML = 'HOJE NÃO É DIA DE SENAI, ENTRE NOVAMENTE AMANHÃ :)';
                break;
            case 'Wed': 
                titulo[0].innerHTML = 'O DIA JA ACABOU, VOLTE NOVAMENTE SEGUNDA :)';
                break;
            case 'Thu':
                titulo[0].innerHTML = 'HOJE NÃO É DIA DE SENAI, VOLTE NOVAMENTE SEGUNDA :)';
                break;
            case 'Fri':
                titulo[0].innerHTML = 'HOJE NÃO É DIA DE SENAI, VOLTE NOVAMENTE SEGUNDA :)';
        }  
        
    }

    

    // 63000000 -> 17 horas, 30 minutos e 0 segundos
    switch (data.toString().split(" ")[0]){
        case 'Wed': 
        case 'Mon':
            if(hr >= 17 && min<=30){
             let conteudo = document.getElementsByClassName('conteudo')
             // Colocar uma foto de comemoração pq acabou a aula um meme sla

             conteudo[0].remove()
             //clearInterval(relogio)
            }
            let msFinal = 63000000-(data.getHours()*3600000+data.getMinutes()*60000+data.getSeconds()*1000) //Quantas horas faltam para 17 horas, 30 minutos e 0 segundos (EM MS)
    
            let dateFormat = new Date(data.getTime()-msInicio + msFinal) // 
        
            let hrFinal = dateFormat.getHours()  
            let minFinal = dateFormat.getMinutes()
            let segFinal = dateFormat.getSeconds()
            
            if(hrFinal < 10) hrFinal = '0' + hrFinal;
            if(minFinal < 10) minFinal = '0' + minFinal;
            if(segFinal < 10) segFinal = '0' + segFinal;
        
            horasFinal[0].innerText = hrFinal
            minutosFinal[0].innerText = minFinal
            segundosFinal[0].innerText = segFinal
            break;
        default:
            /*
            let conteudo = document.getElementsByClassName('conteudo')

            conteudo[0].remove()
           clearInterval(relogio)
           */
            break;
    }  

    

    
  
});

