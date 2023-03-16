const counter = document.querySelector('.counter')
const plusButton = document.querySelector('.plus')
const minusButton = document.querySelector('.minus')
const resetButton = document.querySelector('.reset')

let value = 0

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