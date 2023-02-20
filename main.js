const grid = document.getElementById('grid')

// Set up the grid

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

// Create the characters to find 

function wally() {
    num = Math.floor(Math.random() * 3904)
    console.log(num)
    const head = document.querySelector('#grid :nth-child(' + num + ')')
    head.style.backgroundColor = `#F6DADA`
    head.addEventListener("click", pause)
    const bodyOne = document.querySelector('#grid :nth-child(' + (num + 64) + ')')
    bodyOne.style.backgroundColor = `#FF0000`
    const bodyTwo = document.querySelector('#grid :nth-child(' + (num + 128) + ')')
    bodyTwo.style.backgroundColor = `#FFFFFF`
    const bodyThree = document.querySelector('#grid :nth-child(' + (num + 192) + ')')
    bodyThree.style.backgroundColor = `#FF0000`
}

function odlaw() {
    num = Math.floor(Math.random() * 3904)
    console.log(num)
    const head = document.querySelector('#grid :nth-child(' + num + ')')
    head.style.backgroundColor = `#F6DADA`
    head.addEventListener("click", pause)
    const bodyOne = document.querySelector('#grid :nth-child(' + (num + 64) + ')')
    bodyOne.style.backgroundColor = `#000000`
    const bodyTwo = document.querySelector('#grid :nth-child(' + (num + 128) + ')')
    bodyTwo.style.backgroundColor = `#FFFF00`
    const bodyThree = document.querySelector('#grid :nth-child(' + (num + 192) + ')')
    bodyThree.style.backgroundColor = `#000000`
}

function wizard() {
    num = Math.floor(Math.random() * 3904)
    console.log(num)
    const head = document.querySelector('#grid :nth-child(' + num + ')')
    head.style.backgroundColor = `#0183dd`
    head.addEventListener("click", pause)
    const bodyOne = document.querySelector('#grid :nth-child(' + (num + 64) + ')')
    bodyOne.style.backgroundColor = `#FF0000`
    const bodyTwo = document.querySelector('#grid :nth-child(' + (num + 128) + ')')
    bodyTwo.style.backgroundColor = `#FF0000`
    const bodyThree = document.querySelector('#grid :nth-child(' + (num + 192) + ')')
    bodyThree.style.backgroundColor = `#FF0000`
}

// Configure the stopwatch

// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}
  
// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  // showButton("PAUSE");
}
  
function pause() {
  clearInterval(timerInterval);
  // showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  // showButton("PLAY");
}

// Create function to display buttons

//   function showButton(buttonKey) {
//     const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
//     const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
//     buttonToShow.style.display = "block";
//     buttonToHide.style.display = "none";
//   }
  // Create event listeners
  
let playButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

window.onload = () => {
    setupGrid(64)
    wally()
    wizard()
    odlaw()
}