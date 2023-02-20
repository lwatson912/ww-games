let num = Math.floor(Math.random() * 3904)
console.log(num)
const head = document.querySelector('#grid :nth-child(' + num + ')')
const bodyOne = document.querySelector('#grid :nth-child(' + (num + 64) + ')')
const bodyTwo = document.querySelector('#grid :nth-child(' + (num + 128) + ')')
const bodyThree = document.querySelector('#grid :nth-child(' + (num + 192) + ')')
const odlaw = document.querySelectorAll('.bod-odlaw')
head.addEventListener("click", blankOd)

function odlaw() {
    head.style.backgroundColor = `#F6DADA`
    bodyOne.style.backgroundColor = `#000000`
    bodyTwo.style.backgroundColor = `#FFFF00`
    bodyThree.style.backgroundColor = `#000000`
}

function blankOd() {
    myElement.style.opacity = ".25"
}

const myElement = document.getElementById('test')

function opacity() {
    
}

myElement.addEventListener("click", opacity)


console.log(myElement)