const todo = require('../models/todo')

module.exports = {
    getAllTodos: async (req, res) => {
        try {
            const todos = await todo.find({})
            console.log(todos)
            res.render('index', { todos: todos })
        } catch (error) {
            console.log(error)
            res.json({
                'error': error.message
            })
        }
    }
}