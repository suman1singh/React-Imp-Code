import React from 'react'
import {NavLink} from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>About page</h1>
        <NavLink to='/user/suman'>Go to Suman's page</NavLink><br />
        <NavLink to='/user/shree' state={{name:'suman', GF:'Shree'}} >Go to Shree's page</NavLink><br />
        <NavLink to='/user/swastik'>Go to Swastik's page</NavLink><br />
        <NavLink to='/user/sushma'>Go to Sushma's page</NavLink><br />
    </div>
  )
}
