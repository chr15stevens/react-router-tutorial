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

  var alternator = true

  class Slot extends React.Component {
    constructor(props) {
      super(props)
      this.state = {Image: imagesPath.empty, isNaught: null}
      this.click = this.click.bind(this)
      this.grid = this.grid.bind(this)
      this.send = this.send.bind(this)
    }
    
    send(val) {
      console.log(val)
    }

    grid() {
      return (
          <img style={style} src={this.state.Image} alt="sorry" onClick={this.click} onChange={this.send(this.state.isNaught)}></img>
      )
    }

    click(props) {
      if (this.state.Image === imagesPath.empty) {
      if (alternator === true) {
        this.setState({
          Image: imagesPath.naught,
          isNaught: true
        })
        alternator = false
        //if(this.state.isNaught != null) this.send(this.state.isNaught)
      } else {
        this.setState({
          Image: imagesPath.cross,
          isNaught: false
        })
        alternator = true
        //this.send(this.state.isNaught)
        }
      //console.log(alternator)
      }
    }
    
    render() {
      return this.grid()        
    }
  }

  export default Slot