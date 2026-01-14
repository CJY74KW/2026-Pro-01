// backend/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/basic.html'));
});

// frontend needs the API key for Kakao Maps
app.get('/api/config', (req, res) => {
    res.json({
        kakaoApiKey: process.env.KAKAO_MAP_API_KEY
    });
});

// Run the server
app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});