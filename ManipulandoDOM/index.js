function saveHouse() {
  let area = document.querySelector("input[name='area']").value
  let number = document.querySelector("input[name='number']").value
  let city = document.querySelector("input[name='city']").value
  let neighbourhood = document.querySelector(
    "input[name='neighbourhood']"
  ).value

  let newListValue = document.createElement('li')
  newListValue.innerText =
    area + 'm²,numero ' + number + ' (' + neighbourhood + ' - ' + city + ')'
  let removeButton = document.createElement('button')
  removeButton.type = 'button'
  removeButton.innerText = 'Remover'
  removeButton.setAttribute('onclick', 'removeHouse(this)')

  newListValue.appendChild(removeButton)
  document.getElementById('houseList').appendChild(newListValue)
}

function removeHouse(element) {
  let liToRemove = element.parentNode
  document.getElementById('houseList').removeChild(liToRemove)
}
