import React, { Component } from 'react'

export default class Student28 extends Component {
    componentWillUnmount(){
        alert("componentWillUnmount")
    }
  render() {
    return (
      <div>
        <h1>
            Child component
        </h1>
      </div>
    )
  }
}
