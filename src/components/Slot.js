import React from 'react'



  var alternator = true

  class Slot extends React.Component {
    constructor(props) {
      super(props)
      // this.state = {Image: imagesPath.empty, isNaught: null}
      // this.click = this.click.bind(this)
      // this.send = this.send.bind(this)
    }

    // click(props) {
    //   if (this.state.Image === imagesPath.empty) {
    //   if (alternator === true) {
    //     this.setState({
    //       Image: imagesPath.naught,
    //       isNaught: true
    //     })
    //     alternator = false
    //     //if(this.state.isNaught != null) this.send(this.state.isNaught)
    //   } else {
    //     this.setState({
    //       Image: imagesPath.cross,
    //       isNaught: false
    //     })
    //     alternator = true
    //     //this.send(this.state.isNaught)
    //     }
    //   //console.log(alternator)
    //   }
    // }
    
    render() {
      return <img style={style} src={src} alt="sorry"></img>        
    }
  }

  export default Slot