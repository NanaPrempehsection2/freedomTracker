const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        symbol: { type: String, required: true },
        price: { type: Number },
        change: { type: String },
        details: { type: String },
        lastUpdated: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Watchlist', watchlistSchema);
