const router = require("express").Router();
const todoController = require("../controller/todo_controller");

router.post("/storeTodo", todoController.createTodo);

router.post("/getUserTodoList", todoController.getUserTodo);

router.post("/deleteTodo", todoController.deleteTodo);


module.exports = router;