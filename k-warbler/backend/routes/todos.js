const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", (req, res, next) => {
  Todo.find({})
    .then(todos => res.json(todos))
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
  Todo.create(req.body)
    .then(todo => res.status(201).json(todo))
    .catch(err => next(err));
});

router.delete("/:id", (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => next(err));
});

router.put("/:id", (req, res, next) => {
  Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(todo => res.json(todo))
    .catch(err => next(err));
});

module.exports = router;
