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
  

  // const Board = () => (
  //   function initialize () {
  //   var slot = {id, image, isEmpty, isNaught}
  //   var grid = new slot[8]
  //   for (var i = 0; i < 9; i++) {
  //     grid[i].id = (i+1)
  //     grid[i].isNaught = null
  //     grid[i].isEmpty = true
  //     image = "url(./empty.svg)"
  //   }
  //   }
  // )

  
  class Board extends React.Component {
    render() {
      return (
      <div style={style}>
        {/* <img style={style}></img> */}
      </div>)
    }
  }


  export default Board