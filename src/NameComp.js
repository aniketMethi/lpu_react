// import React from 'react'

// export default function NameComp(pro) {
//     let name = "Hey " + pro.name
//   return (
//     <div>
//         <h1>{name}</h1>
//     </div>
//   )
// }

import React, { Component } from 'react'

export default class NameComp extends Component {

    constructor(props){
        super(props);
    }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.firstname} {this.props.lastname}</h1>
        {this.props.children}
        
      </div>
    )
  }
}
