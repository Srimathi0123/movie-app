import React, { Component } from 'react'


export class CounterComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    incrementFunction = ()=>{
        this.setState({
            count : this.state.count + 1

        })
    }
    decrementFunction = ()=>{
        this.setState({
            count : this.state.count - 1
    
        })

    }
  render() {
    console.log("render")
    return (
    <React.Fragment>
     <button onClick={this.incrementFunction}>+</button>
     {
        this.state.count
     }

     <button onClick={this.decrementFunction}>-</button>
     </React.Fragment>
    )
  }
}

export default CounterComponent