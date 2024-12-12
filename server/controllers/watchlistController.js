const Watchlist = require('../models/Watchlist');

const getWatchlist = async (req, res) => {
    try {
        const watchlist = await Watchlist.findOne({ user: req.user.id });
        if (!watchlist) return res.status(404).json({ message: 'Watchlist not found' });
        res.json(watchlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addToWatchlist = async (req, res) => {
    const { symbol, price, change, details } = req.body;
    try {
        let watchlist = await Watchlist.findOne({ user: req.user.id });
        if (!watchlist) {
            watchlist = new Watchlist({ user: req.user.id, items: [] });
        }
        if (watchlist.items.some(item => item.symbol === symbol)) {
            return res.status(400).json({ message: 'Symbol already in watchlist' });
        }
        watchlist.items.push({ symbol, price, change, details });
        await watchlist.save();
        res.status(201).json(watchlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeFromWatchlist = async (req, res) => {
    const { symbol } = req.params;
    try {
        const watchlist = await Watchlist.findOne({ user: req.user.id });
        if (!watchlist) return res.status(404).json({ message: 'Watchlist not found' });

        const itemIndex = watchlist.items.findIndex(item => item.symbol === symbol);
        if (itemIndex === -1) return res.status(404).json({ message: 'Symbol not found in watchlist' });

        watchlist.items.splice(itemIndex, 1);
        await watchlist.save();
        res.json(watchlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getWatchlist, addToWatchlist, removeFromWatchlist };
