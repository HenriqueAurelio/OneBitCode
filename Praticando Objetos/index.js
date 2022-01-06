let spaceship = {
  velocity: 0,
  speedUp: function (acceleration) {
    this.velocity += acceleration
  },
}

function registerSpaceShip() {
  spaceship.name = prompt('Digite nome da nove')
  spaceship.type = prompt('Digite o tipo da nave')
  spaceship.maxVelocity = Number(
    prompt('Digite a velocidade máxima da nave (km/s)')
  )
}

function accelerate() {
  let acceleration = Number(prompt('Quanto voce deseja acelerar? (km/s)'))
  spaceship.speedUp(acceleration)
  if (spaceship.velocity > spaceship.maxVelocity) {
    alert(
      'Velocidade máxima atingida' +
        '\nVelocidade da nave:' +
        spaceship.velocity +
        'km/s'
    )
  }
}

function stop() {
  alert(
    'Nome: ' +
      spaceship.name +
      '\nTipo: ' +
      spaceship.type +
      '\nVelocidade da nave: ' +
      spaceship.velocity +
      '\nVelocidade máxima da nave: ' +
      spaceship.maxVelocity
  )
}

function showMenu() {
  let chooseOption
  do {
    chooseOption = prompt('Voce deseja \n1) acelerar ou \n2) parar?')
    switch (chooseOption) {
      case '1':
        accelerate()
        break
      case '2':
        stop()
        break
      default:
        alert('Opção inválida')
    }
  } while (chooseOption != '2')
}

registerSpaceShip()
showMenu()
