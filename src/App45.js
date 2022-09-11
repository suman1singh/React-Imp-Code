import React,{useState} from 'react'

export default function App45() {
    const [val,setval]=useState("suman");
  return (
    <>
        <h3>Controlled component</h3>
        <input type="text" value={val} onChange={(e)=>setval(e.target.value)}/>
        <h4>Updated value:{val}</h4>
    </>
  )
}
