const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const nodemailer = require('nodemailer');

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ayaalrimawi406@gmail.com',
    pass: 'admt rsfo lxki xrzx'
  }
});

// Test email connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('Error with email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Utility function to send emails
async function sendEmail(to, subject, htmlContent) {
  try {
    const mailOptions = {
      from: 'ayaalrimawi406@gmail.com',
      to: to,
      subject: subject,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

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

exports.getAllUsers = async (req, res) => {
  try {
    // Get query parameters for pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get query parameters for sorting
    const sortField = req.query.sortField || 'createdAt';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
    const sortOptions = {};
    sortOptions[sortField] = sortOrder;

    // Get query parameters for filtering
    const filterOptions = {};
    if (req.query.gender) {
      filterOptions.gender = req.query.gender;
    }
    if (req.query.search) {
      filterOptions.$or = [
        { fullName: { $regex: req.query.search, $options: 'i' } },
        { email: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    // Get users with pagination and excluding password
    const users = await User
      .find(filterOptions)
      .select('-password')
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);

    // Get total count for pagination
    const total = await User.countDocuments(filterOptions);

    res.json({
      users,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalUsers: total,
        hasMore: page * limit < total
      }
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};



// Toggle user active status and send notification email
exports.toggleUserStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    const { isActive } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { isActive },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Prepare and send status change notification email
    const statusChangeEmailHtml = isActive ? `
      <h1>Account Activated</h1>
      <p>Dear ${user.fullName},</p>
      <p>Your Meshwar account has been successfully activated. You can now log in and access all features.</p>
      <p>If you have any questions or concerns, please don't hesitate to contact our support team.</p>
      <p>Best regards,<br>Meshwar Team</p>
    ` : `
      <h1>Account Deactivated</h1>
      <p>Dear ${user.fullName},</p>
      <p>Your Meshwar account has been deactivated. During this time, you won't be able to access our services.</p>
      <p>If you believe this is a mistake or would like to reactivate your account, please contact our support team.</p>
      <p>Best regards,<br>Meshwar Team</p>
    `;

    await sendEmail(
      user.email,
      `Meshwar Account ${isActive ? 'Activated' : 'Deactivated'}`,
      statusChangeEmailHtml
    );

    res.status(200).json({
      message: `User ${isActive ? 'activated' : 'deactivated'} successfully`,
      user
    });
  } catch (error) {
    console.error('Error toggling user status:', error);
    res.status(500).json({ message: 'Error updating user status', error: error.message });
  }
};