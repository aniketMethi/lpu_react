import React, { Component } from 'react'

export default class ChildComp extends Component {
    
    btnHandeler = () => {
        this.props.data("Hey!! How Are You ???")
    }
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.btnHandeler}>Display Message</button>
        </div>
    )
  }
}
