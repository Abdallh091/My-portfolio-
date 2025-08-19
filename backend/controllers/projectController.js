// controllers/projectController.js
const Project = require('../models/Project');

// إنشاء مشروع جديد (للمسؤول فقط)
exports.createProject = async (req, res) => {
  const { title, description, tags, imageUrl, demoUrl, detailsUrl } = req.body;

  try {
    const newProject = new Project({
      title,
      description,
      tags,
      imageUrl,
      demoUrl,
      detailsUrl
    });

    const project = await newProject.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: 'Error creating project',
      error: error.message
    });
  }
};

// الحصول على جميع المشاريع
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching projects',
      error: error.message
    });
  }
};

// تحديث مشروع
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, tags, imageUrl, demoUrl, detailsUrl } = req.body;

  try {
    const project = await Project.findByIdAndUpdate(
      id,
      { title, description, tags, imageUrl, demoUrl, detailsUrl },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: 'Error updating project',
      error: error.message
    });
  }
};

// حذف مشروع
exports.deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting project',
      error: error.message
    });
  }
};
