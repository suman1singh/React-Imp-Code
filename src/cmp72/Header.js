import React, { Component } from 'react';
import { commonContext } from './commonContext';
class Header extends Component {
    render() {
        return (
           <commonContext.Consumer>
            {
                ({color})=>(
                    <h1 style={{backgroundColor:color}}>Header page</h1>
                )
            }
           </commonContext.Consumer>
        );
    }
}

export default Header;