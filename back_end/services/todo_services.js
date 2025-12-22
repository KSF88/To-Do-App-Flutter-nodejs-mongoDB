const toDoModel = require('../model/todo_model');


class toDoServices {

    static async createToDo(userId, title, description) {
        const createToDo = new toDoModel({ userId, title, description });
        return await createToDo.save();
    }

    static async getTodoData(userId) {
        const todoData = await toDoModel.find({ userId })
        return todoData;
    }

    static async deleteTodo(id) {
        const todoData = await toDoModel.findOneAndDelete({ id: id })
        return todoData;
    }
}

module.exports = toDoServices;