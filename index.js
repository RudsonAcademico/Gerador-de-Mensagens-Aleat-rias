const express = require("express");
const app = express();
const port = 3000;

// Array de frases motivacionais
const frases = [
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Não tenha medo de errar, tenha medo de não tentar.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "A persistência realiza o impossível.",
    "Cada novo dia é uma nova oportunidade para ser melhor."
];

// Rota para obter uma frase aleatória
app.get("/quote", (req, res) => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    res.json({ mensagem: fraseAleatoria });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
