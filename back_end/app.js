const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('../nodejs_project/routers/user_router');
const todoRouter = require('../nodejs_project/routers/todo_router');


const app = express();

app.use(body_parser.json());

app.use('/', userRouter);
app.use('/', todoRouter);

module.exports = app;