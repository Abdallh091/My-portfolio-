
// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// إرسال رسالة اتصال جديدة
router.post('/', contactController.sendContactMessage);

module.exports = router;
