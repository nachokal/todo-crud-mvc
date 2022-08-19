const todo = require("../models/todo");

module.exports = {
  createTodo: async (req, res) => {
    try {
      await todo.create({
        title: req.body.title,
        content: req.body.content,
      });
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.json({
        error: error,
      });
    }
  },
  getTodo: async (req, res) => {
    try {
      const returnedTodo = await todo.findById(req.params.id);
      res.render("edit", {
        todo: returnedTodo
      });
    } catch (error) {
      console.log(error);
      res.json({
        error: error,
      });
    }
  },
  editTodo: async (req, res) => {
    try {
      await todo.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content,
      });
      res.json({
        message: "Todo successfully edited",
      });
    } catch (error) {
      console.log(error);
      res.json({
        error: error,
      });
    }
  },
  deleteTodo: async (req, res) => {
    try {
      await todo.findByIdAndDelete(req.params.id);
      res.json({
        message: "Todo successfully deleted",
      });
    } catch (error) {
      console.log(error);
      res.json({
        error: error,
      });
    }
  },
};
