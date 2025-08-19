// controllers/contactController.js
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// إرسال رسالة جهة اتصال جديدة
exports.sendContactMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // حفظ الرسالة في قاعدة البيانات
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();

    // إرسال بريد إلكتروني
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message: ${subject}`,
      text: `
        You have a new contact message from your portfolio website.
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error sending message',
      error: error.message
    });
  }
};
