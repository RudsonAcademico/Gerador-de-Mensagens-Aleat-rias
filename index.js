const express = require("express");
const app = express();
const port = 3000;
const frase_e_piadas = [
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Não tenha medo de errar, tenha medo de não tentar.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "A persistência realiza o impossível.",
    "Cada novo dia é uma nova oportunidade para ser melhor.",
    "Seja como um próton. Sempre seja positivo.",
    "Por que o desenvolvedor faliu? Porque ele usou todo o seu cache.",
    'Meus professores me disseram que eu nunca seria muito porque procrastino muito. Eu disse a eles: “Esperem para ver!”',
    "Minha memória ficou tão ruim que realmente me fez perder o emprego. Ainda estou empregado. Só não consigo lembrar onde.",
    "Como chamar um cão mágico? Um Labracadabrador.",
    "Há quem diga que Mc Kevin foi melhor que Michael Jackson mas, pelo menos Michael Jackson ia até o chão e voltava",
    "O que as pernas de um paraplégico tem em comum com o comunismo? Ambos não funcionam",
    "Acabei de encontrar uma barata gay, ela estava saindo do armário"
];

app.get("/quote", (req, res) => {
    const frase = frase_e_piadas[Math.floor(Math.random() * frase_e_piadas.length)];
    res.json({ mensagem: frase });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/quote`);
});
