const grid = document.querySelector('.grid')
const results = document.querySelector('.results')
const width = 15
const aliensRemoved = []
const currentShooterIndex = 202

for (let index = 0; index < width * width; index++) {
  const square = document.createElement('div')
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
]

function draw() {
  for (let index = 0; index < alienInvaders.length; index++) {
    if(!aliensRemoved.includes(index)) {
      squares[alienInvaders[index]].classList.add('invaders')
    }
  }
}

draw()

squares[currentShooterIndex].classList.add('shooter')

function moveShooter() {
  squares[currentShooterIndex].classList.remove('shooter')
  switch(e.key) {
    case 'ArrowLeft':
      if(currentShooterIndex % width !==0) currentShooterIndex -=1
  }
}