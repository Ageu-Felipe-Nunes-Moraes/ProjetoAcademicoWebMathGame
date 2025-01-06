import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MathGame = () => {
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const navigate = useNavigate();

  const nickname = localStorage.getItem('nickname'); // Recupera o nome do jogador do localStorage

  const fetchRandomQuestion = async () => {
    try {
      const response = await fetch('http://localhost:3000/random-question');
      const data = await response.json();
      setRandomQuestion(data);
    } catch (error) {
      console.error('Erro ao buscar uma questão aleatória:', error);
    }
  };

  const saveScore = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/rankings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname, score }),
      });
      if (!response.ok) throw new Error('Erro ao salvar pontuação.');
    } catch (error) {
      console.error(error.message);
    }
  };

  const checkAnswer = () => {
    const answer = parseInt(userAnswer, 10);

    if (userAnswer.trim() === '') {
      alert('Por favor, digite uma resposta.');
      return;
    }

    if (isNaN(answer)) {
      alert('Por favor, insira um número válido.');
      return;
    }

    if (answer === randomQuestion.answer) {
      setScore((prevScore) => prevScore + 255);
      setQuestionNumber((prevNumber) => prevNumber + 1);
      setUserAnswer('');
      fetchRandomQuestion();
    } else {
      saveScore(); // Salva o nome e a pontuação antes de redirecionar
      alert('Resposta incorreta. Você será redirecionado para os relatórios.');
      setQuestionNumber(1); // Reseta a numeração
      navigate('/relatorios'); // Vai para a página de relatórios
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  useEffect(() => { // O useEffect inicia logo que a página abre
    fetchRandomQuestion();
  }, []);

  return (
    <div id="tela-jogo">
      <h1>Math Game</h1>

      {randomQuestion && (
        <div>
          <h2>Questão {questionNumber}</h2>
          <p>{randomQuestion.question}</p>
        </div>
      )}

      <div className="input-resposta">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Digite sua resposta"
          onKeyDown={handleKeyPress}
        />
        <button onClick={checkAnswer}>Verificar Resposta</button>
      </div>

      <div>
        <h3>Pontuação: {score}</h3>
      </div>
    </div>
  );
};

export default MathGame;
