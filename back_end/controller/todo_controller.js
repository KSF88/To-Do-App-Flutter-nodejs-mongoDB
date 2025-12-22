const toDoServices = require('../services/todo_services');

exports.createTodo = async (req, res, next) => {
    try {
        const { userId, title, description } = req.body;

        let todo = await toDoServices.createToDo(userId, title, description);

        res.json({ status: true, success: todo });
    } catch (error) {
        throw error;
    }
}

exports.getUserTodo = async (req, res, next) => {
    try {
        const { userId, } = req.body;

        let todo = await toDoServices.getTodoData(userId);

        res.json({ status: true, success: todo });
    } catch (error) {
        throw error;
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
        const { id, } = req.body;

        let deleted = await toDoServices.deleteTodo(id);

        res.json({ status: true, success: deleted });
    } catch (error) {
        throw error;
    }
}