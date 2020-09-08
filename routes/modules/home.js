const express = require('express')
const route = express.Router()
const db = require('../../models')
const Todo = db.Todo
const User = db.User

route.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll({
      raw: true,
      nest: true
    })
    res.render('index', { todos })
  } catch (error) {
    console.log(error)
  }
})

module.exports = route
