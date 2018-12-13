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

  class Slot extends React.Component {
    constructor(props) {
      super(props)
      this.state = {Image: imagesPath.empty, isNaught: null}
      this.click = this.click.bind(this)
      this.grid = this.grid.bind(this)
    }

    grid() {
      return (
          <img style={style} src={this.state.Image} alt="sorry" onClick={this.click}></img>
      )
    }

    click(props) {
      if (this.state.Image === imagesPath.empty) {
      if (alternator === false) {
        this.setState({
          Image: imagesPath.naught,
          isNaught: true
        })
        alternator = true
      } else {
        this.setState({
          Image: imagesPath.cross,
          isNaught: false
        })
        alternator = false
        }
      console.log(alternator)
      }}
    
    render() {
      return this.grid()        
    }
  }

  export default Slot