import React from 'react'
import {Link,Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
        <h1>Contact page</h1>
        <Link to="company" >Company</Link><br />
        <Link to="Channel" >Channel</Link><br />
        <Link to="other" >Other</Link><br />
        <Outlet />
    </div>
  )
}
