const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors()); // Adiciona o middleware CORS para permitir requisições de outras origens

const db = new sqlite3.Database(path.resolve(__dirname, 'db.sqlite'));

// Criar a tabela rankings
db.run(`
    CREATE TABLE IF NOT EXISTS rankings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nickname TEXT NOT NULL,
        score INTEGER NOT NULL DEFAULT 0
    )
`);

// Rota para adicionar um jogador ao ranking
app.post('/api/rankings', (req, res) => {
    const { nickname, score } = req.body;
    db.run(
        `INSERT INTO rankings (nickname, score) VALUES (?, ?)`,
        [nickname, score],
        function (err) {
            if (err) {
                res.status(500).json({ error: 'Erro ao salvar pontuação.' });
            } else {
                res.status(201).json({ id: this.lastID, nickname, score });
            }
        }
    );
});

// Rota para obter o ranking
app.get('/api/rankings', (req, res) => {
    db.all(
        `SELECT nickname, score FROM rankings ORDER BY score DESC LIMIT 10`,
        [],
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: 'Erro ao obter ranking.' });
            } else {
                res.json(rows);
            }
        }
    );
});

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
