const hitchedSpaceships = [
  ['Fenix', 8, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwth', 15, false],
]

let crewGreaterThan9 = hitchedSpaceships
  .filter((spaceship) => {
    return spaceship[1] > 9
  })
  .map((spaceship) => {
    return spaceship[0]
  })

let onGoingHitchPlataform = hitchedSpaceships.findIndex((spaceship) => {
  return spaceship[2] == false
})

let upperCasedSpaceship = hitchedSpaceships.map((spaceship) => {
  return spaceship[0].toUpperCase()
})

let message =
  'Espaçonaves com mais de 9 tripulantes: ' + crewGreaterThan9.join(', ')
message += '\nPlataform com processo de engate: ' + onGoingHitchPlataform
message += '\nEspaçonaves destacadas: ' + upperCasedSpaceship.join(', ')

alert(message)
