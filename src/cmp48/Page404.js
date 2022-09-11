import React from 'react'
import {Link} from 'react-router-dom'

export default function Page404() {
  return (
    <div>
        <h2>This page not exist</h2>
        <Link to='/'>Please go to home page</Link>
    </div>
  )
}
