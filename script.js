const questions = [
    { question: "Qual é a capital da França?", answer: "Paris", professor: "Professor Carlos", photo: "prof_carlos.jpg" },
    { question: "Quantos estados tem o Brasil?", answer: "26", professor: "Professora Ana", photo: "https://fazendoanossafesta.com.br/wp-content/uploads/2022/09/Flork-Professora-png.png" },
    { question: "Quem descobriu o Brasil?", answer: "Pedro Álvares Cabral", professor: "Professor João", photo: "prof_joao.jpg" }
];

let scoreTeamA = 0;
let scoreTeamB = 0;

function loadRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];

    document.getElementById('question-text').innerText = selectedQuestion.question;
    document.getElementById('professor-name').innerText = selectedQuestion.professor;
    document.getElementById('professor-photo').src = selectedQuestion.photo;
    
    return selectedQuestion;
}

let currentQuestion = loadRandomQuestion();

document.getElementById('submit-btn').addEventListener('click', () => {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = currentQuestion.answer.trim().toLowerCase();
    const selectedTeam = document.getElementById('team-select').value;
    const resultMessage = document.getElementById('result-message');

    if (userAnswer === correctAnswer) {
        resultMessage.innerText = 'Resposta correta!';
        resultMessage.style.color = '#28a745';  // Verde para resposta correta
        if (selectedTeam === 'A') {
            scoreTeamA++;
            document.getElementById('score-team-a').innerText = scoreTeamA;
        } else {
            scoreTeamB++;
            document.getElementById('score-team-b').innerText = scoreTeamB;
        }
    } else {
        resultMessage.innerText = `Resposta incorreta! A resposta correta era: ${currentQuestion.answer}`;
        resultMessage.style.color = '#d9534f';  // Vermelho para resposta incorreta
    }

    document.getElementById('answer-input').value = '';
    
    currentQuestion = loadRandomQuestion();
});
