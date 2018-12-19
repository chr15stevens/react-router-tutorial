import React from 'react'
import Slot from './Slot'

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

class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Grid: [
                null,null,null,null,null,null,null,null,null
                // <Slot/>,
                // <Slot/>,
                // <Slot/>,
                // <Slot/>,
                // <Slot/>,
                // <Slot/>,
                // <Slot/>,
                // <Slot/>,
                // <Slot/>
            ],
            Image: imagesPath.empty,
            isNaught: null,
        }

    this.click = this.click.bind(this)
    this.track = []
    this.slots = this.slots.bind(this)
    }

    click(index) {
        let a = this.state.Grid.slice()
        if (this.state.Image === imagesPath.empty) {
         if (alternator === true) {
             a[index] = <Slot key={index} style={style} src={imagesPath.naught} isNaught={true} />
             this.setState({
                  Grid: a},
                  function() {console.log(a)}
             )
        //   this.setState({
        //    Grid: a,
        //    Image: imagesPath.naught,
        //    isNaught: true},
        //    function() {console.log(this.state)}
        //   )
          alternator = false
         } else {
            // a[index] = <Slot key={index} style={style} src={imagesPath.cross} isNaught={true} />
            // this.setState({
            //      Grid: a},
            //      function() {console.log(a)}
            // )
          this.setState({
           Image: imagesPath.cross,
           isNaught: false,
           function() {console.log(this.state)}
          })
          alternator = true
         }
         //console.log(this.state)
        }
    }

    slots() {
        const back = imagesPath.cross
        return this.state.Grid.map((grid, index) => {
            return <Slot key={index} style={style} src={this.state.Image} isNaught={this.state.isNaught} onClick={this.click(index)}/>
        })
        // this.state.Grid.map((grid, index) => {
        //     return <Slot key={index} style={style} src={imagesPath.cross}></Slot>
        // })
        // const numbers = [1, 2, 3, 4, 5]
        // const lol = numbers.map((number) => 
        //     <li>{number}</li>
        // )
        // return <ul>{lol}</ul>
        //return this.state.Grid
    }

    render(props) {
       return( 
        <div>
            {this.slots(props)}
            {/* {this.listSlots()} */}
        </div>
        )
    }
}

export default Board