    let listaDeNumerosSorteados = [];
    let numeroLimite = 10;
    let numeroAleatorio = gerarNumeroAleatorio()
    let tentativas= 1;
    function exibirTextoNaTela(tag, texto) {let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
responsiveVoice.speak (texto, 'Brazilian Portuguese Female' , {rate: 1.2});
}


function exibirMensagemInicial() { exibirTextoNaTela ('h1', 'jogo do número secreto');
    exibirTextoNaTela ('p', 'escolha um número entre 1 a 10'); 

    
} exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        numeroAleatorio = gerarNumeroAleatorio(); // Atualiza o número aleatório
        return true;
    } else if (chute > numeroAleatorio) {
        exibirTextoNaTela("p", 'O número secreto é menor');
        tentativas++;
        limparCampo();
        return false;
    } else {
        exibirTextoNaTela('p', 'O número é maior');
        tentativas++;
        limparCampo();
        return false;
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadedeElementosnaLista = listaDeNumerosSorteados.length; if
    (quantidadedeElementosnaLista == numeroLimite) {listaDeNumerosSorteados = []}
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio() 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

         
        function limparCampo() { chute = document.querySelector
        ('input'); chute.value = ''; }
        
        function reiniciarJogo() {
            numeroAleatorio = gerarNumeroAleatorio();
            limparCampo();
            tentativas = 1;
            exibirMensagemInicial();
            document.getElementById('reiniciar').setAttribute('disabled', true);
        }