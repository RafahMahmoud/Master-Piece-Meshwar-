// const express = require('express');
// const router = express.Router();
// const User = require('../models/users');
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// require("dotenv").config();
// // router.post('/Allusers', async (req, res) => {
// //   const {
// //     fullName,
// //     email,
// //     password,
// //     profilePic,
// //     gender,
// //     dateOfBirth,
// //     phoneNumber,
// //     bio,
// //     isActive,
// //     isDeleted,
// //     socialLinks = {},
// //     wishlist = [],
// //     friendsList = [],
// //     review = [],
// //     recentView = []
// //   } = req.body;

// //   // Validate required fields
// //   if (!fullName || !email || !password || !gender || !dateOfBirth || !phoneNumber) {
// //     return res.status(400).json({ message: "Username, email, and password are required" });
// //   }

// //   // Create a new User instance
// //   const newUser = new User({
// //     fullName,
// //     email,
// //     password,
// //     profilePic,
// //     gender,
// //     dateOfBirth,
// //     phoneNumber,
// //     bio,
// //     isActive,
// //     isDeleted,
// //     socialLinks,
// //     wishlist,
// //     friendsList,
// //     review,
// //     recentView
// //   });

// //   try {
// //     // Save the user to the database
// //     const savedUser = await newUser.save();
// //     res.status(201).json(savedUser);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // });

// // module.exports = router;

//  // -----------------------------------------------------------------------

// // exports.registerUser = async (req, res) => {
// //     try {
// //       const { username, email, password, confirmPassword } = req.body;
  
// //       if (password !== confirmPassword) {
// //         return res.status(400).json({ message: "Passwords do not match" });
// //       }
  
// //       const salt = await bcrypt.genSalt(10);
// //       const hashedPassword = await bcrypt.hash(password, salt);
  
// //       const newUser = new User({
// //         username,
// //         email,
// //         password: hashedPassword,
// //       });
  
// //       await newUser.save();
  
// //       const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
// //         expiresIn: "1h",
// //       });
  
// //       res.cookie("token", token, {
// //         httpOnly: true,
// //         secure: process.env.NODE_ENV === "production",
// //         sameSite: "Lax",
// //       });
  
// //       res.cookie("userId", newUser._id.toString(), {  // Ensure userId is a string
// //         httpOnly: true,
// //         secure: process.env.NODE_ENV === "production",
// //         sameSite: "Lax",
// //       });
      
// //       res
// //         .status(201)
// //         .json({ message: "User registered successfully (First Method)!" });
// //     } catch (error) {
// //       res
// //         .status(500)
// //         .send("Error registering user (First Method): " + error.message);
// //     }
// //   };
// exports.registerUser = async (req, res) => {
//     try {
//         const { fullName, email, password, confirmPassword, gender, dateOfBirth, phoneNumber} = req.body;

//         if (password !== confirmPassword) {
//             return res.status(400).json({ message: "Passwords do not match" });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = new User({
//             fullName,
//             email,
//             password: hashedPassword,
//             gender,
//             dateOfBirth,
//             phoneNumber
//         });

//         await newUser.save();

//         const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//             expiresIn: "1h",
//         });

//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "Lax",
//         });

//         res.cookie("userId", newUser._id.toString(), { // Ensure userId is a string
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "Lax",
//         });

//         res.status(201).json({ message: "User registered successfully!" });
//     } catch (error) {
//         res.status(500).send("Error registering user: " + error.message);
//     }
// };

//  // -----------------------------------------------------------------------

//   exports.loginUser = async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       const user = await User.findOne({
//         email,
//         isDeleted: false,
//         isActive: true,
//       });
//       if (!user) {
//         return res
//           .status(400)
//           .json({
//             message:
//               "Invalid email or password, or account is inactive or deleted",
//           });
//       }
  
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ message: "Invalid email or password" });
//       }
  
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: "1h",
//       });
  
//       res.cookie("token", token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: "Lax",
//       });
  
//       res.status(200).json({ message: "User logged in successfully!" });
//     } catch (error) {
//       res.status(500).send("Error logging in: " + error.message);
//     }
//   };
  
// //   // -----------------------------------------------------------------------


// const User = require('../models/users');
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// require("dotenv").config();

// exports.registerUser = async (req, res) => {
//     try {
//         const { fullName, email, password, confirmPassword, gender, dateOfBirth, phoneNumber } = req.body;

//         if (password !== confirmPassword) {
//             return res.status(400).json({ message: "Passwords do not match" });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = new User({
//             fullName,
//             email,
//             password: hashedPassword,
//             gender,
//             dateOfBirth,
//             phoneNumber
//         });

//         await newUser.save();

//         const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//             expiresIn: "1h",
//         });

//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "Lax",
//         });

//         res.cookie("userId", newUser._id.toString(), { // Ensure userId is a string
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "Lax",
//         });

//         res.status(201).json({ message: "User registered successfully!" });
//     } catch (error) {
//         res.status(500).send("Error registering user: " + error.message);
//     }
// };

// exports.loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({
//             email,
//             isDeleted: false,
//             isActive: true,
//         });
//         if (!user) {
//             return res
//                 .status(400)
//                 .json({
//                     message:
//                         "Invalid email or password, or account is inactive or deleted",
//                 });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid email or password" });
//         }

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//             expiresIn: "1h",
//         });

//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "Lax",
//         });

//         res.status(200).json({ message: "User logged in successfully!" });
//     } catch (error) {
//         res.status(500).send("Error logging in: " + error.message);
//     }
// };









// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/users');

// exports.signup = async (req, res) => {
//   try {
//     const { fullName, email, password, gender, dateOfBirth, phoneNumber } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ fullName, email, password: hashedPassword, gender, dateOfBirth, phoneNumber });
//     await newUser.save();
//     console.log(newUser);
//       // Create JWT token
//       const tokenPayload = { 
//         id: newUser._id ,
//         email: newUser.email 
//     };
//     const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Set token as HTTP-only cookie
//     res.cookie('UserToken', token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
//         sameSite: 'strict', // Protect against CSRF
//         maxAge: 3600000 // 1 hour
//     });
//     res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering user', error: error.message });
//   }
// };


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

exports.signup = async (req, res) => {
  try {
    const { fullName, email, password, gender, dateOfBirth } = req.body;

   
    if (!fullName || !email || !password || !gender || !dateOfBirth ) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullName, email, password: hashedPassword, gender, dateOfBirth });

    try {
        await newUser.save();
    } catch (saveError) {
        console.error("Error saving user:", saveError);
        return res.status(500).json({ message: 'Error saving user', error: saveError.message });
    }


    const tokenPayload = { 
        id: newUser._id,
        email: newUser.email 
    };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });


    res.cookie('UserToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600000 
  
    });

    res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      const tokenPayload = { 
          id: user._id, 
          email: user.email 
      };
      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.cookie('UserToken', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', 
          sameSite: 'strict', 
          maxAge: 3600000 
      });

      // Send response
      res.status(200).json({ 
          message: 'Login successful',
          user: {
              id: user._id,
              fullName: user.fullName,
              email: user.email
              // Add any other user data you want to send to the client
          }
      });

  } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Error during login', error: error.message });
  }
};
exports.logout = (req, res) => {
  res.clearCookie('UserToken');
  res.json({ message: 'Logged out successfully' });
};

exports.checkAuthStatus = (req, res) => {
  const token = req.cookies['UserToken'];
  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ isAuthenticated: true, user: { id: decoded.id, email: decoded.email, profileImage: decoded.profilePic } });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};