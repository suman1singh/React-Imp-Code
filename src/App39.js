import React from 'react'
import User39 from './User39'
// Lifting state up
export default function App39() {
    function parentFunction(students){
        alert(students.name);
    }
  return (
    <>
        <h1>Lifting state up</h1>
        <User39 data={parentFunction} />
    </>
  )
}
