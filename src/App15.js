import React, { Component } from 'react'
import Student15 from './Student15';

export default class App15 extends Component {
    constructor(){
        super();
        this.state={
            name:"Suman",
            DOB:"12/07/1997",
        }
    }
  render() {
    return (
      <div>
      <h1>Suman</h1>
         <Student15 data1={this.state.name} data2={this.state.DOB}/>
         <button onClick={()=>this.setState({name:"Singh"})}  >Change Name</button>
         <button onClick={()=>this.setState({DOB:"Real DOB"})} >Change DOB</button>
      </div>
    )
  }
}
