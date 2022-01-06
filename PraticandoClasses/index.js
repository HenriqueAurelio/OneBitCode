class Spaceship {
  constructor(name, crew) {
    this.name = name
    this.crew = crew
    this.isHitched = false
    this.entraceDoorsOpen = false
  }

  hitch() {
    this.isHitched = true
    this.entraceDoorsOpen = true
  }
}

function showMenu() {
  let choosenOption
  while (choosenOption != '1' && choosenOption != '2' && choosenOption != '3') {
    choosenOption = prompt(
      'O que deseja fazer? \n' +
        '1) Engatar a nave\n' +
        '2) Imprimir as naves\n' +
        '3) Sair do programa'
    )
  }
  return choosenOption
}

let hitchedSpaceships = []

function createSpaceship() {
  let spaceshipName = prompt('Informe o nome da nave')
  let crew = prompt('Digite quantidade de tripulantes')
  let spaceship = new Spaceship(spaceshipName, crew)
  return spaceship
}

function printSpaceshipList(spaceships) {
  let spaceshipList = ''
  spaceships.forEach((spaceship, index) => {
    spaceshipList +=
      index +
      1 +
      '-' +
      spaceship.name +
      ' (' +
      spaceship.crew +
      ' tripulantes)\n'
  })
  alert(spaceshipList)
}
let choosenOption

while (choosenOption != '3') {
  choosenOption = showMenu()
  switch (choosenOption) {
    case '1':
      let spaceshipToAdd = createSpaceship()
      spaceshipToAdd.hitch()
      hitchedSpaceships.push(spaceshipToAdd)
      break
    case '2':
      printSpaceshipList(hitchedSpaceships)
      break
    case '3':
      break
  }
}
