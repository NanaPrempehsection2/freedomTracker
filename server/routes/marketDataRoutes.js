const express = require('express');
const { fetchMarketData } = require('../controllers/marketDataController');
const router = express.Router();

router.get('/', fetchMarketData);

module.exports = router;
