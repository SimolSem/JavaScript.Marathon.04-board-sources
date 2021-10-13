const board = document.querySelector('#board')
const SQUARES_NAMBER = 500
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'DarkCyan', 'Aqua', 'SteelBlue', 'Fuchsia', 'Indigo']

for(let i = 0; i < SQUARES_NAMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square)
}

function setColor(element) {

    const color = getRandomColor()
    element.style.backgroundColor = color
    //element.style.boxShadow = `0 0 2px ${color}`
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element) {

    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'    

}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}