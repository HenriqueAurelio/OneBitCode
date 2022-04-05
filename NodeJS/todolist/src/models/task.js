const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  name: { type: String },
  done: { type: Boolean, default: false },
  data: { type: Date },
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist',
  },
})

module.exports = mongoose.model('Task', taskSchema)
