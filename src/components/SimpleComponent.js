// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
  constructor(){
    super()
    this.state = {
      mood: "happy"
    }
  }
  
  handleClick =() => {
    this.setState({
      mood: "sad"
    })
    
<<<<<<< HEAD
       if (this.state.mood === "sad" ) {
=======
      } if (this.state.mood === "sad" ) {
>>>>>>> 4fcb6ca5913f0384e0b84da9b65113d05730eb00
        this.setState((prevState) => ({
        mood: prevState.mood
    }));
      }
  }
  
  render (){
    return (
        <div onClick={this.handleClick}>{this.state.mood}</div>
      )
  }
}