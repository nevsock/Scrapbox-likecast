const loadCount = function() {
  if(!localStorage.getItem('count')){
    setCount()
  }
  return localStorage.getItem('count')
}

const setCount = function() {
  let _count = 0
  localStorage.setItem('count', _count)
}

let button = document.body.appendChild(document.createElement('button'))
let clearButton = document.body.appendChild(document.createElement('button'))
button.id = 'like_button'
clearButton.id = 'clear_button'
let count = loadCount()

button.innerHTML = '♡ ' + count
clearButton.innerHTML = 'clear'

const plusCount = function() {
  let _count = localStorage.getItem('count')
  count = Number(_count) + 1
  localStorage.setItem('count', count)
  button.innerHTML = '♡ ' + count
}

button.addEventListener('click', ()=>{plusCount()}, false)
clearButton.addEventListener('click', ()=>{localStorage.clear(), setCount()}, false)
