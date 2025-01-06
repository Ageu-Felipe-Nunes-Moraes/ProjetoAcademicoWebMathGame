import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe o Router
import TelaCapturarNome from './componentes/TelaCapturarNome'; // Tela para capturar nome do jogador
import TelaInstrucoes from './componentes/TelaInstrucoes'; // Tela com as instruções
import TelaJogo from './componentes/TelaJogo'; // Tela principal do jogo
import TelaRelatorios from './componentes/TelaRelatorios'; // Tela para relatórios gerais

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TelaCapturarNome />} />
          <Route path="/instrucoes" element={<TelaInstrucoes />} />
          <Route path="/jogo" element={<TelaJogo />} />
          <Route path="/relatorios" element={<TelaRelatorios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
