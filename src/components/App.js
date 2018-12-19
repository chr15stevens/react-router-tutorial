import React from 'react'
import Board from './Board';

const data =[{"name":"Andy"},{"name":"Chris"}]
const listItems = data.map((d) => <li key={d.name}>{d.name}</li>)


const App = (props) => (
  <div>
    <div  id="layout" style={{maxWidth: "456px", maxHeight: "456px"}}>
      <Board/>
      {listItems}
    </div>
  </div>
)

export default App
