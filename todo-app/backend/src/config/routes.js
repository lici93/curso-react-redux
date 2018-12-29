const express = require('express')

module.exports = function(server) {
    console.log("olaaaaa")
    // API Routes
    const router = express.Router()
   
    server.use('/api', router);

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}