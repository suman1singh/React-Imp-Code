import React from 'react'

export default function User39(props) {
    const students={name:"Suman1", class: 10, section: "A" }
  return (
    <>
        <h1>Child component</h1>
        <button onClick={()=>props.data(students)}>Click me</button>
    </>
  )
}
