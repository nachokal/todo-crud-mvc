const router = require('express').Router()
const todoController = require('../controllers/todo')

router.post('/', todoController.createTodo)
router.get('/:id', todoController.getTodo)
router.put('/:id', todoController.editTodo)
router.delete('/:id', todoController.deleteTodo)

module.exports = router