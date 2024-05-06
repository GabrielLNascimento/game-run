let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
let intervaloColisao;
let frase = document.getElementById('res')
let pontos = 0
let intervaloPontos;


function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)

    
}

function comecar() {
    iniciarcontagem(3); // Inicia a contagem regressiva a partir de 3 segundos
    
}

function iniciarcontagem(segundos) {
    const contador = document.getElementById('contador');
    contador.textContent = segundos;

    if (segundos > 0) {
        setTimeout(() => {
            iniciarcontagem(segundos - 1); // Chama a função novamente com o próximo segundo
        }, 1000); // Aguarda 1 segundo (1000 milissegundos)
    } else {
        
        if (quadrado.classList != 'animarQ') {
            quadrado.classList.add('animarQ');
            document.getElementById('res').innerHTML = ' ';
            frase.classList.remove('res');
            document.documentElement.onclick = pular; // Adiciona evento onclick ao html
            contador.textContent = '0'
            
        }
        var inicio = document.getElementById('res')
        inicio.classList.add('res')
        document.getElementById('res').innerHTML = 'Começou!!'
        intervaloPontos = setInterval(atualizarpontos, 1000)
    }
}


var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue('top')
    )
    EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )

       if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
        frase.classList.add('res')
        document.getElementById('res').innerHTML = 
        'Você perdeu... clique no botão (comecar) para recomeçar o jogo'
        quadrado.classList.remove('animarQ')
        pausar()
        }      
        
}, 10)

function atualizarpontos() {
    pontos += 10
    document.getElementById('pontos').textContent = 'Pontos: ' + pontos
}

function pausar(){
    clearInterval(intervaloPontos);
}


 