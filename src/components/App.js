import React from 'react'
import Board from './Board'
//import Naught from '../../public/naught.png'
import Cross from '@material-ui/icons/Clear'

const style = {
  width: "150px",
  height: "150px",
  backgroundColor: "blue",
  float: "left",
}

var alternator = true

function change(element) {
  var a = document.getElementById(element);
  if (alternator === true) {
    a.style.backgroundImage = "url(./cross.png)"
    a.style.backgroundSize = "cover"
    alternator = false
  } else {
    a.style.backgroundImage = "url(./naught.png)"
    a.style.backgroundSize = "cover"
    alternator = true
  }
   
  
  console.log('hell')
}

const App = () => (

  <div>
    <Cross/>
    <div  id="layout" name="andy" style={{maxWidth: "450px", maxHeight: "450px", float: "left", backgroundColor: "Green"}}>LAYOUT
      <div>
        <div id="a" onClick={() => change("a")} style={style}>a</div>
        <div id="b" onClick={() => change("b")} style={style}>b</div>
        <div id="c" onClick={() => change("c")} style={style}>c</div>
        <div id="d" onClick={() => change("d")} style={style}>d</div>
        <div id="e" onClick={() => change("e")} style={style}>e</div>
        <div id="f" onClick={() => change("f")} style={style}>f</div>
        <div id="g" onClick={() => change("g")} style={style}>g</div>
        <div id="h" onClick={() => change("h")} style={style}>h</div>
        <div id="i" onClick={() => change("i")} style={style}>i</div>
      </div>
    </div>

  </div>
)

export default App
