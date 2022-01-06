class App {
  constructor() {
    this.spaceship = null
  }

  start() {
    this.enrollSpaceship()
    let choosenOption
    do {
      choosenOption = this.showInitialMenu()
      this.redirectFeature(choosenOption)
    } while (choosenOption != '3')
    this.printAndExit()
  }
  enrollSpaceship() {
    let spaceshipName = prompt('Qual o nome da nave?')
    let crewQuantity = prompt('Qual a quantidade de tripulantes?')
    let spaceshipKind = this.askForSpaceship()
    if (spaceshipKind == '1') {
      let weaponsQuantity = prompt('Quantas armas a nave possui?')
      this.spaceship = new BattleSpaceship(
        spaceshipName,
        crewQuantity,
        weaponsQuantity
      )
    } else {
      let sitsQuantity = prompt('Quantos lugares  a nave possui?')
      this.spaceship = new TransportSpaceship(
        spaceshipName,
        crewQuantity,
        sitsQuantity
      )
    }
  }
  askForSpaceship() {
    let choosenOption
    while (!['1', '2'].includes(choosenOption)) {
      choosenOption = prompt(
        'Qual o tipo da nave? \n1) Batalha  \n2) Transporte'
      )
    }
    return choosenOption
  }
  showInitialMenu() {
    console.log(new Date(Date.now()))
    const promptMessage =
      'O que voce deseja fazer?\n' +
      '1) Acelerar a nave\n' +
      '2) Trocar a nave\n' +
      '3) Imprimir e sair'
    let choosenOption = prompt(promptMessage)
    while (!['1', '2', '3'].includes(choosenOption)) {
      choosenOption = prompt(promptMessage)
    }
    return choosenOption
  }
  redirectFeature(choosenOption) {
    switch (choosenOption) {
      case '1':
        this.acellerateSpaceship()
        break
      case '2':
        this.enrollSpaceship()
        break
    }
  }
  acellerateSpaceship() {
    let acceleration = Number(prompt('Quanto voce gostaria de acelerar?'))
    this.spaceship.speedUp(acceleration)
  }
  printAndExit() {
    let finalMessage =
      'Nome ' +
      this.spaceship.name +
      '\n' +
      'Quantidade de tripulantes ' +
      this.spaceship.crewQuantity +
      '\n' +
      'Velocidade atual w' +
      this.spaceship.currentVelocity
    alert(finalMessage)
  }
}
