const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

// Função para gerar uma questão matemática aleatória
function gerarQuestao() {
  const num1 = Math.floor(Math.random() * 100) + 1;  // Número aleatório entre 1 e 100
  const num2 = Math.floor(Math.random() * 100) + 1;  // Número aleatório entre 1 e 100
  const operador = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];  // Operadores aleatórios

  let question = `${num1} ${operador} ${num2}`;
  let answer;

  // Calcula a resposta dependendo do operador
  switch (operador) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      // Garante que os números sejam menores que 20 para a multiplicação ser mais fácil
      if (num1 <= 20 && num2 <= 20){
        answer = num1 * num2;
      } else{
        // Caso os números sejam muito grandes, gera a questão novamente
        return gerarQuestao();
      }
      break;
    case '/':
      // Garante que a divisão só será feita quando o resultado for inteiro
      if (num1 % num2 === 0) {
        answer = num1 / num2;
      } else {
        // Caso o resultado não seja inteiro, gera a questão novamente
        return gerarQuestao();
      }
      break;
    default:
      answer = null;
  }

  return { question, answer };
}

// Endpoint para obter todas as perguntas geradas
app.get('/questions', (req, res) => {
  const numberOfQuestions = 50;  // Defina quantas questões quer gerar
  const questions = [];

  for (let i = 0; i < numberOfQuestions; i++) {
    questions.push(gerarQuestao());
  }

  res.json(questions);
});

// Endpoint para obter uma pergunta aleatória
app.get('/random-question', (req, res) => {
  const randomQuestion = gerarQuestao();
  res.json(randomQuestion);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
