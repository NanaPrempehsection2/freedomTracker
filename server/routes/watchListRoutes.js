const express = require('express');
const { getWatchlist, addToWatchlist, removeFromWatchlist } = require('../controllers/watchlistController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getWatchlist);
router.post('/', authMiddleware, addToWatchlist);
router.delete('/:symbol', authMiddleware, removeFromWatchlist);

module.exports = router;
