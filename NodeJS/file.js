const fs = require('fs')

fs.appendFile('test.txt', 'Olá NodeJS', (err) => {
  console.log(err)
})
