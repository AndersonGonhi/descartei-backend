const express = require('express');
const router = express.Router();
const PontoColeta = require('../models/pontocoleta');

// Rota para cadastrar um ponto de coleta
router.post('/pontocoleta', async (req, res) => {
    const { nomeEntidade, estado, cidade, numeroContato } = req.body;

    try {
        const novoPonto = new PontoColeta({
            nome:nomeEntidade,
            estado,
            cidade,
            numeroContato
        });

        await novoPonto.save();
        res.status(201).json(novoPonto);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao cadastrar ponto de coleta' });
    }
});

// Rota para listar pontos de coleta por cidade e estado, ou apenas estado
router.get('/pontocoleta', async (req, res) => {
    const { cidade, estado } = req.query;

    try {
        if (!estado) {
            return res.status(400).json({ error: 'Por favor, forneça pelo menos o estado' });
        }

        let filtro = { estado };

        // Se a cidade também for fornecida, adicione ao filtro
        if (cidade) {
            filtro.cidade = cidade;
        }

        // Buscar pontos de coleta com base no filtro
        const pontosColeta = await PontoColeta.find(filtro);

        if (pontosColeta.length === 0) {
            return res.status(404).json({ message: 'Nenhum ponto de coleta encontrado para essa região' });
        }

        res.status(200).json(pontosColeta);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar pontos de coleta' });
    }
});

module.exports = router;
