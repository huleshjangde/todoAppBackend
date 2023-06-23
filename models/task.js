const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String, // Add the image field of type String
});

module.exports = mongoose.model('Task', taskSchema);
