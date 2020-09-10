const express = require('express')
const home = require('./modules/home')
const users = require('./modules/users')
const todos = require('./modules/todos')
const route = express.Router()

route.use('/', home)
route.use('/todos/', todos)
route.use('/users', users)

module.exports = route
