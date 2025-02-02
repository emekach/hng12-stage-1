require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const globalError = require('./utils/globalError');
const limiter = require('./utils/rateLimiter');
const classifyNumber = require('./routes/classifyNumber');

const app = express();

app.use(cors());
app.use(limiter);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '15kb' }));

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.use('/api/classify-number', classifyNumber);
app.all('*', (req, res) => {
  res.status(404).json({
    message: 'route not found',
  });
});
app.use(globalError);
module.exports = app;
