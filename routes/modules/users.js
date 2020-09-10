const express = require('express')
const route = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')

const db = require('../../models')
const Todo = db.Todo
const User = db.User

route.get('/login', (req, res) => {
  res.render('login')
})
route.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

route.get('/register', (req, res) => {
  res.render('register')
})
route.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  User.findOne({ where: { email } }).then(user => {
    if (user) {
      console.log('User already exists')
      return res.render('register', {
        name,
        email,
        password,
        confirmPassword
      })
    }
    return bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(password, salt))
      .then(hash => User.create({
        name,
        email,
        password: hash
      }))
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  })
})

route.get('/logout', (req, res) => {
  res.send('logout')
})
module.exports = route
