const express = require('express')
const res = require('express/lib/response')

const router = express.Router()
const Checklist = require('../models/checklist')

router.get('/', async (req, res) => {
  try {
    let checklists = await Checklist.find({}).populate('tasks')
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
  let { name } = req.body.checklist
  let checklist = new Checklist({name})
  try {
   await checklist.save()
    res.redirect('/checklists')
  } catch (error) {
    console.log(error)
    res.status(422).render('checklists/new', { checklist: { ...checklist, error }
})
    res.status(500).render('pages/error', { error: 'Erro ao criar checklist' })
  }
})
router.get('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id).populate('tasks')
    res.status(200).render('checklists/show', { checklist: checklist })
  } catch (error) {
    res.status(500).render('pages/error', { error: 'Erro ao exibir as Listas' })
  }
})


router.get('/:id/edit', async (req, res) => {
  try { 
    let checklist = await Checklist.findById(req.params.id)
    res.status(200).render('checklists/edit',{checklist: checklist})
  }
  catch (error) {
    res.status(500).render('pages/error', { error: 'Erro a edição da Lista' })
  }
})




router.put('/:id', async (req, res) => {
  let { name } = req.body.checklist
  let checklist = await Checklist.findById(req.params.id)
  try {
    await checklist.updateOne({name})
    res.redirect('/checklists')
  } catch (error) {
    let errors = error.errors
    res.status(422).render('checklists/edit',{checklist: {...checklist,errors}})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndDelete(req.params.id)
    res.redirect('/checklists')
  } catch (error) {
    res.status(500).render('pages/error',{error:"Erro ao deletar lista de tarefas"})
  }
})
module.exports = router
