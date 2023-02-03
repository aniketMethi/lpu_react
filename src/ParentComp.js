import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
    constructor(){
        super()
        this.state = {
            displayMsg : " "
        }
    }

    dataHandeler = (msg) => {
       this.setState({displayMsg : msg})
    }
  render() {
    return (
      <div>
        <ChildComp data={this.dataHandeler}></ChildComp>
        <h1>{this.state.displayMsg}</h1>
      </div>
    )
  }
}
