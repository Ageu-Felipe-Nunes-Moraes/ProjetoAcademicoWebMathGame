import React, { useEffect, useState } from 'react';

const TelaRelatorios = () => {
  const [rankings, setRankings] = useState([]);

  // Função para obter os rankings do servidor
  const fetchRankings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/rankings');
      const data = await response.json();
      setRankings(data);
    } catch (error) {
      console.error('Erro ao obter rankings:', error);
    }
  };

  // Carregar os rankings assim que o componente for montado
  useEffect(() => {
    fetchRankings();
  }, []);

  return (
    <div id='relatorio'>
      <h1>Relatório</h1>
      <p>Você perdeu! Resultados:</p>

      {/* Exibe a tabela de rankings */}
      <h2>Top 10 no Rankings</h2>
      <table>
        <thead>
          <tr className='resultado-jogador'>
            <th>Nome</th>
            <th>Pontuação</th>
          </tr>
        </thead>
        <tbody>
          {rankings.length === 0 ? (
            <tr>
              <td colSpan="2">Nenhum dado encontrado.</td>
            </tr>
          ) : (
            rankings.map((ranking, index) => (
              <tr className='resultado-jogador' key={index}>
                <td>{ranking.nickname}</td>
                <td>{ranking.score}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Botão para voltar ao jogo */}
      <button onClick={() => window.location.href = '/instrucoes'}>Voltar para o Jogo</button>
    </div>
  );
};

export default TelaRelatorios;
