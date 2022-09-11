import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home page</h1>
        <Link to='/about'>Go to about page</Link>
    </div>
  )
}
