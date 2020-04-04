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
      if(this.mood === "sad") {
        
    this.setState({
      mood: "happy"
    })
      } else {
        this.setState((prevState) => ({
        mood: prevState.mood
    }));
      }
  }
  
  render (){
    return (
        <div onClick={this.handleClick}>{this.state.mood} </div>
      )
  }
}