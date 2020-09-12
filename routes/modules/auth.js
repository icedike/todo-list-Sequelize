const express = require('express')
const route = express.Router()

const passport = require('passport')

route.get('/facebook', passport.authenticate('facebook', {
  scope: ['email', 'public_profile']
}))

route.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: 'users/login'
}))

module.exports = route
