import React from 'react'

const imagesPath = {
  empty: "./empty.svg",
  cross: "./cross.svg",
  naught: "./naught.svg",
}

  class Slot extends React.Component {
    constructor(props) {
      super(props)
      this.send = this.send.bind(this)
    }

    send()
    {
      return <img style={this.props.style} src={this.props.src} alt="sorry" onClick={this.props.onClick}></img>  
    }

    
    render(props) {
      return this.send(props)
    }
  }

  export default Slot