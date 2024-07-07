let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirNomeInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto!');
    exibirTextoNaTela('p', 'escolha um numero de 0 a 10');
}

exibirNomeInicial();
exibirTextoNaTela('h1', 'Jogo do numero secreto!');
exibirTextoNaTela('p', 'escolha um numero de 0 a 10');

function verificarChute() {
       let chute = document.querySelector('input').value;
       
       if (chute == numeroSecreto){
            exibirTextoNaTela('h1','ACERTOU!!');
            let palavraTentativa = tentativas > 1 ? ' tentativas ' : ' tentativa';
            let mensagemTentativas = `Você conseguiu descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
            
            
       }
       else {
           if(chute > numeroSecreto){
            exibirTextoNaTela('p', ' o numero secreto é menor ');
           }
           else{
            exibirTextoNaTela('p', ' o numero secreto é maior');
           }
           tentativas++;
           limparCampo();
        exibirTextoNaTela('h1', 'ERROU!!');
        
       }
}
   
reiniciarJogo();
function gerarNumeroAleatorio(){

    let numeroEscolhido =  parseInt(Math.random()*numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirNomeInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}