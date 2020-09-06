const express = require('express')
const home = require('./modules/home')
const users = require('./modules/users')
const route = express.Router()

route.use('/', home)
route.use('/users', users)

module.exports = route
