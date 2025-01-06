import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TelaCapturarNome() {
  const [nickname, setNickname] = useState(''); // Estado para capturar o nome
  const navigate = useNavigate();

  const handleStart = () => {
    if (!nickname.trim()) {
      alert('Por favor, insira um nome antes de começar!');
      return;
    }
    localStorage.setItem('nickname', nickname); // Armazena o nome no localStorage
    navigate('/instrucoes'); // Vai para a tela de instruções
  };

  return (
    <div>
      <h1>Bem-vindo ao Math Game!</h1>
      <h2>Digite seu nome:</h2>
      <div className="input-resposta">
        <input
          type="text"
          placeholder="Nome do jogador"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleStart()}
        />
        <button onClick={handleStart}>Iniciar</button>
      </div>
    </div>
  );
}

export default TelaCapturarNome;
