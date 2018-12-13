import React from 'react'

const style = {
  width: "150px",
  height: "150px",
  backgroundColor: "FF0000",
  float: "left",
  border: "1px solid black",
  backgroudImage: "url(./empty.svg)",
  backgroundSize: "cover",  
  }

  const imagesPath = {
    empty: "./empty.svg",
    cross: "./cross.svg",
    naught: "./naught.svg",
  }

  class Board extends React.Component {
    constructor(props) {
      super(props)
      this.state = {Image: imagesPath.empty}
      this.click = this.click.bind(this);
    }

    click() {
      this.setState({
        Image: imagesPath.cross
      });
    }
    
    render() {
      return (
        <img src={this.state.Image} onClick={this.click}></img>
      )
    }
  }


  export default Board