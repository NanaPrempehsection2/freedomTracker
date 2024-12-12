const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoute'); 
const watchListRoutes = require('./routes/watchListRoutes'); 

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000',}));

app.use('/auth', userRoutes);
app.use('/api/watchList', watchListRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
