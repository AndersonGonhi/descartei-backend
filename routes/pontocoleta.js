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

module.exports = router;
