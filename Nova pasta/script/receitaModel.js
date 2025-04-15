const pool = require('../config/db');

const Receita = {
    create: async (receita) => {
        const { titulo, descricao, receitatexto, autor, tipo_receita, imagem } = receita;
        const result = await pool.query(
            'INSERT INTO receitas (titulo, descricao, receitatexto, autor, tipo_receita, imagem) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [titulo, descricao, receitatexto, autor, tipo_receita, imagem]
        );
        return result.rows[0];
    },
    delete: async (id) => {
        await pool.query('DELETE FROM receitas WHERE id = $1', [id]);
    },
    update: async (id, receita) => {
        const { titulo, descricao, receitatexto, autor, tipo_receita, imagem } = receita;
        const result = await pool.query(
            'UPDATE receitas SET titulo = $1, descricao = $2, receitatexto = $3, autor = $4, tipo_receita = $5, imagem = $6 WHERE id = $7 RETURNING *',
            [titulo, descricao, receitatexto, autor, tipo_receita, imagem, id]
        );
        return result.rows[0];
    },
    getAll: async (tipo) => {
        const query = tipo ? 'SELECT * FROM receitas WHERE tipo_receita = $1' : 'SELECT * FROM receitas';
        const result = await pool.query(query, tipo ? [tipo] : []);
        return result.rows;
    },
    getById: async (id) => {
        const result = await pool.query('SELECT * FROM receitas WHERE id = $1', [id]);
        return result.rows[0];
    }
};

module.exports = Receita;