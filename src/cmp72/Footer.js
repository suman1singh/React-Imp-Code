import React, { Component } from 'react';
import { commonContext } from './commonContext';
class Footer extends Component {
    render() {
        return (
           <commonContext.Consumer>
            {
                ({color})=>(
                    <h1 className='footer' style={{backgroundColor:color}}>Footer page</h1>
                )
            }
           </commonContext.Consumer>
        );
    }
}

export default Footer;