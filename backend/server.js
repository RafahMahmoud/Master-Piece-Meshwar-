require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3003;
const app = express();

// Routes
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const partnerRoutes = require('./routes/partnersRoutes');
const requestRoutes = require('./routes/requestRoutes');
const profileRoutes = require('./routes/profileRoutes');
const planRoutes = require('./routes/outingPlan');
const reviewRoutes = require('./routes/reviewRoutes')

const connectDB = require('./config/db');
connectDB();

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

app.use('/uploads', express.static('uploads'));

const User = require('./models/users');

app.get('/api/users/search', async (req, res) => {
  const { term } = req.query;
  try {
    const users = await User.find({
      $or: [
        { fullName: { $regex: term, $options: 'i' } },
        { email: { $regex: term, $options: 'i' } }
      ]
    }).limit(10);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error searching users', error: error.message });
  }
});


app.use("/api/auth", authRoutes);
app.use("/api/info", profileRoutes);
app.use('/api', requestRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/outing', planRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/reviews',reviewRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
