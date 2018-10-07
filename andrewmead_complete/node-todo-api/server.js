const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  },
});

async function addTodo({ text }) {
  try {
    const result = await Todo.create({
      text,
    });
    console.log(result);
  } catch (err) {
    console.log('unable to create todo', err);
  }
}

// trim validator will remove whitespace
addTodo({ text: '   Learn Typescript!  ' });
