const router = require('./routes.js'); // <-- Ajoute l'extension .js
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(router);

// Start App
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});