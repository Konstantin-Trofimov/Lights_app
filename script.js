
const light = {}
const lights = []
const wrap = document.querySelector('.wrap')
let counter = 0
let tmr 

const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16)

for (let i = 0; i < 25; i++) {
 lights.push(Object.create(light))
} 

function render(c = 'white', isProgram = false) {
 let secondColor = randomColor()
 wrap.innerHTML = ''
 counter++

 lights.map((i, index) => {
  if (isProgram) {
   programedLights(i, index, secondColor)
  }
  else {
   i.color = c
  }
  let l = document.createElement('div')
  l.style.background = i.color
  wrap.append(l)
 })
}

function programedLights(i, index, secondColor) {
 if (counter % 2 == 0) {
  if (index % 2 == 0) {
   i.color = secondColor
  }
 } 
 else {
  if (index % 2 != 0) {
   i.color = secondColor
  }
 }
}

render()

document.querySelector('.btns').addEventListener('click', action)

function action(evt) {
 const target = evt.target 

 if (target.tagName = 'button' && target.classList.contains('start')) {
  tmr = setInterval(() => render(randomColor(), true), 1000)
  console.log(tmr)
 }
 else if (target.tagName = 'button' && target.classList.contains('stop')) {
  clearInterval(tmr)
 }
 else {
  return
 }
} 



