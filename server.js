const express = require('express');
const connectDB = require('./config/db');
const pontoColetaRoutes = require('./routes/pontocoleta');

const app = express();

// Conectar ao banco de dados
connectDB();

// Middlewares
app.use(express.json());

// Rotas
app.use(pontoColetaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
