import React from 'react'
//import Slot from './Slot'

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

        this.state = {
            Grid: [],
            Image: imagesPath.empty,
            isNaught: null
        }

        this.click = this.click.bind(this)
        this.track = []
        this.listSlots = this.listSlots.bind(this)
        this.Slot = this.Slot.bind(this)
    }

    click(props) {
          if (this.state.Image === imagesPath.empty) {
          if (alternator === true) {
            this.setState({
              Image: imagesPath.naught,
              isNaught: true
            })
            alternator = false
          } else {
            this.setState({
              Image: imagesPath.cross,
              isNaught: false
            })
            alternator = true
            }
            console.log(this.state.Image)
          }
        }
    

    Slot(props) {
        return <img style={props.style} src={props.src} alt="sorry" onClick={this.click}></img>
    }

    listSlots() {
        const lol = [
            <this.Slot key={1} style={style} src={this.state.Grid[1].Image}/>,
            <this.Slot key={2} style={style} src={this.state.Grid[2].Image}/>,
            <this.Slot key={3} style={style} src={this.state.Grid[3].Image}/>,
            <this.Slot key={4} style={style} src={this.state.Grid[4].Image}/>,
            <this.Slot key={5} style={style} src={this.state.Grid[5].Image}/>,
            <this.Slot key={6} style={style} src={this.state.Grid[6].Image}/>,
            <this.Slot key={7} style={style} src={this.state.Grid[7].Image}/>,
            <this.Slot key={8} style={style} src={this.state.Grid[8].Image}/>,
            <this.Slot key={9} style={style} src={this.state.Grid[9].Image}/>
        ]
        return lol
    }
    
    render() {

       return( 
        <div>
            {this.listSlots()}
        </div>
        )
    }
}

export default Board