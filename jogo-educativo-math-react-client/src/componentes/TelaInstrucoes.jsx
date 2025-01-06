import React from 'react';
import { useNavigate } from 'react-router-dom';

function TelaInstrucoes() {
    const navigate = useNavigate();

    return (
      <div>
          <div className="instrucoes">
              <h2>Instruções do Jogo:</h2>
              <ol>
                  <li>Resolva as equações matemáticas o mais rápido possível.</li>
                  <li>Você terá 10 segundos para responder cada questão.</li>
                  <li>Se o tempo acabar, você perderá a questão.</li>
              </ol>
          </div>
          <button onClick={() => navigate('/jogo')}>Começar Jogo</button>
      </div>
    );
}

export default TelaInstrucoes;
