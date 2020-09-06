const express = require('express')
const route = express.Router()

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
  res.send('register')
})

route.get('/logout', (req, res) => {
  res.send('logout')
})
module.exports = route
