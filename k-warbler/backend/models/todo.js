const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos-backend");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const toDoSchema = new mongoose.Schema({
  task: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model("Todo", toDoSchema);

module.exports = Todo;
