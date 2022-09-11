import React, {useState} from 'react'

export default function App29() {
    const [data,setData]=useState("Suman")
    function updateData(){
        setData("Er.Suman");
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={updateData}>Make Suman as engineer</button>
    </div>
  )
}
