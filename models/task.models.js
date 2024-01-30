const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the task schema
const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  dueDate: {
    type: String,
    
  },
  workStatus: {
    type: String,
    enum: ['completed', 'progress'],
    default: 'progress'
  },
  categories: {
    type: [String],
    default: []
  }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
