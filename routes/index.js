const express = require('express')
const home = require('./modules/home')
const users = require('./modules/users')
const todos = require('./modules/todos')
const route = express.Router()
const { authenticator } = require('../middleware/auth')

route.use('/todos', authenticator, todos)
route.use('/users', users)
route.use('/', authenticator, home)
module.exports = route
