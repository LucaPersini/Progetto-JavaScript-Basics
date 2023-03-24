const container = document.querySelector('.container')

let value = 0

const counter = document.createElement('div')
counter.setAttribute('class', 'counter')
counter.innerHTML = 0
container.append(counter)

const buttonContainer = document.createElement('div')
buttonContainer.setAttribute('class', 'buttons')
container.append(buttonContainer)

const minusButton = document.createElement('button')
minusButton.setAttribute('class', 'minus')
minusButton.innerHTML = '-'
buttonContainer.append(minusButton)

const plusButton = document.createElement('button')
plusButton.setAttribute('class', 'plus')
plusButton.innerHTML = '+'
buttonContainer.append(plusButton)

const resetButtonContainer = document.createElement('div')
resetButtonContainer.setAttribute('class', 'reset-button')
container.append(resetButtonContainer)

const resetButton = document.createElement('button')
resetButton.setAttribute('class', 'reset')
resetButton.innerHTML = 'Reset'
resetButtonContainer.append(resetButton)

plusButton.addEventListener('click', () => {
  value++
  counter.innerHTML = value
})

minusButton.addEventListener('click', () => {
  value--
  counter.innerHTML = value
})

resetButton.addEventListener('click', () => {
  value = 0
  counter.innerHTML = value
})