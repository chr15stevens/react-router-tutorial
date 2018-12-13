import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board';

var alternator = true
var isEmpty = []
var isNaught = []
var counter = 0;
var winO = 0
var winX = 0

for (var i = 0; i < 9; i++) {
  isEmpty[i+1] = true
  isNaught[i+1] = null
}

function winCheck(a) {
  if (isNaught[a.id] != null) {
    counter+=1
  }
  if (counter >= 3) {
    if (isNaught[1] === isNaught[2] && isNaught[1] === isNaught[3] && isNaught[1] != null) {
      winEvent(isNaught[1])
    }
    if (isNaught[1] === isNaught[4] && isNaught[1] === isNaught[7] && isNaught[1] != null) {
      winEvent(isNaught[1])
    }
    if (isNaught[1] === isNaught[5] && isNaught[1] === isNaught[9] && isNaught[1] != null) {
      winEvent(isNaught[1])
    }
    if (isNaught[2] === isNaught[5] && isNaught[2] === isNaught[8] && isNaught[1] != null) {
      winEvent(isNaught[2])
    }
    if (isNaught[3] === isNaught[5] && isNaught[3] === isNaught[7] && isNaught[3] != null) {
      winEvent(isNaught[3])
    }
    if (isNaught[3] === isNaught[6] && isNaught[3] === isNaught[9] && isNaught[3] != null) {
      winEvent(isNaught[3])
    }
    if (isNaught[4] === isNaught[5] && isNaught[4] === isNaught[6] && isNaught[4] != null) {
      winEvent(isNaught[4])
    }
    if (isNaught[7] === isNaught[8] && isNaught[7] === isNaught[9] && isNaught[7] != null) {
      winEvent(isNaught[7])
    }
  }  
}
  
  // var a = document.getElementById(element)
  // if (isEmpty[a.id] === true) {
  //   if (alternator === true) {
  //     a.style.backgroundImage = "url(./cross.svg)"
  //     a.style.backgroundSize = "cover"
  //     alternator = false
  //     isEmpty[a.id] = false
  //     isNaught[a.id] = false
  //   } else {
  //     a.style.backgroundImage = "url(./naught.svg)"
  //     a.style.backgroundSize = "cover"
  //     alternator = true
  //     isEmpty[a.id] = false
  //     isNaught[a.id] = true
  //   }
  // } 
  // winCheck(a);
  // console.log(a.id + ' ' + isNaught[element] + ' ' + counter)

function restart() {
  var elementGrab;
  for (var i = 0 ; i < 9 ; i++) {
    elementGrab = document.getElementById(i+1)
    elementGrab.style.backgroundImage = "url(./empty.svg)"
    isEmpty[i+1] = true
    isNaught[i+1] = null
    counter = 0
  }
}

function winEvent (winner) { 
  // create a new div element 
  var newDiv = document.createElement("div")
  var newContent
  // and give it some content
  if (winner === true) {
    newContent = document.createTextNode("O has won!")
    winO++
  } else {
    newContent = document.createTextNode("X has won!")
    winX++
  }
  // add the text node to the newly created div 
  newDiv.appendChild(newContent)
  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1")
  document.body.insertBefore(newDiv, currentDiv)
  document.getElementById('display').innerHTML = "O: " + winO + "  X: " + winX
}

const App = (props) => (
  <div>
    <div  id="layout" style={{maxWidth: "456px", maxHeight: "456px"}}>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
    </div>
    
      {/*<div onClick={() => restart()}>RESTART</div>
      <div>
        <div id="1" onClick={() => change("1")}  style={style}>1</div>
        <div id="2" onClick={() => change("2")}  style={style}>2</div>
        <div id="3" onClick={() => change("3")}  style={style}>3</div>
        <div id="4" onClick={() => change("4")}  style={style}>4</div>
        <div id="5" onClick={() => change("5")}  style={style}>5</div>
        <div id="6" onClick={() => change("6")}  style={style}>6</div>
        <div id="7" onClick={() => change("7")}  style={style}>7</div>
        <div id="8" onClick={() => change("8")}  style={style}>8</div>
        <div id="9" onClick={() => change("9")}  style={style}>9</div>
      </div>
    </div>
    <div id="display" float="left">Score</div> */}
  </div>
)

export default App
