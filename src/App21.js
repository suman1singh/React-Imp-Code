import React from 'react'
import Child21 from './Child21'

export default function App21() {
    function getData(){
        alert("Get data from App");
    }
  return (
    <div>
        <Child21 data={getData} />
    </div>
  )
}
