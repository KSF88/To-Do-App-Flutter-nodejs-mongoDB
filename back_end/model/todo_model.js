const db = require("../config/db");
const mongoose = require('mongoose');
const userModel = require('../model/user_model');
const { Schema } = mongoose;

const todoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref:userModel.modelName
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    }

})

const toDoModel = db.model("todo", todoSchema);

module.exports = toDoModel;
