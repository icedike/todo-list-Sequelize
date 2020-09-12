const express = require('express')
const route = express.Router()

const db = require('../../models')
const Todo = db.Todo
const User = db.User

route.get('/new', (req, res) => {
  res.render('new')
})

route.post('/', async (req, res) => {
  const UserId = req.user.id
  const name = req.body.name
  try {
    await Todo.create({ UserId, name })
    res.redirect('/')
  } catch (error) { console.log(error) }
})

route.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

route.get('/:id/edit', async (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  try {
    let todo = await Todo.findOne({ where: { id, UserId } })
    todo = todo.toJSON()
    res.render('edit', { todo })
  } catch (error) { console.log(error) }
})

route.put('/:id', async (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  const { name, isDone } = req.body
  try {
    await Todo.update({ name, isDone: (isDone === 'on') }, { where: { id, UserId } })
    res.redirect(`/todos/${id}`)
  } catch (error) { console.log(error) }
})

route.delete('/:id', async (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  try {
    await Todo.destroy({ where: { id, UserId } })
    res.redirect('/')
  } catch (error) { console.log(error) }
})

module.exports = route
