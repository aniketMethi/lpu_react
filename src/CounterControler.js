import React, { Component } from 'react'
import DisplayCounter from './DisplayCounter'

export default class CounterControler extends Component {
  
    constructor(props){
        super(props)
       this.state =  {
          value :  0
       }
    }
  
    inc =  async () =>{
      console.log("Inside Increment")
       await this.setState({value : this.state.value+1}) 
       console.log(this.state.value)
       this.props.data(this.state.value)

  }

  dec = async () => {
    console.log("Inside decrement")
    await this.setState({value : this.state.value-1})
    console.log(this.state.value)
    this.props.data(this.state.value)
  }
render() {
  console.log("***********************")
  console.log("Child Compt render.....")
  console.log("***********************")

  // console.log(this.props)
    //let value = 0
    // console.log("counter controllerrender.......")
    return (
      <div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}
