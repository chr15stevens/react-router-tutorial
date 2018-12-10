import React from 'react'

const style = {
  width: "150px",
  height: "150px",
  backgroundColor: "FF0000",
  float: "left",
  border: "1px solid black",
  backgroundImage: "url(./empty.svg)",
  backgroundSize: "cover",
}

var alternator = true
var isEmpty = []

for (var i = 0; i < 9; i++) {
  isEmpty[i+1] = true
}

function change(element) {
  var a = document.getElementById(element)
  if (isEmpty[a.id] === true) {
    if (alternator === true) {
      a.style.backgroundImage = "url(./cross.svg)"
      a.style.backgroundSize = "cover"
      alternator = false
      isEmpty[a.id] = false
    } else {
      a.style.backgroundImage = "url(./naught.svg)"
      a.style.backgroundSize = "cover"
      alternator = true
      isEmpty[a.id] = false
    }
  } 
  console.log(a.style.backgroundImage)
}

function restart() {
  var elementGrab;
  for (var i = 0 ; i < 9 ; i++) {
    elementGrab = document.getElementById(i+1)
    elementGrab.style.backgroundImage = "url(./empty.svg)"
    isEmpty[i+1] = true
  }
}

const App = () => (

  <div>
    <div  id="layout" style={{maxWidth: "456px", maxHeight: "456px", float: "left"}}>
      <div onClick={() => restart()}>RESTART</div>
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

  </div>
)

export default App
