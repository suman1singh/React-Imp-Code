import React, { Component } from 'react';
import { commonContext } from './commonContext';
class Main extends Component {
    render() {
        return (
           <commonContext.Consumer>
            {
                ({color})=>(
                    <h1 style={{backgroundColor:color}}>Main page</h1>
                )
            }
           </commonContext.Consumer>
        );
    }
}

export default Main;