var lagura = 0
var altura = 0
var vidas  = 1
var tempo = 50
var tempoCriaMosquito = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')
 if (nivel == 'normal') {
     tempoCriaMosquito = 1500
     console.log(nivel)
 } else if (nivel=='dificil') {
     tempoCriaMosquito = 1000 
 } else if (nivel == 'chucknorris') {
     tempoCriaMosquito = 600
 }

function ajusteTamanhoPalco() {
    lagura = window.innerWidth
    altura = window.innerHeight
}

var cronometro = setInterval(function() {
     if (tempo < 0) {
         clearInterval(cronometro)
         clearInterval(criaMosquito)
         window.location.href = 'Vitoria.html'
     } else{
        document.getElementById('cronometro').innerHTML = tempo
        tempo --
     }
}, 1000)

var criaMosquito = setInterval( function(){
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas == 3) {
           window.location.href = 'GameOver.html'
        }  else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }

    ajusteTamanhoPalco()
    var posicaoX = Math.floor(Math.random() * lagura) -90
    var posicaoY = Math.floor(Math.random() * altura) -90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAletoriomosquito() + ' ' + ladoAleatorio()
    mosquito.id = 'mosquito'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top  = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
    mosquito.onclick = function () {
        this.remove()
    }
}, tempoCriaMosquito );


function tamanhoAletoriomosquito() {
    var tamanho = Math.floor(Math.random() * 3)
    console.log(tamanho)
    switch (tamanho) {
        case 0:
         return 'mosquito1'
        case 1:
         return 'mosquito2'
        case 2:
         return 'mosquito3'   
    }
} 

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)
    switch(lado) {
        case 1:
        return 'ladoB'
    }
}


