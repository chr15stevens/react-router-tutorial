import React from 'react'
import Slot from './Slot'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.e = null
        this.slots = [
            <Slot key={1} callback={recieve}/>,
            <Slot key={2}/>,
            <Slot key={3}/>,
            <Slot key={4}/>,
            <Slot key={5}/>,
            <Slot key={6}/>,
            <Slot key={7}/>,
            <Slot key={8}/>,
            <Slot key={9}/>
        ]
        this.recieve = this.recieve.bind(this)
        this.track = []
        this.winCheck = this.winCheck.bind(this)
    }
    
    recieve() {
        //what i need from child (this.state.isNaught)
    }

    winCheck = () => {
        this.track[1] = this.slots[1].props.hi
        //console.log(this.track[1])
    }
    

    render() {
       return( 
        <div>
            {this.slots}
            {this.winCheck()}
            {/* <Slot id="1"/>
            <Slot id="2"/>
            <Slot id="3"/>
            <Slot id="4"/>
            <Slot id="5"/>
            <Slot id="6"/>
            <Slot id="7"/>
            <Slot id="8"/>
            <Slot id="9"/> */}
        </div>
        )
    }
}

export default Board