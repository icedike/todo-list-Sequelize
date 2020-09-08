const express = require('express')
const route = express.Router()

const db = require('../../models')
const Todo = db.Todo
const User = db.User

route.get('/login', (req, res) => {
  res.render('login')
})
route.post('/login', (req, res) => {
  res.send('login')
})

route.get('/register', (req, res) => {
  res.render('register')
})
route.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  User.create({ name, email, password })
    .then(user => res.redirect('/'))
})

route.get('/logout', (req, res) => {
  res.send('logout')
})
module.exports = route
