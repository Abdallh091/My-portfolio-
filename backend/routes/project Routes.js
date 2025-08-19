// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { protect, admin } = require('../middleware/authMiddleware');

// الحصول على جميع المشاريع
router.get('/', projectController.getProjects);

// إنشاء مشروع جديد (للمسؤول فقط)
router.post('/', protect, admin, projectController.createProject);

// تحديث مشروع (للمسؤول فقط)
router.put('/:id', protect, admin, projectController.updateProject);

// حذف مشروع (للمسؤول فقط)
router.delete('/:id', protect, admin, projectController.deleteProject);

module.exports = router;
