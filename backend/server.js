require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const port = 3003;
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

// const partnerRoutes = require('./routes/partnersRoutes');
// const preferenceRoutes = require('./routes/preferenceRoutes');
// const groupRoutes = require('./routes/groupRoutes');
const partnerRoutes = require('./routes/partnersRoutes');
const requestRoutes = require('./routes/requestRoutes');
const profileRoutes = require('./routes/profileRoutes');
const partRoutes = require('./routes/rr');

const connectDB = require('./config/db');

connectDB(); 
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
  methods: ['GET', 'POST','PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
// In your backend server
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
app.use('/api/partners', partRoutes);

// app.use('/api/preferences', preferenceRoutes);
// app.use('/api/groups/', groupRoutes);


// app.use("/api/partners", partnerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
