import React, { Component } from 'react'
import CounterControler from './CounterControler'

export default class DisplayCounter extends Component {
  //count = 0
    constructor(props){
        super(props)
        this.state= {
          count : 0
        }
    }

    updateCount = (value)=>{
      this.setState({count : value})
    }
 
    render() {
    console.log("Parent Comp render...")
    
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>

        <h4>Click + for Increment / Click - for Decrement</h4>
        <CounterControler data= {this.updateCount}></CounterControler>
      </div>
    )
  }
}
