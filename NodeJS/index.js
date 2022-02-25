const moment = require('moment')

function sayMyName(name) {
  console.log('Meu nome é ' + name)
  console.log(moment().format('HH:mm'))
}

sayMyName('Henrique')
