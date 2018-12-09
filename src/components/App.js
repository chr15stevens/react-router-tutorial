import React from 'react'
import Header from './Header'
import Main from './Main'
import Board from './Board'
import Dom from 'react-dom'



const style = {
  width: "150px",
  height: "150px",
  backgroundColor: "red",
  float: "left",
}

function change() {
  var a = document.getElementById("a");
  a.style.backgroundColor = "red"
  console.log('hello')
}

const App = () => (

  <div>
    <Header />
    <Main />

    <div  id="layout" name="andy" style={{maxWidth: "450px", maxHeight: "450px", float: "left", backgroundColor: "Green"}}>LAYOUT
      <div>
        <button id="a" onClick={change()} style={style}>a</button>
        <button id="b" style={style}>b</button>
        <button id="c" style={style}>c</button>
        <button id="d" style={style}>d</button>
        <button id="e" style={style}>e</button>
        <button id="f" style={style}>f</button>
        <button id="g" style={style}>g</button>
        <button id="h" style={style}>h</button>
        <button id="i" style={style}>i</button>
      </div>
    </div>

  </div>
)

export default App
