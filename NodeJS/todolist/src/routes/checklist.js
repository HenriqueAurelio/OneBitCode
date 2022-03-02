const express = require('express')
const res = require('express/lib/response')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('olá')
  res.send()
})

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(req.params.id)
})

router.put('/:id', (req, res) => {
  console.log('PUT METHOD')
  res.send(`PUT ID: ${req.params.id}`)
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body)
})

module.exports = router
