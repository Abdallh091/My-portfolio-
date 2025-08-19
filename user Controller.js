
// controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// تسجيل مستخدم جديد
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // التحقق من وجود المستخدم
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // إنشاء مستخدم جديد
    const user = await User.create({
      name,
      email,
      password,
      role: email === process.env.ADMIN_EMAIL ? 'admin' : 'user'
    });

    // إنشاء JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error registering user',
      error: error.message
    });
  }
};

// تسجيل دخول المستخدم
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // التحقق من وجود المستخدم
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // التحقق من كلمة المرور
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // إنشاء JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error logging in',
      error: error.message
    });
  }
};

// الحصول على معلومات المستخدم
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching user profile',
      error: error.message
    });
  }
};