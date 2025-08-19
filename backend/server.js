// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

// استيراد المسارات
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');

// استيراد middleware معالجة الأخطاء
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// الاتصال بقاعدة البيانات
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// تعريف المسارات
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

// معالجة الأخطاء
app.use(errorHandler);

// تشغيل الخادم
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
