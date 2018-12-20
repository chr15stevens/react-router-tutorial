import React from 'react'
import Slot from './Slot'

const style = {
  width: "150px",
  height: "150px",
  backgroundColor: "FF0000",
  float: "left",
  border: "1px solid black",
}

var alternator = true

class Board extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Grid: [null,null,null,null,null,null,null,null,null],
      }
      this.click = this.click.bind(this)
      this.slots = this.slots.bind(this)
      this.winCheck = this.winCheck.bind(this)
      this.checkForTrue = this.checkForTrue.bind(this)
      this.checkForFalse = this.checkForFalse.bind(this)
    }

    slots() {
        return this.state.Grid.map((grid, index) => {
            return <Slot key={index} style={style} src={grid} onClick={() => this.click(index)}/>
        })
    }
    
    click(index) {
        let clone = this.state.Grid.slice()
        if (clone[index] === null) {
            if (alternator === true) {
                clone[index] = alternator
                this.setState({Grid: clone}, function() {this.winCheck(this.state.Grid.slice())})
                //alternator = false
            } else {
                clone[index] = false
                this.setState({Grid: clone}, function() {this.winCheck(this.state.Grid.slice())})
                alternator = true
            } 
        }
    }

    winCheck(clone) {

        let row1 = this.extract(clone, 0, 1, 2)
        let row2 = this.extract(clone, 3, 4, 5)
        let row3 = this.extract(clone, 6, 7, 8)
        let column1 = this.extract(clone, 0, 3, 6)
        let column2 = this.extract(clone, 1, 4, 7)
        let column3 = this.extract(clone, 2, 5, 8)
        let diag1 = this.extract(clone, 0, 4, 8)
        let diag2 = this.extract(clone, 2, 4, 6)

        
        if (row1.every(this.checkForTrue)) console.log('true row 1')
        if (row1.every(this.checkForFalse)) console.log('false row 1')
        if (row2.every(this.checkForTrue)) console.log('true row 2')
        if (row2.every(this.checkForFalse)) console.log('false row 2')
        if (row3.every(this.checkForTrue)) console.log('true row 3')
        if (row3.every(this.checkForFalse)) console.log('false row 3')
        if (column1.every(this.checkForTrue)) console.log('true column 1')
        if (column1.every(this.checkForFalse)) console.log('false column 1')
        if (column2.every(this.checkForTrue)) console.log('true column 2')
        if (column2.every(this.checkForFalse)) console.log('false column 2')
        if (column3.every(this.checkForTrue)) console.log('true column 3')
        if (column3.every(this.checkForFalse)) console.log('false column 3')
        if (diag1.every(this.checkForTrue)) console.log('true diag 1')
        if (diag1.every(this.checkForFalse)) console.log('false diag 1')
        if (diag2.every(this.checkForTrue)) console.log('true diag 2')
        if (diag2.every(this.checkForFalse)) console.log('false diag 2')


        let numbers = [0,1,2,3,4,5,6,7,8]
        //console.log(this.extract(numbers, 1, 4, 7))
        //console.log(row1)
    }

    extract(array, pos1, pos2, pos3) {
        let newA = []
        let a = array.slice(pos1, pos1+1)
        newA.push(a[0])
        a = array.slice(pos2, pos2+1)
        newA.push(a[0])
        a = array.slice(pos3, pos3+1)
        newA.push(a[0])
        return newA
    }

    checkForTrue(set) {
        if (set === true) return true
    }

    checkForFalse(set) {
        if (set === false) return true
    }

    

    

    render(props) {
       return( 
        <div>
            {this.slots(props)}
        </div>
        )
    }
}

export default Board