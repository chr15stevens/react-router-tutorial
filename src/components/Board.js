import React from 'react'
import Slot from './Slot'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {slotstate: null}
      }

    myCallback = (e) => {
        this.setState({e: e})
    }

    render() {
        return(
        <div>
            <Slot id="1">
                {/* {this.setState({slotstate: this.props.isNaught})} */}
            </Slot>
            <Slot id="2"/>
            <Slot id="3"/>
            <Slot id="4"/>
            <Slot id="5"/>
            <Slot id="6"/>
            <Slot id="7"/>
            <Slot id="8"/>
            <Slot id="9"/>
        </div>
        )
    }
}

export default Board