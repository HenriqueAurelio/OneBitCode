const express = require('express')
const res = require('express/lib/response')

const router = express.Router()
const Checklist = require('../models/checklist')

router.get('/', async (req, res) => {
  try {
    let checklists = await Checklist.find({})
    res.status(200).render('checklists/index', { checklists: checklists })
  } catch (error) {
    res.status(500).render('pages/error', { eror: 'Erro ao exibir as Listas' })
  }
})

router.get('/new', async (req, res) => {
  try {
    let checklist = new Checklist()
    res.status(200).render('checklists/new', { checklist: checklist })
  } catch (error) {
    res
      .status(500)
      .render('pages/error', { errors: 'Erro ao caarregar o formulário' })
  }
})

router.post('/', async (req, res) => {
  let { name } = req.body
  try {
    let checklist = await Checklist.create({ name })
    res.redirect('/checklists')
  } catch (error) {
    console.log(error)
    res.status(422).json(error)
  }
})
router.get('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id)
    res.status(200).render('checklists/show', { checklist: checklist })
  } catch (error) {
    res.status(500).render('pages/error', { eror: 'Erro ao exibir as Listas' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    let { name } = req.body
    let checklist = await Checklist.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    )
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)
  }
  res.send(`PUT ID: ${req.params.id}`)
})

router.delete('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndDelete(req.params.id)
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)
  }
})
module.exports = router
