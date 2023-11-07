let pontuacao = 0;
const pontuacaoElemento = document.getElementById('pontuacao');

function atualizarPontuacao() {
  pontuacao++;
  pontuacaoElemento.innerText = `Pontuação: ${pontuacao}`;
}

// Exemplo de uso
setInterval(atualizarPontuacao, 1000);