// const jwt = require('jsonwebtoken');

// exports.authenticateToken = (req, res, next) => {
//   const token = req.cookies['UserToken'];

//   if (!token) {
//     return res.status(401).json({ message: 'Authentication required' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: 'Invalid or expired token' });
//   }
// };



// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   const token = req.cookies['UserToken'];
//   if (!token) return res.status(401).json({ message: 'Not authenticated' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ message: 'Invalid token' });
//     req.user = user; 
//     next();
//   });
// };

// module.exports = { authenticateToken };





// middleware/auth.js

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