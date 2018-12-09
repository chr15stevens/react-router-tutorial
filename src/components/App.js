import React from 'react'
import Header from './Header'
import Main from './Main'
import Board from './Board'
import Dom from 'react-dom'
//import naught from './public/naught.png'

const style = {
  width: "150px",
  height: "150px",
  backgroundColor: "blue",
  float: "left",
}

function change(element) {
  var a = document.getElementById(element);
  a.style.backgroundColor = "red"
  a.style.backgroundImage = "%PUBLIC_URL%/naught.png"
  console.log('hell')
}

const App = () => (

  <div>
    <Header />
    <Main />
    <div  id="layout" name="andy" style={{maxWidth: "450px", maxHeight: "450px", float: "left", backgroundColor: "Green"}}>LAYOUT
      <div>
        {/* <button id="a" onClick={() => change()} style={style}>a</button> */}
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
