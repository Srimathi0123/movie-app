import React, { Component } from 'react'

export class NoonGreetComponent extends Component {
  render() {
    return (
      <p>noon{this.props.name}</p>
    )
  }
}

export default NoonGreetComponent