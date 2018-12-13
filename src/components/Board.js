import React from 'react'

const style = {
  width: "150px",
  height: "150px",
  backgroundColor: "FF0000",
  float: "left",
  border: "1px solid black",
  }

  const imagesPath = {
    empty: "./empty.svg",
    cross: "./cross.svg",
    naught: "./naught.svg",
  }

  var alternator = false

  class Board extends React.Component {
    constructor(props) {
      super(props)
      this.state = {Image: imagesPath.empty}
      this.click = this.click.bind(this);
      this.grid = this.grid.bind(this);
      //var alternator = false
    }

    grid(id) {
      return (
          <img style={style} src={this.state.Image} alt="sorry" onClick={this.click}></img>
      )
    }

    click() {
      if (this.state.Image === imagesPath.empty) {
      if (alternator === false) {
        this.setState({
          Image: imagesPath.naught
        });
        alternator = true
      } else {
        this.setState({
          Image: imagesPath.cross
        });
        alternator = false
        }
      console.log(alternator)
      }}
    
    render() {
          return this.grid()        
    }
  }


  export default Board