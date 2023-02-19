const grid = document.getElementById('grid')

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        gridElement.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        grid.appendChild(gridElement)
    }    
}

function wally() {
    num = Math.floor(Math.random() * 3904)
    console.log(num)
    const head = document.querySelector('#grid :nth-child(' + num + ')')
    head.style.backgroundColor = `#FFFFFF`
}

window.onload = () => {
    setupGrid(64)
    wally()
}