import React from 'react'
import Board from './Board';

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
  </div>
)

export default App
