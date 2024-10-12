const express = require('express');
const connectDB = require('./config/db');
const pontoColetaRoutes = require('./routes/pontocoleta');
const cors = require('cors');

const app = express();

// Conectar ao banco de dados
connectDB();

app.use(cors());

// Middlewares
app.use(express.json());

// Rotas
app.use(pontoColetaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
