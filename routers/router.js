const express = require("express");
const taskController = require("../controller/taskController");
const tast_router = express.Router();
const multer = require('multer');

// Define the storage configuration for multer
const storage = multer.diskStorage({
  destination: 'public/images',
  filename: (req, file, cb) => {
    // Generate a unique filename by appending the current timestamp
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.originalname}`;
    cb(null, filename);
  }
});

// Configure multer with the storage settings
const upload = multer({ storage });

// Routes
tast_router.get('/tasks', taskController.getAllTasks)
  .post('/tasks', upload.single('image'), taskController.createTask)
  .put('/tasks/:id', taskController.updateTask)
  .delete('/tasks/:id', taskController.deleteTask);

exports.taskrouter = tast_router;
