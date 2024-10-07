let currentQuestionIndex = 0;

// Função para embaralhar as perguntas
function embaralharPerguntas(perguntas) {
    for (let i = perguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
    }
}

// Embaralha as perguntas ao iniciar
embaralharPerguntas(perguntas);

function mostrarPergunta() {
    const perguntaElement = document.getElementById('pergunta');
    const opcoesElement = document.getElementById('opcoes');
    const professorNome = document.getElementById('professor-nome');
    const professorFoto = document.getElementById('professor-foto');
    const nextButton = document.getElementById('next-button');
    const resultadoElement = document.getElementById('resultado');

    // Limpar mensagem de resultado
    resultadoElement.style.display = 'none';
    resultadoElement.innerHTML = '';

    const currentQuestion = perguntas[currentQuestionIndex];
    
    // Exibir informações do professor
    professorNome.innerText = currentQuestion.professor;
    professorFoto.src = currentQuestion.foto;

    // Exibir enunciado da pergunta
    perguntaElement.innerHTML = currentQuestion.enunciado;

    // Limpar opções anteriores
    opcoesElement.innerHTML = '';

    // Exibir opções
    currentQuestion.opcoes.forEach((opcao, index) => {
        const button = document.createElement('button');
        button.innerText = opcao;
        button.classList.add('opcao');
        button.onclick = () => verificarResposta(index);
        opcoesElement.appendChild(button);
    });

    // Exibir o botão "Próxima Pergunta" escondido
    nextButton.style.display = 'none';
}

function verificarResposta(index) {
    const currentQuestion = perguntas[currentQuestionIndex];
    const resultadoElement = document.getElementById('resultado');

    if (index === currentQuestion.respostaCorreta) {
        resultadoElement.innerText = 'Resposta correta!';
        resultadoElement.classList.add('correto');
    } else {
        resultadoElement.innerText = 'Resposta errada. Tente novamente.';
        resultadoElement.classList.add('erro');
    }

    resultadoElement.style.display = 'block'; // Mostrar resultado

    const nextButton = document.getElementById('next-button');
    nextButton.style.display = 'block';
}

document.getElementById('next-button').onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < perguntas.length) {
        mostrarPergunta();
    } else {
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.innerText = 'Fim das perguntas!';
        resultadoElement.classList.remove('correto', 'erro'); // Remove classes de resultado anterior
        resultadoElement.style.display = 'block';
        document.getElementById('opcoes').style.display = 'none'; // Esconde opções
        document.getElementById('pergunta').style.display = 'none'; // Esconde pergunta
        document.getElementById('next-button').style.display = 'none'; // Esconde botão
    }
};

// Carregar a primeira pergunta
mostrarPergunta();
