const process = require('process')

process.stdout.write('Qual seu nome? ')

process.stdin.on('data', (keyboard) => {
  process.stdout.write('Texto do usuário ' + keyboard)
  process.exit()
})
