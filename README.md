# Math Game - README

## Descrição do Projeto
Este é um jogo de operações matemáticas criado utilizando React no frontend, Node.js para o backend, SQLite como banco de dados, e uma API personalizada. O objetivo é desafiar os jogadores com operações matemáticas aleatórias, onde eles devem calcular e responder corretamente.

---

## Funcionalidades
- **Captura do Nome do Jogador:** Tela inicial para o jogador inserir seu nome antes de iniciar o jogo.
- **Instruções do Jogo:** Explicações claras sobre como jogar.
- **Tela Principal do Jogo:** Apresenta diversas operações matemática aleatória para o jogador resolver.
- **Relatórios Gerais:** Mostra o desempenho do jogador a pontuação adquirida.

---

## Tecnologias Utilizadas
### Frontend:
- **React**: Criação de uma interface dinâmica e responsiva.

### Backend:
- **Node.js**: Para gerenciar a lógica do servidor e interação com a API.
- **Express**: Framework para construir a API.

### Banco de Dados:
- **SQLite**: Armazena os dados do jogador e relatórios do jogo.

### Outros:
- **API Personalizada:** Gera e valida as operações matemáticas.

---

## Estrutura do Projeto
```
ProjetoFinalWEB/
|-- jogo-educativo-math-react-client/
|   |-- src/
|       |-- componentes/
|       |-- index_js/
|       |-- style/
|       |-- app.js
|   |-- README.md
|-- jogo-educativo-math-server/
|   |-- database/
|       |-- db.sqlite
|       |-- init.js
|   |-- index.js
```

---

## Instruções para Executar o Projeto
### Requisitos:
- Node.js instalado
- SQLite3 instalado

### Backend
1. Navegue até a pasta `jogo-educativo-math-server/database`.
2. Inicie o servidor do banco de dados:
   ```bash
   node init.js
   ```
3. Navegue até a pasta `jogo-educativo-math-server`
4. Inicie o servidor da API:

    ```bash
    node index.js
    ```  


### Frontend:
1. Navegue até a pasta `jogo-educativo-math-react-client/`.
2. Instale as dependências executando:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
---

## Uso do Jogo
1. Abra o navegador no link fornecido pelo terminal ao iniciar o frontend.
2. Insira o nome do jogador na tela inicial.
3. Leia as instruções do jogo.
4. Resolva as operações matemáticas apresentadas.
5. Confira seu desempenho na tela de relatórios gerais.

---

## Melhorias Futuras
- **Níveis de dificuldade:** Incrementar a dificuldade das operações matemáticas.
- **Modo multiplayer:** Adicionar competição entre jogadores.
- **Temporizador:** Desafiar o jogador com limite de tempo para cada resposta.

---

## Autor
Projeto criado por Ageu Felipe Nunes Moraes.

---
