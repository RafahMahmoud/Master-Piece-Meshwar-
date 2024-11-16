const jwt = require('jsonwebtoken');
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.UserToken;
    console.log('Token from cookies:', token); 

    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    console.error('Token verification error:', error); 
    res.status(401).json({ message: 'Token is not valid' });
  }
};
module.exports = { authenticateToken };