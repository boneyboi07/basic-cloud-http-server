require('dotenv').config();

const express = require('express');
const app = express();

// Security
const helmet = require('helmet');
app.use(helmet());

// Static Content
app.use(express.static('public'));

// 404
app.use((req, res, next) => {
    res.sendStatus(404);
});

// 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendStatus(500);
});

// Get Port
const port = process.env.PORT || 80;

// Start Server
app.listen(port, () => {
    console.log("Server Started On Port " + port);
});