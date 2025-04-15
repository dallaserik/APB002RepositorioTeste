const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Simulação de um banco de dados
let receitas = [];

// Rota para cadastrar receita
app.post('/receitas', (req, res) => {
    const { titulo, descricao, receitatexto, autor, tipo_receita, imagem } = req.body;
    const novaReceita = { id: receitas.length + 1, titulo, descricao, receitatexto, autor, tipo_receita, imagem };
    receitas.push(novaReceita);
    res.status(201).json(novaReceita);
});

// Rota para deletar receita
app.delete('/receitas/:id', (req, res) => {
    const { id } = req.params;
    receitas = receitas.filter(receita => receita.id !== parseInt(id));
    res.status(204).send();
});

// Rota para editar receita
app.put('/receitas/:id', (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, receitatexto, autor, tipo_receita, imagem } = req.body;
    let receita = receitas.find(receita => receita.id === parseInt(id));
    if (receita) {
        receita.titulo = titulo;
        receita.descricao = descricao;
        receita.receitatexto = receitatexto;
        receita.autor = autor;
        receita.tipo_receita = tipo_receita;
        receita.imagem = imagem;
        res.json(receita);
    } else {
        res.status(404).send('Receita não encontrada');
    }
});

// Rota para listar receitas
app.get('/receitas', (req, res) => {
    const { tipo } = req.query;
    const resultado = tipo ? receitas.filter(receita => receita.tipo_receita === tipo) : receitas;
    res.json(resultado);
});

// Rota para obter receita individual
app.get('/receitas/:id', (req, res) => {
    const { id } = req.params;
    const receita = receitas.find(receita => receita.id === parseInt(id));
    if (receita) {
        res.json(receita);
    } else {
        res.status(404).send('Receita não encontrada');
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
